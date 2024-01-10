/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('test', {
        id:           {
            type:       'bigserial',
            primaryKey: true,
        },
    }, {
        ifNotExists: true,
        comment:'Таблица, где хранится информация о пользователе'
    });
};

exports.down = pgm => {
};