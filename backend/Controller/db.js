const {Sequelize, DataTypes} = require('sequelize')
const dotenv = require('dotenv')

// Loading the dotenv config files
dotenv.config();

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    logging: false,
    ssl: false // Set to false for now.
})

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection established!')
    } catch(error)
    {
        console.error("Unable to connect to db:", error)
    }
}

testConnection();


const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    googleId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

module.exports = {sequelize, testConnection, User}
  