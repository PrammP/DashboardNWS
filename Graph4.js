const doughnutCanvas = document.getElementById("doughnutCanvas");
const doughnutChart = new Chart(doughnutCanvas, {
    type: "doughnut",
    data: {
        labels: ["TPE","PME","ETI","GE"],
        datasets: [{
            data:[15.8,65.1,12.2,6.9],
            backgroundColor: [
                "lightblue","orange","crimson","purple"
            ],
            hoverOffset: 15
        }]
    }
})