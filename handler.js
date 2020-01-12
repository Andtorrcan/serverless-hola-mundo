'use strict';
const querystring = require('querystring');

module.exports.hello = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify({
                message: `hola ${event.pathParameters.name}`,
            },
            null,
            2
        ),
    };
};

module.exports.hello_post = async event => {

    const body = querystring.parse(event['body']);
    console.log(body);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Esto es un post',
            input: body.name
        }),
    };
};