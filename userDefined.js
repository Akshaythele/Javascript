

class Person {
    firstName=undefined
    middleNmae=undefined
    age=undefined
    skills=undefined

}


let amol=new Person()
amol.middleNmae="Ashish"
amol.age=25
amol.firstName="Amol"
console.log(amol)



class Person1 {
    age=undefined
    height=undefined

    display(){
        console.log("Hello"+this.age)

    
    }
}

let Akshay=new Person1()
Akshay.age=16

console.log(Akshay)



class Person2{
    constructor(fullname,age,height){
        this.Fullname=fullname
        this.Age=age
        this.height=height
    }
    display(){
        console.loh("hello"+this.Fullname)
    }
}


let ashish=new Person2 ('Ashish Naik',25,165)
console.log(ashish)

class Person3{


     setFullName(fullName){
         this.fullName=fullName
     }
    setAge(Age){
        this.age=Age

    }
    setRollno(Rollnumber){
        this.RollNumber=Rollnumber
    }

    setheight(height){
        this.height=height
    }

    display(){
        console.log(this.RollNumber)
    }
}

let bharat=new Person3
bharat.setFullName("Bharat Navgire")
bharat.setAge(35)
bharat.setRollno(104)
bharat.setheight(162)


console.log(bharat)

console.log('---------------------')




console.log("ok")