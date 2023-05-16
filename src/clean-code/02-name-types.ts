(() => {
  // arreglo de temperaturas celsius
  const temperaturesCelsius = [33.6, 12.34]; //arrayOfNums

  // Dirección ip del servidor
  const serverIp = "123.123.123.123"; //ip

  // Listado de usuarios
  const users = [ //people
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  // Listado de emails de los usuarios
  const usersEmails = users.map((user) => user.email); //emails

  // Variables booleanas de un video juego
  const canJump = false; //jump
  const canRun = true; //run
  const hasItems = false; //noTieneItems
  const isLoading = false; //loading

  // Otros ejercicios
  // tiempo inicial
  const startTime = new Date().getTime(); //start
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const endTime = new Date().getTime() - startTime; //end

  // Funciones
  // Obtiene los libros
  function getBooks() { // book
    throw new Error("Function not implemented.");
  }

  // obtiene libros desde un URL
  function getBooksByUrl(url: string) { //BooksUrl (u: string)
    throw new Error("Function not implemented.");
  }

  // obtiene el área de un cuadrado basado en sus lados
  function getSquareArea(side: number) { // areaCuadrado (s: number)
    throw new Error("Function not implemented.");
  }

  // imprime el trabajo
  function printJob() { // printJobIfJobIsActive
    throw new Error("Function not implemented.");
  }
})();
