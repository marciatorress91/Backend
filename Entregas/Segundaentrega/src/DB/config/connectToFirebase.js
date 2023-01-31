const admin = require("firebase-admin")
const serviceAccount = require("./credentialsFirebase.json")

let isConected

const connectToDd = async () => {
  if(!isConected) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://wanderlust-be62e.firebaseio.com'
    })
  console.log('Connected to Firebase...')
  return
  }

  console.log("Conexion existente")
  return
}


module.exports = connectToDd 