var ping = require('ping');

var hosts = [
  '192.168.0.1',
  '10.15.6.129',
];

for (let host of hosts) {
  // WARNING: -i 2 argument may not work in other platform like windows
  ping.promise.probe(host, {
    timeout: 2,
    extra: ['-i', '2'],
  }).then(console.log);
}
