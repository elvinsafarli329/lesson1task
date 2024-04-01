//task1
// function rColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// setInterval(() => {
//     let b = new Date();
//     console.clear();
//     console.log(`%c${b}`, `color: ${rColor()}`);
// }, 1000);


//task2
// let students = [
//     {
//         Id: 1,
//         name: "Asad",
//         surname: "Asadov",
//         age: 30,
//         hobbies: ["chess", "futball", "music"],
//         score: 100
//     },
//     {
//         Id: 2,
//         name: "Elman",
//         surname: "Hakimov",
//         age: 35,
//         hobbies: ["jugging", "reading novels", "drawing"],
//         score: 80
//     },
//     {
//         Id: 3,
//         name: "Fuad",
//         surname: "Safaraliyev",
//         age: 38,
//         hobbies: ["writing poems", "playing piano", "fighting"],
//         score: 90,
//     },
//     {
//         Id: 4,
//         name: "Turab",
//         surname: "Imanov",
//         age: 38,
//         hobbies: ["writing poems", "playing piano", "fighting"],
//         score: 40,
//     },
//     {
//         Id: 5,
//         name: "Yusuf",
//         surname: "Mammadov",
//         age: 38,
//         hobbies: ["writing poems", "playing piano", "fighting"],
//         score: 95,
//     },
// ]

// let find_name = prompt("enter the name: ");
// let exists = false;
// students.map((student) => {
//     if (student.name === find_name) {
//         console.log(student.name);
//         exists = true;
//     } 
// });
// if (!exists) {
//     console.log("false");
// }

//task3
// let word = prompt("enter a word: ");
// let wordarray = word.split('');

// function listletters() {
//     let length = wordarray.length;
//     for (let i = 1; i <= length * 2 - 1; i++) {
//         let substringLength;
//         if (i <= length) {
//             substringLength = i;
//         } else {
//             substringLength = length * 2 - i;
//         }
//         let substring = wordarray.slice(0, substringLength).join('');
//         console.log(substring);
//     }
// }

// listletters();
