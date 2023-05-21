// evitar el uso del patron singleton
// 1. dificulta el testing
// 2. dificulta a la hora de rastrear de donde vienen los cambios

const Singleton = (function () {
  let instance;

  function createInstance() {
    return new Object("I am the instance");
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

function main() {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log("Misma instancia? ", instance1 === instance2);
}

main();
