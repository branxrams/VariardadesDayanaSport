module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';

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
        precio:{
            type: dataTypes.INTEGER,
            allowNull: true
        },
        talla: {
            type: dataTypes.STRING
        },
        servicio_id: {
            type: dataTypes.INTEGER
        },
        colegio_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        timestamps: false,
        tableName: 'producto'
    }

    const Producto = sequelize.define(alias, cols, config);

    return Producto;
}