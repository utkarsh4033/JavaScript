// // for loop
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);

// }

// for(let i =0;i < 10; i++){
//     const element  = i;
//     if(element == 5){
//         console.log("detected")
//     }
//     console.log(element)
// }

// for(let i = 0; i< 10; i++){
//     console.log(`outer loop value: ${i}`)
//     for(let j = 0; j< 10;j++){
//     console.log(`inner loop value: ${j}, outer loop value ${i}`)
//     }
// }

// for(let i = 1; i<= 10; i++){
//     console.log(`outer loop value: ${i}`)
//     for(let j = 1; j<= 10;j++){
//     console.log(i + "*" + j + "=" + i*j)
//     }
// }

// for(let i = 0; i < 10;i++){
//     if(i == 5){
//         console.log(`detected ${i}`)
//         break;
//     }
//     console.log(i);
// }
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        // console.log(`detected ${i}`)
        continue;
    }
    console.log(i);
}

