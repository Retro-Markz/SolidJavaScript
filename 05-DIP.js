//los modulos de alto nivel no deben depender de modulos de bajo nivel, ambos deben depender de abstracciones, ademas, las abstracciones no deben depender
//de los detalles, los detalles deben depender de las abstracciones

class MySQLConnection {
  connect() {
    //codigo para conectar la badse de datos
  }
}

class PasswordReminder {
  constructor(dbConnection) {
    this.dbConnection = new MySQLConnection();
  }
}

///se puede tener en mente clases a futuro

class PostgresSQLConnection {
  connect() {
    //codigo para conectar a postgress
  }
}
