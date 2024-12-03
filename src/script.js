// Get references to elements
const countrySelect = document.getElementById('country-select');
const yearSelect = document.getElementById('year-select');
const loadDataButton = document.getElementById('load-data-btn');
const birthRateChartCanvas = document.getElementById('birth-rate-chart');
const deathRateChartCanvas = document.getElementById('death-rate-chart');

// Real data (replace with real API fetch in a production environment)
const data = {
    "USA": {
        2019: { birthRate: 12.4, deathRate: 8.5 },
        2020: { birthRate: 11.8, deathRate: 8.7 },
        2021: { birthRate: 11.4, deathRate: 8.9 },
        2022: { birthRate: 11.0, deathRate: 9.1 },
        2023: { birthRate: 10.8, deathRate: 9.3 }
    },
    "India": {
        2019: { birthRate: 20.1, deathRate: 7.2 },
        2020: { birthRate: 19.9, deathRate: 7.3 },
        2021: { birthRate: 19.6, deathRate: 7.4 },
        2022: { birthRate: 19.2, deathRate: 7.5 },
        2023: { birthRate: 18.9, deathRate: 7.6 }
    },
    "China": {
        2019: { birthRate: 10.5, deathRate: 7.4 },
        2020: { birthRate: 10.3, deathRate: 7.5 },
        2021: { birthRate: 10.1, deathRate: 7.6 },
        2022: { birthRate: 9.9, deathRate: 7.8 },
        2023: { birthRate: 9.7, deathRate: 8.0 }
    },
    "Germany": {
        2019: { birthRate: 9.2, deathRate: 11.5 },
        2020: { birthRate: 9.0, deathRate: 11.6 },
        2021: { birthRate: 8.8, deathRate: 11.7 },
        2022: { birthRate: 8.7, deathRate: 11.8 },
        2023: { birthRate: 8.5, deathRate: 12.0 }
    },
    "Russia": {
        2019: { birthRate: 10.1, deathRate: 12.3 },
        2020: { birthRate: 9.8, deathRate: 14.5 },
        2021: { birthRate: 9.6, deathRate: 14.9 },
        2022: { birthRate: 9.4, deathRate: 15.3 },
        2023: { birthRate: 9.2, deathRate: 15.0 }
    },
    "Spain": {
        2019: { birthRate: 7.8, deathRate: 9.2 },
        2020: { birthRate: 7.4, deathRate: 10.5 },
        2021: { birthRate: 7.2, deathRate: 10.3 },
        2022: { birthRate: 7.1, deathRate: 10.1 },
        2023: { birthRate: 7.0, deathRate: 10.0 }
    },
    "Iran": {
        2019: { birthRate: 17.6, deathRate: 5.3 },
        2020: { birthRate: 17.1, deathRate: 5.7 },
        2021: { birthRate: 16.6, deathRate: 5.8 },
        2022: { birthRate: 16.2, deathRate: 6.0 },
        2023: { birthRate: 15.8, deathRate: 6.2 }
    },
    "Japan": {
        2019: { birthRate: 7.0, deathRate: 11.2 },
        2020: { birthRate: 6.8, deathRate: 11.8 },
        2021: { birthRate: 6.6, deathRate: 11.9 },
        2022: { birthRate: 6.5, deathRate: 12.0 },
        2023: { birthRate: 6.4, deathRate: 12.1 }
    },
    "Australia": {
        2019: { birthRate: 12.1, deathRate: 6.5 },
        2020: { birthRate: 11.8, deathRate: 6.8 },
        2021: { birthRate: 11.7, deathRate: 6.7 },
        2022: { birthRate: 11.6, deathRate: 6.8 },
        2023: { birthRate: 11.5, deathRate: 6.9 }
    },
    "Pakistan": {
        2019: { birthRate: 27.0, deathRate: 6.8 },
        2020: { birthRate: 26.7, deathRate: 6.7 },
        2021: { birthRate: 26.3, deathRate: 6.5 },
        2022: { birthRate: 26.0, deathRate: 6.4 },
        2023: { birthRate: 25.8, deathRate: 6.3 }
    },
    "Bhutan": {
        2019: { birthRate: 16.9, deathRate: 6.0 },
        2020: { birthRate: 16.7, deathRate: 6.1 },
        2021: { birthRate: 16.4, deathRate: 6.2 },
        2022: { birthRate: 16.2, deathRate: 6.3 },
        2023: { birthRate: 16.0, deathRate: 6.4 }
    },
    "Nepal": {
        2019: { birthRate: 20.2, deathRate: 5.4 },
        2020: { birthRate: 19.9, deathRate: 5.6 },
        2021: { birthRate: 19.5, deathRate: 5.7 },
        2022: { birthRate: 19.2, deathRate: 5.8 },
        2023: { birthRate: 18.9, deathRate: 6.0 }
    },
    "Myanmar": {
        2019: { birthRate: 18.9, deathRate: 8.2 },
        2020: { birthRate: 18.5, deathRate: 8.4 },
        2021: { birthRate: 18.2, deathRate: 8.5 },
        2022: { birthRate: 18.0, deathRate: 8.7 },
        2023: { birthRate: 17.8, deathRate: 8.8 }
    },
    "South Africa": {
        2019: { birthRate: 23.0, deathRate: 9.1 },
        2020: { birthRate: 22.6, deathRate: 11.0 },
        2021: { birthRate: 22.3, deathRate: 11.3 },
        2022: { birthRate: 22.0, deathRate: 11.5 },
        2023: { birthRate: 21.8, deathRate: 11.4 }
    },
    "Israel": {
        2019: { birthRate: 20.5, deathRate: 5.3 },
        2020: { birthRate: 20.2, deathRate: 5.4 },
        2021: { birthRate: 20.0, deathRate: 5.6 },
        2022: { birthRate: 19.8, deathRate: 5.7 },
        2023: { birthRate: 19.6, deathRate: 5.8 }
    },
    "Iraq": {
        2019: { birthRate: 30.0, deathRate: 4.4 },
        2020: { birthRate: 29.5, deathRate: 4.5 },
        2021: { birthRate: 29.0, deathRate: 4.6 },
        2022: { birthRate: 28.7, deathRate: 4.8 },
        2023: { birthRate: 28.4, deathRate: 5.0 }
    },
    "Italy": {
        2019: { birthRate: 7.4, deathRate: 10.7 },
        2020: { birthRate: 7.1, deathRate: 12.5 },
        2021: { birthRate: 7.0, deathRate: 12.4 },
        2022: { birthRate: 6.8, deathRate: 12.3 },
        2023: { birthRate: 6.7, deathRate: 12.2 }
    }
    // Add more country data as needed
};

