const tinder=new Object()


tinder.name="Naveen"

tinder.age=18

// console.log(tinder)

const r={

    name:"Naveen",

    fullname:{
            fname:"Ram",

            lname:"Ji"
    }
}

// console.log(r.fullname.fname)

const o1={
    1:"a",
    2:"b"
}

const o2={
    3:"a",
    4:"b"
}

// const o3={o1,o2}

// const o3=Object.assign({},o1,o2)  combine the objects 

const o3={...o1,...o2}

// console.log(o3)

const A=[{

    name:"Naveen",
    age:18
}]

//  console.log(A[0].name)


// console.log(Object.keys(tinder))

// console.log(Object.values(tinder))

console.log(Object.entries(tinder))

console.log(tinder.hasOwnProperty('Name'))
