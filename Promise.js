const AmbilUang =(saldo)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (saldo >100000){
                resolve(saldo)
            }
            else{
                reject('saldo anda kurang')
            }
        },2000)
    })
}


let a = AmbilUang(800000)


//cara mengakses promise adalah sebagai berikut...
const bungaSaldo=(saldo)=>{
    return saldo + 5000
}

a.then(bungaSaldo).then(bungaSaldo).then(total=>console.log(total)).catch(e=>console.log(e))


//cara mengakses promise dengan asyncronus

const saldo = async (saldo)=>{
    try{      
        let b = await AmbilUang(saldo)
        return b
    }
    catch(err){
        console.log('kurang bro saldonya')
        return err
    }
}

saldo(800000).then(res => console.log(res))