class Product {
  getDetails() {
    //getDetails implementation
  }

  savetoDb() {
    //savetoDb implementation
  }

  displayInFrontend() {
    //savetoDb implementation
  }
}

class DigitalProduct extends Product {
  //the DigitalProduct inherits all methods and implementations of the parent class
}

//ninguna clase debe ser programada ni forzada a implementar interfaces o metodos que no va a implementar

//lo ideal es tener una clase con su implementacion especifica

class Product {
  getDetails() {
    //getDetails implementation
  }

  displayInFrontend() {
    //savetoDb implementation
  }
}

class PhysicalProduct extends Product {
  savetoDb() {
    //savetoDb implementation
  }
}

class DigitalProductDetails extends Product {
  //the DigitalProduct inherits all methods and implementations of Product
}
