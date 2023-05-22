// export class Tesla {
//   constructor(private numberOfSeats: number) {}

//   getNumberOfTeslaSeats() {
//     return this.numberOfSeats;
//   }
// }

// export class Audi {
//   constructor(private numberOfSeats: number) {}

//   getNumberOfAudiSeats() {
//     return this.numberOfSeats;
//   }
// }

// export class Toyota {
//   constructor(private numberOfSeats: number) {}

//   getNumberOfToyotaSeats() {
//     return this.numberOfSeats;
//   }
// }

// export class Honda {
//   constructor(private numberOfSeats: number) {}

//   getNumberOfHondaSeats() {
//     return this.numberOfSeats;
//   }
// }

export abstract class Car {
  abstract getNumberOfSeats(): number;
}

export class Tesla extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Audi extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Toyota extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Honda extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Ford extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}
