let number=0
// if(0){
//     console.log('Hello')
// }
// else{
//     console.log('Bye')
// }

// if(1){
//     console.log('Hello')
// }
// else{
//     console.log('Bye')}
//     if(-2){
//         console.log('Hello')
//     }
//     else{
//         console.log('Bye')}

// let a=Boolean(null)
// console.log(a)
// let b=Boolean('')
// console.log(b)
// let c=Boolean('C')
// console.log(c)
// let BB=1
// let cc=1
// if (0==cc){
//     console.log('Try')
// }
// else{
//     console.log('study')
// }

// //let age=prompt('Enterthe')
// // //if (age==18){
// //     console.log('Hello')
// // }
// // else{
// //     console.log('Bye')
// // }

// let liscavail=false
// const testpass=true
// if(testpass)liscavail=true
// if(liscavail)console.log('I can run the car')


// //let age=prompt('e')
// //console,log(age)

// // a
// function fruits(t,s){
//     console.log(`the juice is combination of ${t}and ${s}`)
// }

// fruits('Mango','Chiku')

// let firstname='Akshay'
let lastname='Thele'
//console.log('My firstName is '+firstname '& lastname is '+lastname)
console.log(20)

let city="Delhi"

switch(city){
case 'pune':
    console.log('Maharashtra')
case 'indore':
    console.log('MP')
case 'Delhi':
    console.log('India')
case 'Lucknow':
console.log('UP.')

}


city ='Mumbai'
switch(city){
    case 'Mumbai':
        console.log('Maharshtra')
        break
    case 'Lucknow':
        console.log('up')
        break

}



console.log(Math.ceil(8.9))
console.log(Math.floor(8.9))
console.log(Math.round(20.1))
console.log(Math.round(10.2))
console.log(Math.ceil(5.8))

console.log(Math.floor(Math.random()*8))
console.log(Math.floor(Math.random()))

let i=0
while(i<4){
    i++
    if(i==3){
        continue
    }
    console.log(i)
   
}


let no=Math.floor(Math.random()*7)+1
console.log(no)


let usernputs=prompt('the')

if(usernputs==no){
    console.log('guess ')
}
else{console.log('No guess')}


let no1=Math.floor(Math.random()*7)+1
let usernput1;
for (let i=0;i<3;i++){
    usernput1=prompt('rm')
    if(usernput1==no1){
        console.log('guess')
    }
    else{
        console.log('no guess')
        break
    }
    
}

let notw=Math.floor(Math.random()*7)+1
let usernput2;
while (notw!=usernput2){
usernput2=prompt('n')
}
console.log('guesss')


let no3=Math.floor(Math.random()*7)+1
let usernput3;
let score=0
while(no3!=usernput3){
    usernput3=prompt('no')
    score=score+1
}
console.log('your guess '+score+ 'attemots ')

