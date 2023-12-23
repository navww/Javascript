const user = {
   
    name:"Naveen",
    
    price:999,

    welcomelogin:function(){
          
        console.log(`${this.name} , Welcome to Website `)

        console.log(this)

    }

}

//   user.welcomelogin()

//   user.name="Sam"

//   user.welcomelogin()

//  function one(){
  
//      console.log(this)

//  }
    
//    one()

//  const addtwo=(n1,n2)=>{

//     return n1+n2

//  }

//  console.log(addtwo(3,4)) 

  const addtwo=(n1,n2)=>(n1+n2)

  console.log(addtwo(3,4))

    