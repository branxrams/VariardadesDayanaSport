module.exports = (sequelize, dataTypes) => {
    let alias = 'Detalle';

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        monto_total:{
            type: dataTypes.INTEGER,
        },
        cantidad: {
            type: dataTypes.INTEGER
        },
        pedido_id:{
            type: dataTypes.INTEGER,
        },
        producto_id:{
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        timestamps: false,
        tableName: 'detalle'
    }

    const Detalle = sequelize.define(alias, cols, config);

    return Detalle;
}