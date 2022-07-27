const http = require('http')

const server = http.createServer((request, response)=>{
    if(request.url === '/'){
        response.end('Welcome to our home page')
    }
    if(request.url === '/about'){
        response.end('Here is the about apagge')
    }
    response.end(`
    <h1>Opps!</h1>
    <p>We cant seem to find the page that you are looking for</p>
    <a href='/'>Back home</a>
    `)
})

server.listen(5000)