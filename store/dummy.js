const db = {
    user: [{ id: '1', name: 'Andres', password: 'aasas' }],
};

async function list(table) {
    return db[table];
}

async function get(table, id) {
    let collection = await list(table);
    return collection.filter((item) => item.id === id)[0] || null;
}

async function upsert(table, data) {
    if (!db[table]) {
        db[table] = [];
    }
    db[table].push(data);
    console.log(db);
}

async function remove(table, id) {
    const indexToDelete = db[table].findIndex((user) => user.id === id);
    if (indexToDelete !== -1) {
        db[table].splice(indexToDelete, 1);
        console.log(`Usuario con ID ${id} eliminado.`);
    } else {
        throw new Error(`No se encontró ningún usuario con ID ${id}.`);
    }
}

module.exports = {
    list,
    get,
    upsert,
    remove,
};
