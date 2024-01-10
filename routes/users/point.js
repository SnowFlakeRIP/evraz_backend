const { createUser } = require('../../handlers/users/handler');

module.exports = function (fastify, opts, next) {
    
    fastify.route({
        url:    '/create',
        method: 'POST',
        schema: {
            body: {
                type:       'object',
                properties: {
                    userName:     {
                        type: 'string',
                    },
                    userLastName: {
                        type: 'string',
                    },
                    userPhone:    {
                        type: 'string',
                    },
                },
                required:   [ 'userName' ],
            },
        },
        async handler(request, reply) {
            const data = await createUser(request.body);
            reply.status(data.statusCode)
            reply.send(data)
        },
    });
    
    next();
};