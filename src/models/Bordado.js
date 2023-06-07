module.exports = (sequelize, dataTypes) => {
    let alias = 'Bordado';

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING,
            allowNull: true
        },
        tipo: {
            type: dataTypes.STRING
        }
    }

    let config = {
        timestamps: false,
        tableName: 'bordado'
    }

    const Bordado = sequelize.define(alias, cols, config);


    return Bordado;
}