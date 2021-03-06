
let color_array = [];

async function checkColors() {
    var apiUrl = "https://my.api.mockaroo.com/cars.json?key=f34a0680";
    return fetch(apiUrl).then(response => {
        return response.json();
    }).then(jsondata => {
        console.log(jsondata)
        jsondata.map(item => {
            color_array.push(item.color)
        })
        console.log(color_array, 999)

        let unique_colors = []
        let col_count = []

        color_array.map(item1 => {
            if (!unique_colors.includes(item1)) {
                unique_colors.push(item1)

                count = 0
                color_array.map(item2 => {

                    if (item1 == item2) {
                        count += 1
                    }
                })
                col_count.push(count)
            }

        })


        console.log(unique_colors, 998)
        console.log(col_count, 999)

        var next = true;

        while (next) {
            var skip = true;
            for (var i = 0; i < col_count.length; i++) {
                if (col_count[i] < col_count[i + 1]) {
                    temp = col_count[i]
                    col_count[i] = col_count[i + 1]
                    col_count[i + 1] = temp

                    temp = unique_colors[i]
                    unique_colors[i] = unique_colors[i + 1]
                    unique_colors[i + 1] = temp
                    skip = false;
                }
            }

            if (skip) {
                next = false;
            }

        }

        console.log(col_count, 998)
        console.log(unique_colors, 998)


        const data = {
            labels: unique_colors,
            datasets: [{
                label: '# of Votes',
                data: col_count,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        }

        const config3 = {
            type: 'pie',
            data: data,
            options: {
                scales: {
                }
            }
        }

        const pieChart = new Chart(document.getElementById('pieChart').getContext('2d'), config3)

        return pieChart

    }).catch(err => {
        // Do something for an error here
    });
}

const pieChart = checkColors()