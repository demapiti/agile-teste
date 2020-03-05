    let $ = document.querySelector.bind(document);

    let chart = $('#chart');

    let categoria = $("#categoria");
    let produto = $("#produto");
    let marca = $("#marca");
    
    let produto1 = $('#produto1');
    let produto2 = $('#produto2');
    let marca1 = $('#marca1');
    let marca2 = $('#marca2');

    let ctx = new Chart(chart, {
        type: 'bar',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr"],
                    datasets: [
                        {
                            label: 'Sales by Month for',
                            data: [0,0,0,0],
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
    
    function chartUpdate(dados) {
        ctx.data.datasets[0].data = dados;
        ctx.update();
    }

    function update() {
        let catSelect = categoria;
        let catOption = catSelect.options[catSelect.selectedIndex];

        let podSelect = produto;
        let podOption = podSelect.options[podSelect.selectedIndex];

        let marSelect = marca;
        let marOption = marSelect.options[marSelect.selectedIndex];        
        
    
        if (catOption.value == 'Camisa') {
            produto1.textContent = 'Camisa A';
            produto1.value = 'Camisa A';

            produto2.textContent = 'Camisa B';
            produto2.value = 'Camisa B';

        } else {
            produto1.textContent = 'Bermuda A';
            produto1.value = 'Bermuda A';

            produto2.textContent = 'Bermuda B';
            produto2.value = 'Bermuda B';
        }

        if (podOption.value == 'Camisa A') {
            marca1.textContent = 'Camisa A1';
            marca1.value = 'Camisa A1';

            marca2.textContent = 'Camisa A2';
            marca2.value = 'Camisa A2';
            
        } else if (podOption.value == 'Camisa B') {
            marca1.textContent = 'Camisa B1';
            marca1.value = 'Camisa B1';

            marca2.textContent = 'Camisa B2';
            marca2.value = 'Camisa B2';

        }

        if (podOption.value == 'Bermuda A') {
            marca1.textContent = 'Bermuda A1';
            marca1.value = 'Bermuda A1';

            marca2.textContent = 'Bermuda A2';
            marca2.value = 'Bermuda A2';
            
        } else if (podOption.value == 'Bermuda B') {
            marca1.textContent = 'Bermuda B1';
            marca1.value = 'Bermuda B1';

            marca2.textContent = 'Bermuda B2';
            marca2.value = 'Bermuda B2';

        }
           
        console.log(marOption.value);
        
        if (marOption.value == 'Camisa A1') chartUpdate([10,5,6,12])
        if (marOption.value == 'Camisa A2') chartUpdate([5,10,6,8])
        if (marOption.value == 'Camisa B1') chartUpdate([35,12,22,50])
        if (marOption.value == 'Camisa B2') chartUpdate([15,12,8,3])
        if (marOption.value == 'Bermuda A1') chartUpdate([20,15,21,22])
        if (marOption.value == 'Bermuda A2') chartUpdate([10,15,8,12])
        if (marOption.value == 'Bermuda B1') chartUpdate([15,10,8,6])
        if (marOption.value == 'Bermuda B2') chartUpdate([12,16,10,20])
}
update();