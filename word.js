 let a=20
 let p={
     Fulname:'Hanuman',
     Shool:'GP',
     age:25,
     marks:26
 }

 let o=p.Fulname
 console.log(o)
 let r=p.age
 console.log(15)
 p.skills='c'
 console.log(p)
 delete p.marks
 console.log(p)
 p.Shool="govt poly"
 console.log(p)
 console.log('Hi')



 let totalS=[11,22,33,44,55,55,66,77,88,99,99,12]
 let count=0
 for(let i=0;i<totalS.length;i++){
     if(totalS[i]==55){
         count=count+1
     }
    
 }
console.log(count)

let word=["b","o","o","k"]
let result={}


for(let i=0;i<word.length;i++){
    if (result[word[i]]){
        result[word[i]]=result[word[i]]+1
    }
    else{
        result[word[i]]=0+1
    }}
    console.log(result)
    console.log('Hello')


    let countofB=0
    let countofO=0
    let countofK=0

    for (let i=0;i<word.length;i++){
        let h=word[i]
        switch(h){
            case 'b':
                countofB=countofB+1;
                break;
            case 'o':
                countofO=countofO+1
                break;
            case 'k':
                countofK=countofK+1    
                break;

        }
    }

    result[word[0]]=countofB
    result[word[1]]=countofO
    result[word[2]]=countofO
    result[word[3]]=countofK
    console.log(result)
     a=[10,11,12,13]
let ev=0
let od=0
    for (let i=0;i<a.length;i++){
        a[i]%2==0?ev++:od++
    }
    console.log(od)
    console.log(ev)

    let eve=a.reduce((acc,el)=>{
       let aat= el%2==0?1:0
       return aat+acc

    },0)
    console.log(eve)

    let odr=a.reduce((acc,el)=>{
        let kkr=el%2!=0?1:0
        return acc+kkr
    },0)
    console.log(odr)

    let x=20
    let y=30
    console.log(x||y)
    console.log(x&&y)
    let w=0
    console.log(x||w)
    console.log(y&&w)