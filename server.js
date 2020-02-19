const handler = require('serve-handler');
const http = require('http');
const path = require('path');
const capitalFile = "/index.html";

let PORT = 80;

const server = http.createServer((request, response) => {

  return handler(request, response,{
      cleanUrls:true,
      rewrites:[
        {"source": "/**", "destination": capitalFile }
      ],
      renderSingle:true,
      public:path.join(__dirname),
      symlinks:true,
      etag:true
  });
});

server.listen(PORT, () => {
    console.log('\x1b[34m%s\x1b[0m',`\n Servidor Picudo en: \n\n PORT:${PORT} \n\n Y lo que le sigue en linea.\n`);
});
