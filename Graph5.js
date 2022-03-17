

const barCanvas = document.getElementById("barCanvas");
const barChart = new Chart(barCanvas, {
    type: "bar",
    data: {
        labels: ["Rouen","Métropole Rouennaise","Eure","Arrondissement de Rouen","Hors Normandie","Normandie(Hors 27&76)","Arrondissement du Havre", "Arrondissement de Dieppe"],
        datasets: [{
            label: "Nombre d'entreprises" ,
            data:[103,173,56,15,81,11,11,21],
            backgroundColor: [
                "lightblue",
            ]
        }]
    },
    options: {
        scales: {
            y: {
                suggestedMax: 200,
                ticks: {
                    font: {
                        size: 18
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 18
                    }
                }
            }
        },
        indexAxis:'y',
    }
})

