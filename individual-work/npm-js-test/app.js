
const name1 = "filip"
const age = "18"


function writeData(){
    console.log(name1)
    console.log(age)
}

writeData()

function addNumbers(x, y){
    return x + y
}

let addition = addNumbers(6 , 7)
if (addition > 10) {
    console.log("Výsledej je větší než 10")
}
else{
    console.log("Výsledej je menší nebo roven 10")
}