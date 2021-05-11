const socket = io.connect('http://localhost:5000');

const pings = [];
const labels = [];

socket.on('ping-update', data => {
  console.log(data);
  pings.push(data);
  labels.push(pings.length);
  addData(myChart, pings.length, data)
})


const ctx = document.getElementById('chart');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    labels: labels,
    datasets: [{
      fill: true,
      label: '# of Votes',
      // data: [12, 19, 3, 5, 2, 3],
      data: pings,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
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


function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
}
