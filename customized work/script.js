// script.js

const labels = ['January', 'February', 'March', 'April', 'May'];
const dataValues = [10, 20, 15, 25, 18];

// Create the chart
const ctx = document.getElementById('myLineChart').getContext('2d');
const myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Custom Line Chart',
            data: dataValues,
            borderColor: 'blue', // Customize line color
            backgroundColor: 'rgba(0, 0, 255, 0.2)', // Customize fill color
            borderWidth: 2, // Customize line width
            pointRadius: 5, // Customize point size
            pointBackgroundColor: 'red', // Customize point color
        }],
    },
    options: {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Month',
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Value',
                },
            },
        },
    },
});
