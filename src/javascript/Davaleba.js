
// ფუნქცია რომელიც: "მოცემული გვაქვს ლუწი ოდენობის რიცხვთა მასივი, მასივში არსებულ ელემენტთა წყვილებს გავუცვალოთ ინდექსები და
//მიღებული მასივი დავაბრუნოთ სტირნგის სახით"


function transformArray(array) {
    const sortedArray = array.slice().sort();
    const transformed = [];
    for (let i = 0; i < array.length; i++) {
      transformed.push(sortedArray[i]);
      transformed.push(array[i]);
    }
    return transformed;
  }
  
  function arrayToString(array) {
    return array.join('');
  }
  
  const originalArray = [1, 2, 3, 4, 2, 3];
  const transformedArray = transformArray(originalArray);
  const concatenatedString = arrayToString(transformedArray);

  console.log("Concatenated String:", concatenatedString);
