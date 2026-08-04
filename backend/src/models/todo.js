const db = require('../config/db')

const get = async() => {
    const { rows } = await db.query("SELECT * FROM todos");
    return rows
}

const create = async(title) => {
    const { rows } = await db.query(
        `INSERT INTO todos (title) VALUES ($1) RETURNING *`,
         [title]
    )
    return rows[0];
}

const update = async (id, title, completed) => {
    const { rows } = await db.query(
        `UPDATE todos 
            SET title=$1,
                completed=$2
         WHERE id=$3
         RETURNING *`,
        [title, completed, id]
    );

    return rows[0];
};

const remove = async (id) => {
    const { rowCount } = await db.query(
        "DELETE FROM todos WHERE id=$1 RETURNING *",
        [id]
    )
    
    return rowCount
}

module.exports = {
    get,
    create,
    update,
    remove
}