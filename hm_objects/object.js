// // var arrObj = []

// // arrObj[0] = {
// //     name: 'мясные изделия',
// //     count: 25,
// //     status: 'куплен'
// // }
// // arrObj[1] = {
// //     name: 'молочные продукты',
// //     count: 30,
// //     status: 'куплен'
// // }
// // arrObj[2] = {
// //     name: 'хлебные изделия',
// //     count: 10,
// //     status: 'не куплен'
// // }
// // arrObj[3] = {
// //     name: 'сладостные изделия',
// //     count: 5,
// //     status: 'куплен'
// // }

// // function show()
// // {
// //     let ch = prompt("Введите 1: (некупленные продукты), введите 2: (купленные продукты)")
// //     switch(ch)
// //     {
// //         case '1':
// //             for(let i = 0; i < arrObj.length; i++)
// //     {
// //         if(arrObj[i].status == 'не куплен')
// //         console.log(arrObj[i].name)
// //     }
// //         break;
// //         case '2': 
// //         for(let i = 0; i < arrObj.length; i++)
// //         {
// //             if(arrObj[i].status == 'куплен')
// //             console.log(arrObj[i].name)
// //         }
// //         break;
// //     }
    
// // }
// // show()
// // function addItem()
// // {
// //         let dobavka = prompt("Введите еще покупку: ")
// //         if(arrObj.name == dobavka)
// //         {
// //              arrObj.length +=1;
// //              arrObj[arrObj.length] = dobavka;
// //         }
// //         arrObj.push(dobavka)
// //         console.log(arrObj)
// // }
// // addItem()
// // function buyProduct(nm)
// // {
// //     if(arrObj.name == nm)
// //     {
// //         arrObj.status == 'куплен'
// //         console.log(arrObj.status)
// //     }
// //     else
// //     {
// //         console.log("Такого продукта нет")
// //     }
// // }
// // buyProduct('сыр')
// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// // let arrSec =
// // [
// //     {
// //         nameProduct: "сыр",
// //         countOfProduct: 2,
// //         pricePerOne: 1250
// //     },
// //     {
// //         nameProduct: "мясо",
// //         countOfProduct: 1,
// //         pricePerOne: 5000
// //     },
// //     {
// //         nameProduct: "халва",
// //         countOfProduct: 4,
// //         pricePerOne: 1000
// //     },
// //     {
// //         nameProduct: "кошка",
// //         countOfProduct: 2,
// //         pricePerOne: 200
// //     }
// // ]
// // function showProduct()
// // {
// //     for(let i = 0; i < arrSec.length; i++)
// //     {
// //         console.log(`${arrSec[i].nameProduct}, ${arrSec[i].pricePerOne}, ${arrSec[i].countOfProduct}`)
// //     }
// // }
// // showProduct()

// // let temp = 0;
// // function fullPrice()
// // {
    
// //     for(let i = 0; i < arrSec.length; i++)
// //     {
// //         temp = arrSec[i].countOfProduct * arrSec[i].pricePerOne
// //         console.log(`Общая цена каждого продукта: ${temp}`)
// //     }
// // }
// // fullPrice()
// // function expProduct()
// // {
// //     max = arrSec[0]
// //     for(let i = 0; i < arrSec.length; i++)
// //     {
// //         if(arrSec[i] > max)
// //         {
// //             max = arrSec[i]
// //         }
// //     }
// //     console.log(max)
// // }
// // expProduct()

// // function middleCheck()
// // {
// //     let sum = 0;
// //     for(let i = 0; i < arrSec.length; i++)
// //     {
// //        temp = arrSec[i].countOfProduct * arrSec[i].pricePerOne
// //        sum += temp/arrSec.length;
// //     }
// //     console.log("Средняя цена чека " + sum)
// // }
// // middleCheck()
// //////////////////////////////////////////////////////////////////////////////////

// let massCss = [
//     {
//         color: "red"
//     },
//     {
//         textAlign: "center"
//     },
//     {
//         fontSize: "100%"
//     },
// ]

// function showCss(mass, text)
// {
//     document.write("<p>" + text + "</p>")
// }
// showCss(massCss, "hello world")
// let temp = showCss(mass, text)
// {
//     document.write("<p> text </p>")
// }
// let text = prompt("Enter text here: ")
// console.log(temp)

///////////////////////////////////////////////////////////////////////

// let massAud = [
//     {
//         name: 'A104',
//         seats: '22',
//         nameFacult: 'Department of Economics',
//     },
//     {
//         name: 'B324',
//         seats: '43',
//         nameFacult: 'Faculty of management and management',
//     },
//     {
//         name: 'B234',
//         seats: '12',
//         nameFacult: 'Faculty of geoengineering',
//     },
//     {
//         name: 'A123',
//         seats: '5',
//         nameFacult: 'Faculty of information technology',
//     },
   
// ]

// let massGroup = [
//     {
//         names: 'Drouppa',
//         countStudents: 150,
//         nameFacult: 'Faculty of geoengineering',
//     }
// ]

// function showAud()
// {
//     for(let i = 0; i < massAud.length; i++)
//     {
//         console.log("Audicity: " + massAud[i].name)
//     }
// }
// showAud()

// let selectAud = prompt("Введите название факультета")
// function showSelAud(selectAud)
// {
//     for(let i = 0; i < massAud.length; i++)
//         {
//             if(massAud[i].nameFacult == selectAud)
//             {
//                 console.log(massAud.name)
//             }
//             else
//             {
//                 console.log("Wrong факультет")
//             }
//         }
// }
// showSelAud()

// function showSelAud()
// {
//     let selectAud = prompt("Введите название факультета")
//     let temp = 0;
//     for(let i = 0; i < massAud.length; i++)
//         {
//             if(massAud[i].nameFacult == selectAud)
//             {
//                 let temp = massAud[i].name
//             }
//             else
//             {
//                 console.log("Факультета не нашлось")
//                 break;
//             }
//         }
//         return console.log(temp)
// }
// showSelAud()

// function sortBySeats()
// {
//         massAud.sort((x, y) => x.seats - y.seats)
//         for(let i = 0; i < massAud.length; i++)
//         {
//             console.log(massAud[i].name + ", " + "seats: " + massAud[i].seats)

//         }
// }
// sortBySeats()

// function sortByName ()
// {
//     massAud.sort()
//             for(let i = 0; i < massAud.length; i++)
//             {
//                 console.log("Сортировка по названию: " + massAud[i].nameFacult)
//             }
// }
// sortByName()

// function showGroup(massGroups)
// {
//     if(massGroup.nameFacult == massAud.nameFacult)
//     {
//         console.log(massAud.name)
//     }
// }
// showGroup(massGroup)