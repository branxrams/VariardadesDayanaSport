module.exports = (sequelize, dataTypes) => {
    let alias = 'Servicio';

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING,
            allowNull: true
        }
    }

    let config = {
        timestamps: false,
        tableName: 'servicio'
    }

    const Servicio = sequelize.define(alias, cols, config);

    return Servicio;
}