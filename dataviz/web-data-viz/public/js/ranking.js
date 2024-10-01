// ranking.js

document.addEventListener("DOMContentLoaded", () => {
    fetch('/api/ranking')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.nome);
            const scores = data.map(item => item.qtdAcertos);

            const ctx = document.getElementById('rankingChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Pontuações',
                        data: scores,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os dados do ranking:', error);
        });
});
