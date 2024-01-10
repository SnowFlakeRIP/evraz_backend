async function test() {
    const data = {
        message:    'error',
        statusCode: 400,
    };
    
    const funcName = 'test';
    
    try {
        data.message = {
            success: true,
        };
        data.statusCode = 200;
    }
    catch (err) {
        console.log(`${ funcName }: CATCH ERROR`);
        console.log(err.message, err.stack);
    }
    
    return data;
}

module.exports = {
    test: test,
    
};