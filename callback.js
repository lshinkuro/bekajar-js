//membuat callback

const hitung = (a,b,calback)=>{
    var c = calback(a,b)

    return c
}

const tambah =(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(
        ()=>{
          if (a != 0){
              resolve(a+b)
          }
          reject('angka harus ada')
        },4000
       )}
    )
    
}

let a = tambah(5,6).then(a=>a)

console.log(a)
// const kurang = (a,b)=>{
//     return a -b
// }

// const kali =(a,b)=>{
//     return a * b
// }


// let b = hitung(2,5,);

// console.log(b)