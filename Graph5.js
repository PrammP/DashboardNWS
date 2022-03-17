

const barCanvas = document.getElementById("barCanvas");
const barChart = new Chart(barCanvas, {
    type: "bar",
    data: {
        labels: ["Rouen","Arrondissement de Rouen","Métropole Rouennaise","Arrondissement de Dieppe","Arrondissement du Havre","Eure","Normandie(Hors 27&76)","Hors Normandie"],
        datasets: [{
            label: "Nombre d'entreprises" ,
            data:[103,15,173,11,11,56,81,21],
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

