const { pool } = require('../../dependencies');

async function createUser(object) {
    const data = {
        message:    'error',
        statusCode: 400,
    };
    
    const funcName = 'createUser';
    const client = await pool.connect();
    
    try {
        const user = await client.query(`INSERT INTO users ("userName", "userLastName", "userPhone")
                                         VALUES ($1, $2, $3)`,
            [
                object.userName,
                object.userLastName,
                object.userPhone,
            ],
        );
        console.log(user);
    }
    catch (err) {
        console.log(`${ funcName }: CATCH ERROR`);
        console.log(err.message, err.stack);
    }
    finally {
        client.release();
        console.log(`${ funcName }: client release()`);
    }
    
    return data;
}

module.exports = {
    createUser: createUser,
    
};