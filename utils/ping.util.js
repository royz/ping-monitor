const ping = require('ping');

const ipAddresses = [
  {name: 'Default Gateway', ip: '192.168.0.1'},
  {name: 'Router', ip: '192.168.0.1'},
]

const checkPing = async ipAddress => {
  try {
    const res = await ping.promise.probe(ipAddress, {
      timeout: 2,
      extra: ['-i', '2'],
    });
    return res.time;
  } catch (err) {
    console.log(err.message);
    return null;
  }
}

let i = 1;

setInterval(() => {
  checkPing('10.15.6.129').then((ping) => console.log(`${i}. ${ping}ms`))
  i++;
}, 1000)
