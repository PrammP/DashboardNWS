const bareCanvas = document.getElementById("bareCanvas");
const bareChart = new Chart(bareCanvas, {
    type: "bar",
    data: {
        labels: ["Entreprise Privée","Association","Etablissement Publique","Collectivité","Administration Publique",],
        datasets: [{
            label: "Nombre d'entreprises" ,
            data:[438,36,30,15,4],
            backgroundColor: [
                "lightblue",
            ]
        }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    font: {
                        size: 18
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 14
                    }
                }
            }
        },
        
    }
})