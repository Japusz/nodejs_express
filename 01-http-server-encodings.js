const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./html/index.html')
const homePageJIS = readFileSync('./html/indexJIS.html')
const homePageUTF = readFileSync('./html/indexUTF.html')

const server = http.createServer((req,res)=>{
    const url =req.url
    // home page
    if(url === '/'){
        res.writeHead(200,{'content-type':"text/html"})
        res.write(homePage)}
    else if(url === '/jp-sjis'){
        res.writeHead(200,{'content-type':"text/html"})
        res.write(homePageJIS)}
    else if(url === '/jp-utf8'){
        res.writeHead(200,{'content-type':"text/html"})
        res.write(homePageUTF)}
    else{
        res.writeHead(404,{'content-type':"text/html; charset=utf-8"})
        //res.write('<h3 style="color:red">Sorry!</br>We did not find the page you are looking for.</h3>')
    }
    res.end()
})
server.listen(3000)
