const bcrypt = require('bcryptjs')
const { pool } = require('../../dependencies');

async function createUser(object) {
    const data = {
        message:    'error',
        statusCode: 400,
    };
    
    const funcName = 'createUser';
    const client = await pool.connect();
    
    try {
        // Проверяем, что пользователя с такой почтой нет на платформе
        
        const checkUser = await client.query(`SELECT *
                                              FROM users
                                              WHERE "userEmail" = $1`, [ object.userEmail ]);
        
        if (checkUser.rows.length > 0) {
            console.log(`${funcName}: Пользователь с такой почтой уже зарегистрирован`);
            
            data.message = 'Пользователь с такой почтой уже зарегистрирован'
            return data
        }
        const password = await bcrypt.hashSync(object.userPassword, 10);
        const createUser = await client.query(`INSERT INTO users ("userPhone", "userEmail", "userPassword")
                                               VALUES ($1, $2, $3)
                                               RETURNING "userId", "userPassword"`,
            [
                object.userPhone,
                object.userEmail,
                password
            ]
        );
        
        if (createUser.rowCount === 0 || createUser.rows.length === 0) {
            console.log(`${ funcName }: Запрос на создание пользователя не выполнен`);
            
            data.message = 'Запрос на создание пользователя не выполнен';
            return data;
        }
        
        console.log(createUser);
        
        // const userId = createUser.rows[0].userId
        // const userPassword = createUser.rows[0].userPassword
        
        const { userId, userPassword } = createUser.rows[0]
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