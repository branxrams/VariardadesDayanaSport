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

    Pedido.association = models => {
        Pedido.hasMany(models.Abono, {
            as: 'abonos',
            foreignKey: 'pedido_id',
            timestamps: false
        });

        Pedido.belongsTo(models.Empleado, {
            as: 'empleados',
            foreignKey: 'empleado_id',
            timestamps: false
        });

        Pedido.belongsTo(models.Cliente, {
            as: 'clientes',
            foreignKey: 'cliente_id',
            timestamps: false
        });

        Pedido.hasMany(models.Detalle, {
            as: 'detalles',
            foreignKey: 'pedido_id',
            timestamps: false
        });
    }

    return Pedido;
}