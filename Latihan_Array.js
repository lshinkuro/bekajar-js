class User {
    constructor(fname,lname){
        this.fname = fname;
        this.lname =lname
    }

    sayHi(){
       return this.fname + this.lname
    }
    sayName(){
        return this.sayHi() + 'ok'
    }



}

let obj = new User('7',"auer")
console.log(obj.sayName())