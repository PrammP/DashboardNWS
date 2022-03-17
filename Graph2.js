const pieCanvas = document.getElementById("pieCanvas");
const pieChart = new Chart(pieCanvas, {
    type: "pie",
    data: {
        labels: ["Administration","Industrie","Commerce","Filière Numérique","Services&Conseil","Services (Hors Numérique)","Construction"],
        datasets: [{
            data:[5.2,8.8,16,17.6,21,28.7,2.7],
            backgroundColor: [
                "lightblue","blue","crimson","violet","lightgreen","orange","cyan"
            ],
            hoverOffset: 15
        }]
    }
})