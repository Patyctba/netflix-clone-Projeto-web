module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password:'docker',
    database: 'Netflix',
    define:{
    timestamps: true,
    underscored: true, //padranização de nomenclatura de tabelas e colunas por underscored ex: usuario_grupo
    underscoredAll: true,
    },
};