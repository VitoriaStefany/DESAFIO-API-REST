const http = require("http");
const port = 3000;

const rotas ={
    '/': 'Curso de Node',
    '/api/v1/employee': 'Funcionários',
    '/api/v1/product': 'Produtos',
    '/api/v1/products': 'Listagem de produtos',
}

const server = http.createServer((req: Request, res: Response) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log{`Server Running in http://localhost:${port}`}
});