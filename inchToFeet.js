// const myIncges = 12;
// const myFeet = myIncges /12;
// console.log(myFeet);


// const dataInches = 144;
// const dadaFeet = dadaInches / 12;
// console.log('data feet, dadaFeet');


// const dadiInches = m60;
// const dadiFeet = dadiInches /12;
// console.log('dadiFeet', dadiFeet)



function inchToFeet(inches){
    const feet = inches /12;
    return feet;

}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = inchToFeet(nanaInches);
console.log('nana feet', nanaFeet);