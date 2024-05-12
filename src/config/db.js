const db = require('./connection');

async function syncDB() {
    try {
        await db.sync();
        console.log('Modelos sincronizados com o banco de dados.');
    } catch (error) {
        console.error('Erro ao sincronizar modelos com o banco de dados:', error);
    }
}

module.exports = syncDB;
