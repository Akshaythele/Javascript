// let english='I am learning javascript'
// //console.log(typeof "5")
// let arrword=english.split(' ')
// console.log(arrword)

// let longword=arrword.reduce(function(acc,el){
//     if (el.length>acc.length){
//         return  el
        
//     }
//     else{
//         return acc
//     }

// }," ")
// console.log(longword.length)
// console.log('welcome')

// let a="abc"
// let b=a.split('').reverse().join('')
// console.log(a)
// console.log(b)


// let array=[11,22,33,44]
// function printarray(arr){
// arr[0]=20
// }

// console.log(array)
// printarray(array)
// console.log(array)

// let objects={
//     fullName:'shirish  deshpande',
//     ade:23
// }

// function add(obj){
//     obj.firstname='chinamay desh'
// }
// console.log(objects)
// add(objects)
// console.log((objects))
// console.log()

let sum=function(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
}

function addition(fn){
    fn=function(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    }
    fn(12,25)
    fn=function(a,b,c){
        console.log(a*b*c+b)
    }
    fn(10,20,30)
    

}
addition(sum)
addition(10,20,33)
console.log('Hello Friends.')



