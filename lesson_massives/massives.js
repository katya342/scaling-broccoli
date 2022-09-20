//
// const arrayInt = [];
// const array2 = [];
//  function getRandomNum()
//  {
//     const rndInt = Math.floor(Math.random()*100 + 1);
//     return rndInt;
//  }
//  for (let i = 0; i < 10; i++)
//  {
//      arrayInt[i].push(getRandomNum())
//  }
// 
//  function printArray(array)
//  {
//      console.log(array)
//  }
//
// // function onlyEven(array)
// // {
// //     const rezult = [];
// //     for (let i = 0; i < array.length; i++)
// //     {
// //         if(array[i] % 2 === 0)
// //         {
// //             rezult.push(array[i])
// //         }
// //     }
// //     printArray(rezult)
// // }
// // function arraySum(array) {
// //     let sum = 0;
// //     for (let i = 0; i < 10; i++) {
// //         sum += array[i];
// //     }
// // }
// // function arrayMax(array)
// // {
// //     const rezult = [...array]
// //     rezult.sort(function(a,b)
// //     {
// //         return a-b;
// //     });
// // console.log(rezult.pop());
// // }
// // 
//  function insertIndex(array, index, value)
//  {
//      const rezult = [...array]
//      rezult.splice(index, 0, item)
//      console.log(rezult)
//  }
//  function deleteIndexOf(array, index, value)
//  {
//      const rezult = [...array]
//      rezult.splice(index, 1)
//      console.log(rezult)
//  }
//     const arrayOne = [1,2,3,4,5,6,7,8,9,10];
//     const arrayTwo = [1,2,3,4,5];
//     function concatUniq(array1, array2)
//     {
//         const rezult = [...new Set([...array1, ...array2])]
//         const uniq = new Set (rezult);
//         console.log(rezult)
//     }
//     function concatDouble(array1, array2)
//     {
//         const rezult = array1.filter(function(item){
//             return array2.indexOf(item) > -1
//         })
//         console.log(rezult)
//     }
// function uniq(array1, array2)
// {
//     const rezult = array1.filter(function(item){
//         return array2.indexOf(item) === -1
//     })
//     console.log(rezult)
// }
//     printArray(arrayOne)
//     printArray(arrayTwo)
//     concatUniq(arrayOne, arrayTwo)
//  //    printArray(arrayInt)
//  //    insertIndex(arrayInt, 2, 10)
//  // deleteIndexOf(arrayInt, 3, 10)
//     //arrayMax(arrayInt)
//     // printArray(arrayInt);
//     // onlyEven(arrayInt);
//     // arraySum(arrayInt);
const fruits = ['aнанас', 'яблоко', 'персик', 'груша', ''];
const fruitsSort = fruits.sort();
console.log(fruits);
function search()
{
    let searchText = document.getElementById("search").value;
    console.log(fruits.indexOf(searchText.toLowerCase()) > -1 ? `Есть такой фрукт - ${searchText}` : `Нет такого фрукта- ${searchText}`)
}

window.onload = init;
function init()
{
    
}

let button = document.getElementById('button')
console.log(button)