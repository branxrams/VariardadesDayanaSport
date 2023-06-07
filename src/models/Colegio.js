module.exports = (sequelize, dataTypes) => {
    let alias = 'Colegio';

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
        tableName: 'colegio'
    }

    const Colegio = sequelize.define(alias, cols, config); 

    return Colegio
}