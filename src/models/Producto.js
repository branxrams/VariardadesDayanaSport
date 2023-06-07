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

    Producto.association = models => {
        Producto.BelongsTo(models.Colegio, {
            as: 'colegios',
            foreginKey: 'colegio_id',
            timestamps: false
        });

        Producto.BelongsTo(models.Colegio, {
            as: 'Servicios',
            foreginKey: 'servicio_id',
            timestamps: false
        });

        Producto.hasMany(models.Detalle, {
            as: 'detalles',
            foreginKey: 'producto_id',
            timestamps: false
        })

    }
    return Producto;
}