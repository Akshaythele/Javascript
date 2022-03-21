let students=[
    {
        fullName:'chinmay deshpande',
        age:22,
        rollNo:23,
        skills:['javascipt','cpp'],
        city:"pune"

    },
    {
        fullName:"amol rao",
        age:27,
        rollNo:23,
        skills:["python","javascript","cpp","java"],
        city:"Nagpur"
    },
    {
        fullName:"Akshay Th",
        age:30,
        rollNo:23,
        skills:["python","cpp","java"],
        city:"pune"

    },
    {
        fullName:"amol rao",
        age:35,
        rollNo:23,
        height:25,
        skills:["javascript","cpp","java"],
        city :'bangalore'
        


    }
]




//-----------------------------------------------------------
//Program


// skills of person starts with a

let a=students.filter(function(el){
    return el.fullName[0]==="a"|| el.fullName[0]==="A"
})

a.forEach(function(element){
    console.log(`${element.fullName}:${element.skills}`)
})
//



let bb="abhilash".startsWith('a')
console.log(bb)

let kk="Bhumi".startsWith("B")
console.log(kk)



// 

let b=students.filter(function(el){
    return el.fullName.startsWith('a')
})

b.forEach(function(el){
    console.log(`${el.fullName}:Skills ${el.skills.length}`)
})

// explanation.

let firstName="chinmay"
let lastName="Thaku"


//Hello chinmay Thaku !

console.log("Hello" +" "+ firstName+" "+lastName+" "+"!" )
console.log("Hello Aniket Th")

console.log(`Hello ${firstName} ${lastName}`)




students.forEach(function(el){
    el.username=el.fullName.split(' ')[0][0]+el.fullName.split(' ')[1][0]

    console.log(el.username)
})

//


let r=students.reduce(function(acc,el){
    return acc+el.age
},0)/students.length
console.log(r)



let h=students.find(function (el){
    return el.skills.length>=3
}).fullName


console.log(h)



//

let ra=students.filter(function(el){return el.city==="pune"&& el.skills.includes("python")})

ra.forEach((el)=>{
    console.log(el.fullName)
})

console.log("A")



let aa=students.filter((el)=>{
    return el.city==='pune'&& el.skills.indexOf('python')>=0
})

aa.forEach(function(el){
    console.log(el.skills)
})


let ai=[11,22,33,44,55,66,77,11,22]
let notDuplicate=[]
for(let i=0;i<ai.length;i++){
    if (notDuplicate.indexOf(ai[i])<0){
        notDuplicate.push(ai[i])
        console.log(notDuplicate)
      
    }
}


console.log()

//program 8

let y=[22,33,44,22]

let bj=ai.filter(function(el,index,arr){
    return arr.indexOf(el)===index
    

})

console.log(bj)







let l=[12,24,12,25,26,28,29,27,11,17,17]



let notD=[]
for (let i=0;i<l.length;i++){
    if (notD.indexOf(l[i])<0){
        notD.push(l[i])
    }

   console.log(notD)
}


//let st=l.filter(function (el,index,arr){
  //  return arr.indexOf(el)===index
//})


//console.log(st)

let st='Shree'

console.log(st)


console.log("----------------------------------------------------------------------------------------------------------------")





let Shj={
    fullName: "Chinmay Deshpande",
    rollNo:25,
    age:22,
    skills:['python','javascript','cpp'],
    marks:20

}




let hl=Shj.fullName
let ka=hl.split(' ')
let Uname=ka[0][0]+ka[1][0]


console.log(Uname)



console.log(Shj.fullName.split(' ')[0][0]+Shj.fullName.split(' ')[1][0])


let pers={
    age:12,
    namea:"Chinmay deshmukh"

}

console.log(pers['namea'])
console.log(pers.namea)

pers.age=13


pers.hobby="Match"

pers.marks=33


console.log(pers)



delete pers.age







let yk={
    firstName:'Aniket Thele',
    marks:20,
    height:35,
    skills:['python','c++','c','java','javasrip']
}


let s=yk.firstName.split(' ')

let v=s[0][0]+s[1][0]



console.log(v)




let kes=students.filter(function(el){
    return el.city==='pune'
})


students.fo



