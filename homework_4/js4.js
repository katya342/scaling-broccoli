// function num (num1, num2)
// {
//     if(num1 > num2)
//     return 1;
//     if(num1 < num2)
//     return -1;
//     else    return 0;
// }
// alert(num(1, 5));

////////////////////////////////////////////

// function factorial(number)
// {
//     let temp;
//     for(let i = 1; i <= number;  i++)
//     {
//          temp = i    * i;
//     }
//     console.log(temp);
// }
// console.log(factorial(3))
////////////////////////////////////////////////

// function number (num1, num2, num3)
// {
//     return console.log(`${num1}${num2}${num3}`);
// }
// number(1, 4, 6)
/////////////////////////////////////////////////////

// function square(dlina, shirina = 1)
// {
    
//     if(shirina == 1)
//     {
//       //  shirina = typeof shirina !== 'undefined' ?  shirina : 1;
//         let d = dlina * dlina;
//         console.log(`SQ: ${d}`)
//     }
//       else
//       {
//         let c = dlina * shirina;
//         console.log(`Square is: ${c}`)
//       }  

//    }
// square(2, 3);
// square(3);
/////////////////////////////////////////////////////////////////////////////////
// let count = 0;
// function sovershennoe(number)
// {

//     let sum = 0;
//     for(let i = 1; i < number; i++)
//     {
//         if(number % i === 0)
//         {
//             sum = i + i;
//         }
//         else if(number == sum)
//         {
//             console.log('eto sovershennoe chislo shaaaa')
//             count++;
//         }
//     }
// }
// //sovershennoe(8128);

// function diapazon(num1, num2)
// {
//     for(let i = num1; i < num2; i++)
//     {
//         console.log(sovershennoe(i))   
//     }
// }
// diapazon(1, 10)

///////////////////////////////////////////////////////////////////////////

// function date(hours, min = -1, sec = -1)
// {
//     if(min == -1 && sec == -1)
//     {
//         console.log(`${hours}:0:0`)
//     }
//     else
//     console.log(`${hours}:${min}:${sec}`)

// }
// date(12)
// date(24, 12, 3)
/////////////////////////////////////////////////////////////////////////////

// function dates(hours, min, sec)
// {
//     console.log(`seconds: ${sec + min*60 + hours*3600}`)
// }
//dates(1, 10, 10)
////////////////////////////////////////////////////////////////////////////////////
// function convert(sec)
// {
//     console.log(`${sec/3600}:${sec/60}:${sec}`)
// }
// convert(10)
/////////////////////////////////////////////////////////////////////

// function date(h1,m1,s1,h2,m2,s2)
// {
//     let temp = dates(h1,m1,s1)

//     let temp_sec= dates(h2,m2,s2)
//     let diff = temp - temp_sec
//     console.log(diff)
//     convert(diff)
// }
// date(10, 5, 10, 5, 3, 8)

//////////////////////////////////////////////////////////////////////
