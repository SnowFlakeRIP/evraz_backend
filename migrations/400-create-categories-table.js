exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('categories', {
        categoryId:             {
            type:       'bigserial',
            primaryKey: true,
        },
        categoryName:          {
            type:    'varchar(500)',
            unique:  true,
            comment: 'Имя пользователя',
        },
    }, {
        ifNotExists: true,
        comment:     'Таблица, где хранится информация о пользователе',
    });
};

exports.down = pgm => {
};