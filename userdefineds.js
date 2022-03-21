class student{
    fullname=undefined
    rollNumbr=undefined
    age=undefined
    display(){
        console.log('---')
    }

}
let suraj=new student()
suraj.rollNumbr=45
console.log(suraj)
suraj.marks=35

class stu2{
    fullName=undefined
    age=undefined
    rollNumbr=undefined
    display(){
        console.log('hey' +this.fullName)
    }
    
}
let Akshay=new stu2()
Akshay.fullName="Akshay Adinath Thele"
console.log(Akshay)
console.log('hi')
Akshay.display()

console.log(Akshay['fullName'])
console.log('Good Night')

let haris=new student()
haris.display()


class person{
    constructor(age,name,surname,marks) {
        this.age=age
        this.name=name
        this.surname=surname
        this.Marks=marks
        
    }
    display(){
        console.log(this.age)
    }
}

let Hanumant=new person(27,'Hanumant','Bhojne member',76)
console.log(Hanumant)
let ashish=new person(28,'ashish','n',65)
ashish.display()

class student1{
    setAge(age){
        this.age=age
    }
    setFullname(FullName){
        this.fullName=fullName
    }
    setHeight(height){
        this.Height=height
    }

}
let samarth=new student1()
samarth.setAge=25
samarth.setFullname='Samarth Tuljapurkar'
samarth.setheight=155
console.log(samarth)

console.log(samarth)
//1t
//gs3x.sn0,fn0hv

//j
