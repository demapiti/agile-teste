class Template {

  constructor(dados) {
    this._dados = dados;
  }

    update(dados) {
      let chart = new Chart(document.querySelector('#chart'), {
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
      })
    }
}