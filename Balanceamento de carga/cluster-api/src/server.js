import http from 'http'; // EXTRAI PACOTE
const processId = process.pid; // PUXA O ID DO PROCESSO ATUAL

// CRIA O SERVIDOR
const server = http.createServer((request, response) => {
    for (let index = 0; index < 1e7; index++);
    response.end(`Handled by pid: ${processId}`); 
});

// INICIA O SERVIDOR
server.listen(3000).once('listening', () => {
    console.log("Server started in precess ", processId);
});

// AGUARDAR AS CONEXOES SEREM ENCERRADAS PARA SÓ ENTÃO ENCERRAR O PROGRAMA
process.on("SIGTERM", () => {
    console.log('Server ending', new Date().toISOString());
    server.close(() => process.exit());
});