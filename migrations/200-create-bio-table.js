exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('bio', {
        bioId:             {
            type:       'bigserial',
            primaryKey: true,
        },
        userId: {
            type: 'bigint',
        },
        bioName:          {
            type:    'varchar(250)',
            unique:  true,
            comment: 'Имя пользователя',
        },
        bioMiddleName:       {
            type:    'varchar(250)',
            comment: 'Отчество пользователя',
        },
        bioLastName:          {
            type:    'varchar(20)',
            unique:  true,
            comment: 'Фамилия пользователя',
        },
        bioBirthDay: {
            type:    'timestamp with time zone',
            default: pgm.func('now()'),
            comment: 'дата создания',
        },
    }, {
        ifNotExists: true,
        comment:     'Таблица, где хранится информация о пользователе',
    });
};

exports.down = pgm => {
};