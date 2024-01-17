/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('users', {
        userId:             {
            type:       'bigserial',
            primaryKey: true,
        },
        userEmail:          {
            type:    'varchar(250)',
            unique:  true,
            comment: 'Почта пользователя',
        },
        userPassword:       {
            type:    'varchar(250)',
            comment: 'Пароль пользователя',
        },
        userPhone:          {
            type:    'varchar(20)',
            unique:  true,
            comment: 'Телефон пользователя',
        },
        userTelegramChatId: {
            type:    'varchar(50)',
            unique:  true,
            comment: 'telegram chat id',
        },
        createDate:         {
            type:    'timestamp with time zone',
            default: pgm.func('now()'),
        },
        updateDate:         {
            type:    'timestamp with time zone',
            default: pgm.func('now()'),
        },
    }, {
        ifNotExists: true,
        comment:     'Таблица, где хранится информация о пользователе',
    });
};

exports.down = pgm => {
};