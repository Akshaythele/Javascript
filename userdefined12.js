//

/*class Bank{
   constructor (AccName,AccNum,Bal){
       this.Accountname=AccName
       this.AcoountNumber=AccNum
       this.Bal=Bal
       this.transactions=[]
   }



deposit(amount) {
this.transactions.push(amount)
    this.Bal= this.Bal+amount
console.log(`Available bal is ${this.Bal}`)}

withdraw(amount){
    if (amount<this.Bal){
        this.transactions.push(-amount)
        this.Bal=this.Bal-amount
    }
    else {
        console.log('Insufficient Funds')
    }
    console.log(`Available Balance is ${this.Bal}`)
}

lastFiveTransactions(){
    let l=this.transactions.slice(-5)
    console.log(l)
    

}

totalTransactionSum(){
    let ST=this.transactions.reduce(function(acc,el){
        return acc+ Math.abs(el)
       
    },0)
    console.log(ST)
    return ST
}
}


let Aksh=new Bank("Akshay Adinath Thele",1,100000)
console.log(Aksh)
Aksh.deposit(10000)
Aksh.withdraw(202)
Aksh.deposit(1500)
Aksh.deposit(2000)
Aksh.deposit(20000)
console.log('')
Aksh.lastFiveTransactions()
Aksh.totalTransactionSum()

//console.log(Aksh)

//console.log(Bank)


console.log('AAT')
console.log(Aksh)

let Details=[
    new Bank("Ashish Patil",2,150000),
    new Bank ("Suraj harishchandra Jagdale",3,20000),
    new Bank ("Aniket adinath Thele",4,2500000)
    
]

console.log(Details)

Details.forEach(function(el){
    el.Bal=el.Bal+100000
})


console.log(Details)
console.log("=======================================")

Details.forEach(function(el){
    console.log(el)
})

Details.forEach(function(el){
    el.company="TCA"
    el.employeeStatus="Active"
})
console.log(Details) */




function add(){
    console.log(10+10)
}

add()

function add(x,y){
    console.log(x+y)
}
add(5,15)


function sum(a,b){
    return a+b
}




let j=sum(10,10)
console.log(j)




let cities=['Pandharpur','nashik','Solapur','Dharashiv']
let userinput='nashik'
let avail=false
for (let i=0;i<cities.length;i++){
    if(cities[i]===userinput){
        avail=true
        break;
    }
   
}
if(avail){
    console.log('availnl')
}
else{
    console.log('nal')
}
console.log(cities[1])