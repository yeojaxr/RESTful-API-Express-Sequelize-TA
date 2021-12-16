module.exports = (sequelize,Sequelize) => {
    const Hewan = sequelize.define("hewan", {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nama: {
            type: Sequelize.STRING,
            allowNull: false
        },
        namaSpesies: {
            type: Sequelize.STRING,
            allowNull: false
        },
        umur: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
    return Hewan
}

