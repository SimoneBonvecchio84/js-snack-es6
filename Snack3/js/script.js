

// function filterPosition (array, a, b) {
//     const filterArray = array.filter((curElem, index)=>{
//         const indexFilter = index >= a && index <= b;
//         return indexFilter;    
//     });

//     return filterArray;

// }

// const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const firstNum = 4;

// const secondNum = 8;

// const result = filterPosition(numArray, firstNum, secondNum);

// console.log(result);

// function filterPosition (array, a, b) {

//     const filterArray = array.filter((curElem, index) => a <= index && b >= index );
//     return filterArray;
// }
function filterPosition (array, a, b) {
    let filterArray = array.filter((curElem, index) => a <= index && b >= index );
    return filterArray;
}
  
  
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstNum = 4;
const secondNum = 8;
const result = filterPosition(numArray, firstNum, secondNum);
console.log(result);       




