// pirveli davaleba
// const changeIndexes = (arr) => {
//     const splitArray = [];
//     let temporaryArray = [];
//     for(let i = 0; i < arr.length; i++) {
//         temporaryArray.push(arr[i]);
//         if(i % 2 === 1) {
//             splitArray.push(temporaryArray);
//             temporaryArray = [];
//         }
//     }

//     for(let i = 0; i < splitArray.length; i++) {
//         let revSubArr = splitArray[i].reverse();
//         splitArray[i] = revSubArr;
//     }

//     console.log(splitArray);
// }

// changeIndexes([1,2,3,4,2,3]);

// meore davaleba
const subtractElemns = (arr) => {
    let biggestElemIndex = 0;
    let lowestElemIndex = 0;
    let biggestElem = 0;
    let lowestElem = 0;

    for(let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        if (elem > biggestElem && i > biggestElemIndex) {
            biggestElem = elem;
            biggestElemIndex = i;
        }
        if (elem < lowestElem && i < biggestElemIndex) {
            lowestElem = elem;
            lowestElemIndex = i;
        }
    }

    if(biggestElemIndex === 0) return 0;
    else if (biggestElemIndex > lowestElemIndex) return biggestElem - lowestElem;
}

// mesame davaleba
// const canGetStringOnSpin = (str) => {
//     let newStr = str.split("");
//     for(let i = 0; i < newStr.length; i++) {
//         newStr[i] = str[str.length - 1 - i];
//     }
  
//     return newStr.reverse().join("") === str;
// }