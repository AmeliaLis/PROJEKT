let year_array = [];

    async function checkYears() {
        var apiUrl = "https://my.api.mockaroo.com/cars.json?key=f34a0680";
        return fetch(apiUrl).then(response => {
            return response.json();
        }).then(jsondata => {
            console.log(jsondata)
            jsondata.map(item => {
                year_array.push(item.car_year)
            })
            console.log(year_array, 999)

            let unique_years = []
            let ye_count = []

            year_array.map(item1 => {
                if (!unique_years.includes(item1)) {
                    unique_years.push(item1)

                    count = 0
                    year_array.map(item2 => {

                        if (item1 == item2) {
                            count += 1
                        }
                    })
                    ye_count.push(count)
                }

            })


            console.log(unique_years, 998)
            console.log(ye_count, 999)

            var next = true;

            while (next) {
                var skip = true;
                for (var i = 0; i < ye_count.length; i++) {
                    if (ye_count[i] < ye_count[i + 1]) {
                        temp = ye_count[i]
                        ye_count[i] = ye_count[i + 1]
                        ye_count[i + 1] = temp

                        temp = unique_years[i]
                        unique_years[i] = unique_years[i + 1]
                        unique_years[i + 1] = temp
                        skip = false;
                    }
                }

                if (skip) {
                    next = false;
                }

            }

            console.log(ye_count, 998)
            console.log(unique_years, 998)

            const labels = unique_years({count: unique_years.length});
            const data = {
              labels: labels,
              datasets: [{
                label: 'My First Dataset',
                data: ye_count,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
                borderWidth: 1
              }]
            };            

            const config = {
                type: 'bar',
                data: data,
                options: {
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                },
              };

            const barChart = new Chart(document.getElementById('barChart').getContext('2d'), config)

            return barChart
        }).catch(err => {
            // Do something for an error here
        });
    }

    const barChart = checkYears()