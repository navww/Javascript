// const o={

//     name:"Naveen",

//     age:18
// }

// console.log(o.name)
// console.log(o["age"])

const my=Symbol("key1")

const o={

    name:"Naveen",

    age:18,

    [my]: "mykey1"
}

console.log(o[my])

// o.sam=function(){

//     console.log("Hii bhai")
// }

// console.log(o.sam())

o.sam=function(){

    console.log(`Hii ,${this.name}`)
}

console.log(o.sam())
