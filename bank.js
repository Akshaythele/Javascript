class Bank{
    constructor(accName,accountno,bal){
        this.accName=accName
        this.accnumbe=accountno
        this.Bals=bal
        this.transactions=[]
    }
    deposit(amntss){
        this.transactions.push(amntss)
        this.Bals=this.Bals+amntss
        console.log(`balance available is ${this.Bals}`)
        return this.Bals
    }
    withdraw(amntss){
        if (this.Bals>amntss){
            this.transactions.push(-amntss)
             this.Bals=this.Bals-amntss
             console.log(`available balance ${this.Bals}`)
             return this.Bals
        }
        else{
            console.log('na')
        }
    }
    theRecentfivetransactions(){
        console.log(this.transactions.slice(-5).reverse())
    }
    theTotaltrsnsactionssum(){

  let a=this.transactions.reduce(function(acc,el,){
   return acc+Math.abs(el)
  })  
  console.log(a)
  return a
}
}


let aksh=new Bank('Akshay thele',1234567891011,10001)
console.log(aksh)
aksh.deposit(1000)
aksh.withdraw(400)
aksh.deposit(5000)
aksh.deposit(6000)

aksh.withdraw(500)
aksh.deposit(7000)
aksh.theRecentfivetransactions()
aksh.theTotaltrsnsactionssum()
