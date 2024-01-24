exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('itemcategories', {
        Id:             {
            type:       'bigserial',
            primaryKey: true,
        },
        itemId:             {
            type:       'bigint',
            primaryKey: true,
        },
        categoryId:             {
            type:       'bigint',
            primaryKey: true,
        },
    }, {
        ifNotExists: true,
        comment:     'Таблица, где хранится информация о пользователе',
    });
};

exports.down = pgm => {
};