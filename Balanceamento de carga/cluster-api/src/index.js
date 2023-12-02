import os from 'os';
import cluster from 'cluster';

// CLUSTER PRIMARIO
const runPrimaryProcess = () => {
    // const processesCount = os.cpus().length * 2; // TOTAL DE PROCESSOS DISPONIVEL COM BASE O NUMERO DE CPU's MULTIPLICADO POR (2)
    const processesCount = 25; // TOTAL DE PROCESSOS FIXO
    console.log(`Primary ${process.pid} is running`);
    console.log(`Forking server with ${processesCount} processes \n`);

    for (let index = 0; index < processesCount; index ++)
        cluster.fork();
};

// CLUSTER VIRTUAL
const runWorkerProcess = async () => {
    await import('./server.js'); // IMPORTA O SERVIDOR
};

// OPERADOR TERNARIO PARA VERIFICAR SE O CLUSTER ESTA NO PRIMARIO OU VIRTUAL
cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess();