(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [ //fs
    { id: 1, flaggled: false },
    { id: 1, flaggled: false },
    { id: 2, flaggled: false },
    { id: 3, flaggled: true },
    { id: 4, flaggled: false },
    { id: 5, flaggled: false },
    { id: 7, flaggled: true },
  ];

  // Archivos marcados para borrar - files to delete
  const filesToDelete = filesToEvaluate.map((file) => file.flaggled); // archivos 

  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  const today = new Date(); //ddmmyy

  // días transcurridos - elapsed time in days
  const elapsedTimeInDays: number = 23; //d

  // número de archivos en un directorio - number of files in directory
  const numberOfFilesInDirectory = 33;// dir

  // primer nombre - first name
  const firstName = "Fernando";//nombre

  // primer apellido - last name
  const lastName = "Herrera";//a

  // días desde la última modificación - days since modification
  const daysSinceLastModification = 12; //dsm

  // cantidad máxima de clases por estudiante - max classes per student
  const maxClassesPerStudent = 6; //max
})();

export {};
