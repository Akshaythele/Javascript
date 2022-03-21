let a=new Map()
let ar=new Array()
let h=new String('Ram')
console.log(ar)
console.log(a)
console.log(h)

let map1=new Map()
map1.set('fullname',"Akshay Adinath Tuljapure Thele")
map1.set(true,"unamarriedd")
let akshay="Th"
let Hanumant='Bh'
let Dattatraya='kh'
let ccc=['Tuljapur','Pandharpur']
map1.set(ccc,'PILGRAMS')
map1.set(akshay,'surname')
map1.set(Hanumant,'surnam')
map1.set(Dattatraya,'surnama')
map1.set('a','b')
map1.set(20,'marks')
console.log(map1)


//Get
//
console.log(map1.get(true))
console.log(map1.get(ccc))
console.log(map1.get(akshay))

let student={
    Fullname:'pratik ',
    rillNo:25,
    age:25
}
student.marks=25
//console.log(student)
console.log(student.Fullname)
console.log(student.age)
console.log(student.rillNo)
console.log(25)
//get and set

console.log(map1.set(true,'unmarriedd'))
console.log(map1.set(1,2))
console.log(map1.keys())
console.log(map1.entries())
console.log(map1.values())

let person=new Map([
    ['JayRam','Admi'],
    ['Chinmay',"Theacher"],
    ['Daksh','Student']
])
console.log(person)
map1.delete('true')
console.log(map1)
//person.clear()
console.log(person)
console.log(map1)
for (let key of person.keys()){
    console.log(key)}

    for (let val of person.values()){
        console.log(val)
    }


    for (let [key,value] of person.entries()){
        console.log(key,value)
    }