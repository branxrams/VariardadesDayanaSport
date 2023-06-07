module.exports = (sequelize, dataTypes) => {
    let alias = 'Abono';

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pedido_id:{
            type: dataTypes.INTEGER,
            allowNull: true
        },
        montoAbono:{
            type: dataTypes.INTEGER,
            allowNull: true
        }
    }

    let config = {
        timestamps: true,
        created_at: 'fechaPago',
        tableName: 'abono'
    }

    const Abono = sequelize.define(alias, cols, config);


    return Abono;
}