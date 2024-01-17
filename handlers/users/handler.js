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
        
        // const user = await client.query(`INSERT INTO users ()
        //                                  VALUES ($1, $2, $3)`,
        //     [
        //         object.userName,
        //         object.userLastName,
        //         object.userPhone,
        //     ],
        // );
        // console.log(user);
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