const elems=document.querySelectorAll(".this-class");
console.log(elems)

//Dry
function addNumbers(num1,num2){
    const total=Number(num1)+Number(num2);
    return total;
}
const addedTotal=addNumbers("1","9.125");

//rest operator
function addNumbers2(...numbers){
    let total=0;
    for(index in numbers){
        total=total+numbers[index];
    }
    return total;
}

const newTotal=addNumbers2(1,4,7,13)