const db = require('./connection');

async function syncDB() {
    try {
        await db.sync();
        console.log('Models synchronized with the database.');
    } catch (error) {
        console.error('Error synchronizing models with the database:', error);
    }
}

module.exports = syncDB;