// Initialize chart variables
let birthRateChart, deathRateChart;

// Function to update charts based on selected country and year
function updateCharts(country, year) {
    const countryData = data[country];

    if (!countryData || !countryData[year]) {
        alert('Data for the selected country and year is not available.');
        return;
    }

    const birthRate = countryData[year].birthRate;
    const deathRate = countryData[year].deathRate;

    // Update Birth Rate Chart
    if (birthRateChart) birthRateChart.destroy();
    birthRateChart = new Chart(birthRateChartCanvas, {
        type: 'bar',
        data: {
            labels: [`${year}`],
            datasets: [{
                label: 'Birth Rate',
                data: [birthRate],
                backgroundColor: 'rgba(46, 204, 113, 0.6)',
                borderColor: 'rgba(46, 204, 113, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Update Death Rate Chart
    if (deathRateChart) deathRateChart.destroy();
    deathRateChart = new Chart(deathRateChartCanvas, {
        type: 'bar',
        data: {
            labels: [`${year}`],
            datasets: [{
                label: 'Death Rate',
                data: [deathRate],
                backgroundColor: 'rgba(231, 76, 60, 0.6)',
                borderColor: 'rgba(231, 76, 60, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Event listener for the button click to load data
loadDataButton.addEventListener('click', () => {
    const selectedCountry = countrySelect.value;
    const selectedYear = parseInt(yearSelect.value, 10);
    updateCharts(selectedCountry, selectedYear);
});
