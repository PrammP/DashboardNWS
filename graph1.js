const lineCanvas = document.getElementById("lineCanvas");
const lineChart = new Chart(lineCanvas, {
    type: "line",
    data: {
        labels: ["2019","2020","2021"],
        datasets: [{
           label:"Alternances",
            data:[62,107,23],
            fill: true,
            backgroundColor: "Crimson",
            tension: 0.4
           
        }]
    },
    options: {
        elements: {
            point: {
                pointBorderColor: "White"
            }
        }
    },
    scales: {
        y: {
            ticks: {
                color: "#333"
            },
            suggestedMax:100,
            suggestedMin: 00
        },
        x: {
            ticks: {
                color: "#333"
            }
        }
    }
})