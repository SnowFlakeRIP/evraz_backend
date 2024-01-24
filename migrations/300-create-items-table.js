exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('items', {
        itemId:             {
            type:       'bigserial',
            primaryKey: true,
        },
        itemName:          {
            type:    'varchar(500)',
            unique:  true,
            comment: 'Почта пользователя',
        },
        itemPrice:       {
            type:    'numeric(30,2)',
            comment: 'Пароль пользователя',
        },
        itemCount:          {
            type:    'int',
            unique:  true,
            comment: 'Телефон пользователя',
        },
        itemSale: {
            type:    'numeric(30,2)',
            unique:  true,
            comment: 'telegram chat id',
        },
        itemMeta:         {
            type:    'jsonb',
        },
        itemPesc:         {
            type:    'varchar(200)',
            unique:  true,
            comment: 'telegram chat id',
        },
    }, {
        ifNotExists: true,
        comment:     'Таблица, где хранится информация о пользователе',
    });
};

exports.down = pgm => {
};
