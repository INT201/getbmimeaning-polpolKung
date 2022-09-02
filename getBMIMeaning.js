const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/height^2
}
function getBMIMeaning(weight, height) {
  let result = calculateBMI(weight,height)
  switch (result) {
    case result < 18.5 : 
      return result + 'Underweight'
    case 18.5 >= result <= 24.9 : 
      return result + 'Normal weight'
    case result > 25.0 : 
      return result + 'Overweight'
    default : return 0
  }
  
}
module.exports = getBMIMeaning
