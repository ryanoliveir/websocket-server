const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080 });
const url = 'ws://localhost:8080'
console.info(`[+] Server on: ${url}`);
wss.on('connection', function connection(ws) {
  console.log('[+] New client connection')
  ws.on('message', function message(data) {
    const response = JSON.parse(data)
    // console.log('received: %s', );
    console.debug(response)
    ws.send('tks!')
  });

  console.log();
  ws.send('something');
});


// https://www.codecademy.com/article/getting-user-inpl