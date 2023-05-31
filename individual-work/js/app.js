let x = 5
let y = 9
console.log(x  + y)

function fullName(firstName, lastname)
{
    console.log("Celé jméno " + firstName + " " + lastname)
}

fullName("jarda", "vopicka")

function isGtTwo (value)
{
    if (value > 2) {
        return true
    }
    else {
        return false
    }
}

let cisla = [5 , 2]
cisla.forEach(element => {
    if (isGtTwo(element) === true) {
        console.log("Hodnota je větší než 2")
    }
    else{
        console.log("Hodnota není větší než 2")
    }
});