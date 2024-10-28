function cartesianProduct(arrA, arrB) {
  let newArray = []

  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      newArray.push([arrA[i], arrB[j]])
    }
  }

  return newArray
}
const C = [1, 2]

const D = [3, 4, 5]

console.log(cartesianProduct(C, D))
