const { test } = require('../../handlers/test/handler');

module.exports = function (fastify, opts, next) {
    
    fastify.route({
        url:    '/test',
        method: 'GET',
        schema: {
            response: {
                200: {
                    type:       'object',
                    properties: {
                        message:    {
                            type:       'object',
                            properties: {
                                success: { type: 'boolean' },
                            },
                        },
                        statusCode: { type: 'number' },
                    },
                },
            },
        },
        async handler(request, reply) {
            const data = await test();
            reply.status(data.statusCode)
            reply.send(data);
        },
    });
    
    next();
};