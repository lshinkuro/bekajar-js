const add = (a,b)=>{
    c = a +b
    return (d)=>{
       return (e)=>{
           return d + c + e
       }
    }
}

b = add(5,6)

v = b(7)
console.log(v(5))