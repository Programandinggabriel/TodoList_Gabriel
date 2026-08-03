const db = require('../config/db')

const get = async() => {
    const { rows } = await db.query("SELECT * FROM todos");
    return rows
}

const create = async(todo) => {
    
    const { rows } = await db.query(
        `INSERT INTO todos (title)
         VALUES($1)
         RETURNING *`,
         [todo.title]
    )
    return rows[0];
}

const update = async (id, todo) => {

    const { rows } = await db.query(
        `UPDATE todos
         SET title=$1
         WHERE id=$2
         RETURNING *`,
        [todo.title, id]
    );

    return rows[0];
};

const remove = async (id) => {
    await db.query(
        "DELETE FROM todos WHERE id=$1",
        [id]
    ) 
}

module.exports = {
    get,
    create,
    update,
    remove
}