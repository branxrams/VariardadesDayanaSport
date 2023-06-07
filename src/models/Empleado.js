module.exports = (sequelize, dataTypes) => {
    let alias = 'Empleado';

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuario:{
            type: dataTypes.STRING,
            allowNull: true
        },
        contrasena:{
            type: dataTypes.STRING,
            allowNull: true
        },
        rol: {
            type: dataTypes.STRING
        }        
    }

    let config = {
        timestamps: false,
        tableName: 'empleado'
    }

    const Empleado = sequelize.define(alias, cols, config);

    return Empleado;
}