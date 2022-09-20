// let first = Number(prompt("Enter first diapazon"))
// let second = Number(prompt("Enter second diapazon"))
// let sum = 0;
// for(let i = first; i <= second; i++)
// {
//    sum = sum + i;
// }
// console.log(`rezult ${sum}`)

///////////////////////////////////////////////////////

// let num1 = prompt("Enter first number")
// let num2 = prompt("Enter senod number")
// let temp = 0;
// let temp_2 = 0;
// let indexFirst = 0;
// let indexSecond = 0;
// for(let i = 1; i <= num1; i++)
// {
//         if(num1 % i === 0)
//         {
//             temp = i;
//         }
//         console.log("Delitel first num is: " + temp)
// }

// for(let j = 1; j <= num2; j++)
//     {
//         if(num2 % j === 0)
//         {
//             temp_2 = j;
//         }
//         console.log("Delitel second number is: " + temp_2)
//     }

////////////////////////////////////////////////////////////////////////

// let number = prompt("Enter num pelase")
// let i = 0;
// let count = 0;
// while(number != 0)
// {
//     if(number % i === 0)
//     {
//         count = i;
//         console.log("Deliteli chisla: " + count)
//     }
//        i++;    
// }
                    
////////////////////////////////////////////////////

// let count = 0;
// let countS = 0;
// let countD = 0;
// let countE = 0;
// let countF = 0;
// for(let i = 0; i < 10; i++)
// {
//     let num = prompt("Enter numbers: ")
//     if(num > 0)
//     {
//         count++;
//     }
//     else if(num % 2 === 0)
//     {
//         countE++;
//     }
//     else if(num % 2 !== 0)
//     {
//         countF++;
//     }
//     else if(num < 0)
//     {
//         countS++;
//     }
//     else if(num == "0")
//     {
//         countD++;
//     }
// }
// console.log("Кол-во четных" + countE)
// console.log("Кол-во нечетных" + countF)
// console.log("Положительные числа" + count)
// console.log("Отрицательные числа" + countS)
// console.log("Нулей" + countD)

////////////////////////////////////////////////////////////
// let ch = 0;
// do
// {
//     let num1 = Number(prompt("Enter first num"))
//     let num2 = Number(prompt("Enter second num"))
//     let sign = prompt("Enter sign")
//     if(sign == "+")
//     {
//         console.log(num1 + num2)
//     }
//     else if(sign == "-")
//     {
//         console.log(num1 - num2)
//     }
//     else if(sign == "/")
//     {
//         console.log(num1/num2)
//     }
//     else if(sign == "*")
//     {
//         console.log(num1*num2)
//     }
//     ch = prompt("Хотите ли решить еще один пример&")
// }
// while(ch == "да")
/////////////////////////////////////////////////////////////////////////
// let number = prompt("Enter num please")
// let pos = prompt("Enter position pl")

// for(let i = 0; i < number; i++)
// {
//     let temp = number.slice(pos)
//   //  let temp2 = String(number - temp);
//     console.log(temp + number.slice(0, pos))
// }
///////////////////////////////////////////////////////////////////////////
// let ch = 0;
// let count = 0;
// let mass = ["ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА", "ВОСКРЕСЕНЬЕ"]
// do
// {
//    ch = prompt(`${mass[count]}.Хотите увидеть следующий день?`)
//     if(ch == "OK")
//     {
//         count++;
//     }
// }
// while(ch == "OK" && count < 7)
/////////////////////////////////////////////////////////////////////

// for(let i = 1; i < 10; i++)
// {
//     console.log(`${2*i}\t${3*i}\t${4*i}\t${5*i}\t${6*i}\t${7*i}\t${8*i}\t${9*i}`)
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////

// let n = Math.floor(Math.random() * 10) + 1;
// let num = prompt("Пользователь вводит число")
// if(n == num)
// {
//     console.log("Вы угадали число")
// }
// else if (num > n)
// {
//     console.log("Вы ввели число больше чем нужна, не угадали")
// }
// else
// {
//     console.log("Вы ввели число меньше,.чем нужно")
// }
