type Size = ''|'S'|'M'|'L';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = ''
  ){}

  isProductValid (): boolean {
    type ValidTypes = {
      'string': ()=> void;
      'number': ()=> void;
    };

    for (const key in this) {

      const element =  this[key as keyof this];

      const validTypes: ValidTypes = {
        'string': ()=> {
          if((element as string).length <= 0) throw new Error(`${key} is required`)
        },
        'number': () =>{
          if((element as number) <= 0) throw new Error(`${key} is zero or less`) 
        },
      }

      validTypes[typeof element as keyof ValidTypes]()
    }

    return true;
  
  }

    toString (){
      // no DRY
      // if(this.name === '') throw new Error('Name is required');
      // if(this.price === 0) throw new Error('Price is required');
      // if(this.size === '') throw new Error('Size is required');

      // DRY
      if(!this.isProductValid()) return
      
      return `name: ${this.name}, price: ${this.price}, size: ${this.size}`;
    }
}

(()=> {
  const blueJeans = new Product('Blue Jeans', 20, 'M');

  console.log(blueJeans.toString());
})()