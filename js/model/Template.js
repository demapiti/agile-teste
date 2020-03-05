class Template {

  update(dados) {
    new Chart(document.querySelector('#chart'), {
      type: 'bar',
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr"],
            datasets: [
              {
                label: 'Sales by Month for',
                data: dados,
                backgroundColor: '#1E90FF'
              }
            ]
          },
          options: {
              scales: {
                  yAxes: [
                      {
                          ticks: {
                              beginAtZero: true
                          }
                      }
                  ]
              }
          }
      }
   )}
}