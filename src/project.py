import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
# Load the dataset
data = pd.read_csv('birth_death_data.csv')

# Inspect the first few rows
print(data.head())
# Drop rows with missing values
data.dropna(inplace=True)

# Convert year to integer
data['Year'] = data['Year'].astype(int)

# Check for duplicates
data = data.drop_duplicates()

# Inspect summary statistics
print(data.describe())
# Calculate percent change
data['Birth Rate Change (%)'] = data['Birth Rate'].pct_change() * 100
data['Death Rate Change (%)'] = data['Death Rate'].pct_change() * 100

# Calculate rolling averages (smoothing the trends)
data['Birth Rate Rolling Avg'] = data['Birth Rate'].rolling(window=5).mean()
data['Death Rate Rolling Avg'] = data['Death Rate'].rolling(window=5).mean()
# Line plot for birth and death rates
plt.figure(figsize=(12, 6))
plt.plot(data['Year'], data['Birth Rate'], label='Birth Rate', color='blue')
plt.plot(data['Year'], data['Death Rate'], label='Death Rate', color='red')
plt.xlabel('Year')
plt.ylabel('Rate (per 1000 population)')
plt.title('Global Birth and Death Rates Over Time')
plt.legend()
plt.grid()
plt.show()

# Scatter plot for correlation
plt.figure(figsize=(8, 6))
plt.scatter(data['Birth Rate'], data['Death Rate'], color='green', alpha=0.7)
plt.xlabel('Birth Rate')
plt.ylabel('Death Rate')
plt.title('Correlation Between Birth and Death Rates')
plt.grid()
plt.show()

# Bar chart for decade comparison
data['Decade'] = (data['Year'] // 10) * 10
decade_avg = data.groupby('Decade')[['Birth Rate', 'Death Rate']].mean()

decade_avg.plot(kind='bar', figsize=(10, 6))
plt.xlabel('Decade')
plt.ylabel('Average Rate (per 1000 population)')
plt.title('Average Birth and Death Rates by Decade')
plt.grid()
plt.show()
