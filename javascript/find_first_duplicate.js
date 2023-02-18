function findFirstDuplicate(arr) {
  let duplicate = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] in duplicate){
    return arr[i]
   } 
   duplicate[arr[i]] = 1
  }
   return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// assign existing array to new variable
// set for loop, initialize counter to 0
// set initialization end when [i] = array.length
// i ++ 
// set if conditional dupplicate array [i] === original array[i] return [i]
// if no match return -1
