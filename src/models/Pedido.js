module.exports = (sequelize, dataTypes) => {
    let alias = 'Pedido';

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fechaModificacion:{
            type: dataTypes.STRING,
            allowNull: true
        },
        estado: {
            type: dataTypes.INTEGER
        },
        empleado_id: {
            type: dataTypes.INTEGER
        },
        cliente_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        timestamps: true,
        created_at: 'fechaCreacion',
        tableName: 'pedido'
    }


    const Pedido = sequelize.define(alias, cols, config);

    return Pedido;
}