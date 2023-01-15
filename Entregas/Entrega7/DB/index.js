// Se ejecuta manualmente para crear las tablas


const { sqlite3Db } = require('./config/connectToDb')
const { createTableSqlite } = require("./model/sqlite3model")

const executeOperations = async () => {
  try {
    await createTableSqlite()
  } catch (err) {
    console.error(`No se ha podido crear la tabla`, err.message)
  } finally {
    sqlite3Db.destroy()
  }
}

executeOperations()


/* const { mariaDb } = require('./config/connectToDb')
const { createTableMariaDb } = require("./model/mariadbmodel")

const executeOperations = async () => {
  try {
    await createTableMariaDb()
  } catch (err) {
    console.error(`No se ha podido crear la tabla`, err.message)
  } finally {
    mariaDb.destroy()
  }
}

executeOperations() */
