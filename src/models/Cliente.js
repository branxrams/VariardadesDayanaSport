module.exports = (sequelize, dataTypes) => {
    let alias = 'Cliente';

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
        direccion:{
            type: dataTypes.STRING,
            allowNull: true
        },
        telefono: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        }
    }

    let config = {
        timestamps: false,
        tableName: 'cliente'
    }

    const Cliente = sequelize.define(alias, cols, config);

    Cliente.association = models => {
        Cliente.hasMany(models.Pedido, {
            as: 'pedidos',
            foreignKey: 'cliente_id',
            timestamps: false
        })
    }

    return Cliente;
}