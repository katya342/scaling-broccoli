// let string = "скриптонит - \"Цепи\""
// document.write(string)
// console.log(string)
// const name = 'Иннокентий'
// console.log("Меня зову - " + name + "! Рад с вами познакомиться!")
// let array = ['1', '2', '3']

// let newArray = array;
// console.log(array)
// newArray.push('4')
// console.log(array)
// console.log(newArray)
// let string = 'Моя строка'
// // console.log(string)
// // let newString = string;

// // console.log(string)
// // newString += 'не изменилась!'

// // console.log(newString)
// //let newStr = string.toUpperCase()
// //console.log(newStr)
// console.log(string.toUpperCase())
// let string = "Съешь еще этих французских булок, да выпей чаю."
// let array = string.split('!')
// console.log(array)

//let string = '      + 7 (777) 777 - 77 - 77'
//let cleanString = string.trim()
//console.log(string.repeat(5))
//console.log(cleanString)

//let string2 = "jfefiejfjejifjeji"

// function compareString(str1, str2)
// {
//     if(str1.length > str2.length)
//     {
//         console.log(1)
//     }
//     else if (str1.length < str2.length)
//     {
//         console.log(-1)
//     }
//     else if (str1.length === str2.length)
//     {
//         console.log(0)
//     }
// }
// compareString(string1, string2)

// const glasnye = ['а', 'у', 'о', 'и', 'э', 'ы']
// function upperFirst(str)
// {
//     let firstLetter = str.substring(1)
//     console.log(`${firstLetter.toUppercase()}${str.substring(1)}`)
// }
// upperFirst(string1)

// let string1 = 'съешь еще этих французкий булок'
// const glasnye = ['а', 'у', 'о', 'и', 'э', 'ы']
// function glasnyCount()
// {
//     let count = 0;
//     for(let i = 0; i < string1.length; i++)
//     {
//         for(let j = 0; j <= glasnye.length; j++)
//         {
//             if(string[i] === glasnye[j])
//             {
//                 count +=1;
//             }
//         }
        
//    }
//    console.log(count)
// }
// glasnyCount()
////////////////////////////////

// let string = 'ТОЛЬКО СЕГОДНЯ! Распродажа! 2 по цене одного! Торопись!'
// const glasnye = ['100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'xxx']
// function glany(str)
// {
//     let rezult = false;
//     let temp = str.toLowerCase()

//     for(let i = 0; i < glasnye.length; i++)
//     {
//         if(temp.indexOf(glasnye[i] !== -1))
//         {
//             rezult = true;
//         }
//     }
//     console.log(rezult)
// }
// glany(string)

// let string = 'ТОЛЬКО СЕГОДНЯ! Распродажа! 2 по цене одного! Торопись!'

// function truncate(str, count)
// {
//     if(str.length > count)
//     {
//         return `${str.substring(0, count)}...`
//     }
// }
// console.log(truncate('Hello, world', 8))

let string = 'топот'

function palindrom(str)
{
    let left = [];
    let right = [];
    if(str.length % 2 !==0)
    {
        left = str.substring(0, (str.length - 1)/2)
        right = str.substring((str.length + 1)/2)
       
    }
    // if(str.length > count)
    // {
    //     return `${str.substring(0, count -3)}...`
    // }
    else
    {
        left = str.substring(0, (str.length)/2)
        right = str.substring((str.length)/2)
    }
    console.log(left)
    console.log(right)
}
palindrom(string)