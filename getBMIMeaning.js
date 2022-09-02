const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/height^2
}
function getBMIMeaning(weight, height) {
  let result = calculateBMI(weight,height)
  if (result < 18.5) 
      return 'Underweight'
  else if (18.5 >= result <= 24.9) 
      return 'Normal weight'
  else if (result > 25.0) 
      return 'Overweight'
  
}
module.exports = getBMIMeaning
