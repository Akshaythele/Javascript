let data={
    age:23,
    rollN:24,
    fullName:'Atish P',
    birthyear:function(){
        console.log(this)
    
    console.log(`${2022-this.age}`)
    function ad(){
        console.log(this.rollN)
    }
    ad()

}

}

data.birthyear()

let pr={
    age:23,
    rollNo:24,
    fullName:'Chinmay',
    birthy:function(){
        console.log(this)
        console.log(`${this.age-2}`)
        function add(){
            console.log(this.fullName)
        }
        add()
    }
}


console.log(pr.rollNo)
pr.birthy()
console.log(pr.fullName)



