class Rectangle {
  
    constructor(height, width,) {
      this.height = height;
      this.width = width;
      this.luas = this.area
      this.comment = ''
    }


    static Name (x){
      return x.height
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    get keliling(){
      return this.hitungKeliling()
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }

    hitungKeliling(){
      return (this.height + this.width) * 2
    }

    comments (comment){
        return this.comment = comment
    }
  }



const kotak1 = new Rectangle(10, 8);

console.log(Rectangle.Name(kotak1))


class PersegiPanjang extends Rectangle {
  constructor(height,width,tinggi){
    super(height,width)
    this.tinggi = tinggi
  }

  volume (){
    return this.height * this.width * this.tinggi
  }
}

const PL1 = new PersegiPanjang(8,9,7)


console.log(PL1.comments('oilaaa'))
  


// const kotak1 = new Rectangle(10, 8);

// console.log(kotak1.keliling)

class Round {

    constructor(radius) {
      this.radius = radius;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return Math.floor(Math.PI * this.radius *this.radius)
    }
  }
  
  
// const square = new Rectangle(10, 10);
 


module.exports ={ Rectangle,Round };
 
 