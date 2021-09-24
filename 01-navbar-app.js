const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res)=>{
    const url =req.url
    // home page
    if(url === '/'){
        res.writeHead(200,{'content-type':"text/html"})
        res.write(homePage)}
    // styles.css
    else if(url === '/styles.css'){
        res.writeHead(200,{'content-type':"text/css"})
        res.write(homeStyles)}
    // logo/image
    else if(url === '/logo.svg'){
        res.writeHead(200,{'content-type':"image/svg+xml"})
        res.write(homeImage)}
    // logic
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type':"text/javascript"})
        res.write(homeLogic)}
    else{
        res.writeHead(404,{'content-type':"text/html"})
        //res.write('<h3 style="color:red">Sorry!</br>We did not find the page you are looking for.</h3>')
    }
    res.end()
})
server.listen(3000)

