(() => {
  // función para obtener información de una película por Id
  function getMovieById(id: string) {
    // getAllMovies(movieId: string)
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getActorsByMovie(id: string) {
    //getMovieCastById -> bien
    //getAllMovieActors(id: string) -> mal
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getBioByActor(actorId: string) {
    // getActorBioById( actorId: string ) -> bien
    //getUsuario( ActorId: string ) -> mal
    console.log({ actorId });
  }

  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  // Crear una película
  function createMovie({ title, description, rating, cast }: Movie) {
    // movie(title: string, description: string, rating: number, cast: string[] )
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    //createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }

  // continue...

  // const getPayAmount = ({
  //   isDead = false,
  //   isSeparated = true,
  //   isRetired = false,
  // }) => {
  //   let result;
  //   if (isDead) {
  //     result = 1500;
  //   } else {
  //     if (isSeparated) {
  //       result = 2500;
  //     } else {
  //       if (isRetired) {
  //         result = 3000;
  //       } else {
  //         result = 4000;
  //       }
  //     }
  //   }

  //   return result;
  // };
  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    if (isRetired) return 3000;

    return 4000;
  };
})();
