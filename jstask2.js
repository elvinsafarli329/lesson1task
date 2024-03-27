// 1. Daxil olunan ədədin sadə yoxsa mürəkkəb olduğunu tapın.               +
// 2. Daxil olunan ədədin mükəmməl olub olmadığını tapın.                   +
// 3. Daxil olunan 2 ədəd arasındakı mükəmməl ədədləri göstərin.            +-
// 4. Daxil olunan 2 ədəd arasındakı sadə ədədləri göstərin.                +
// 5. Daxil olunan 2 ədəd arasındakı sonu 7 ilə bitən ədədləri göstərin.    +


//task1
// let a = +prompt("reqem daxil edin: ");
// let c = true;
// if (a === 1) {
//     console.log("ne sade ne murekkeb");
// } else if (a === 2) {
//     console.log("Sade");
// } else {
//     for (let b = 2; b <= Math.sqrt(a); b++) {
//         if (a % b === 0) {
//             c = false;
//             break;
//         }
//     }
//     if (c) {
//         console.log("Sade");
//     }
//     else {
//         console.log("Murekkeb");
//     }
// }

//task2
// let a = +prompt("reqem daxil edin: ");
// let c = 0;
// for (let b = 1; b < a; b++) {
//     if (a % b === 0) {
//         c += b;
//     }
// }
// if (c === a) {
//     console.log("mukemmel");
// }
// else {
//     console.log("mukemmel deyil");
// }

//task3
// let a = +prompt("Enter a number: ");
// let b = +prompt("Enter another number: ");
// for (let i = a; i <= b; i++) {
//     let sum = 1;
//     for (let j = 2; j  <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             sum += j;
//             if (j !== Math.sqrt(i)) {
//                 sum += i / j;
//             }
//         }
//     }
//     if (sum === i && i !== 1) {
//         console.log(i);
//     }
// }


//task4
// let a = +prompt("Enter a number: ");
// let b = +prompt("Enter another number: ");
// for (let c = a; c <= b; c++) {
//     let P = c > 1;
//     for (let d = 2; d <= c/2; d++) {
//         if (c % d === 0) {
//             P = false;
//             break;
//         }
//     }
//     if (P) console.log(c);
// }

//task5
// let a = +prompt("Enter a number: ");
// let b = +prompt("Enter another number: ");
// for (let c = a; c < b; c++) {
//     if (c % 10 === 7) {
//         console.log(c);
//     }
// }

