
function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
          if (array[i] + array[j] === target) {
              return [i, j];
          }
      }
  }
  return [];
}



/////
const array = [2, 7, 11, 15];
const target = 9;
const result = twoSum(array, target);
console.log(result); // return [0, 1]
document.writeln(
    `
    <div class="container mt-3">
    <div class="row">
    <div class="col">
      <h3 class="sColor"> ${result}</h3>
    </div>
  </div>
   
    `
); 


