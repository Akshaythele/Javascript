



let mapA=new Map()


let number=[10,20,30,40]
let suraj="Ashish"

let ashish={
    Name:"naik",
    Age:26,
    height:164
}


mapA.set(number,"mark")
mapA.set(true,"Isavilable"
)
mapA.set(ashish,"student")
mapA.set(suraj,"member")
mapA.set("Four",'number')
let a=mapA.set(5,"marks")
console.log(mapA)



console.log(a)


mapA.get(number)
console.log(mapA)
let t=mapA.get(true)
console.log(t)
let r=mapA.get(suraj)


console.log(mapA.keys())
console.log(mapA.values())
console.log(mapA.entries())
console.log(mapA.size)


let mapB=new Map([
    ["AAI",'Mother'],
    ["Suraj","Sun"],
    ["Chandra","moon"],
    ['Vadil',"Father"]
])

console.log(mapB)


for (let key of mapA.keys()){
    console.log(key)
}

for(let key of mapA.values()){
    console.log(key)
}


for (let [key,values] of mapB.entries()){
    console.log([key,values])
}




//
let x=13
x=20
console.log(x)



let T='Tuljapur'

console.log(T)
console.log(T.toUpperCase())



//let r=u.toLowercase()



function ajitpawar(parth,jay){
    console.log(parth+jay)
}





//function function declaration,function expressio,arrow function

let ajitpawr2=function(ajim,shaikh){
    console.log(ajim+shaikh)
}

ajitpawr2(1,2)


let ajitpwar3=(ajim2,shaikh22)=>{
    console.log(ajim2+shaikh22)
}

ajitpwar3(13,15)





