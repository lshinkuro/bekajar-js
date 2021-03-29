const saldo = (saldo1,saldo2,callback)=>{
    return callback(saldo1,saldo2)
}

const add =(a,b)=>{
    return a + b
}

const minus=(a,b)=>{
    return a - b
}

S1 = saldo(10000,20000,add)
console.log(S1)