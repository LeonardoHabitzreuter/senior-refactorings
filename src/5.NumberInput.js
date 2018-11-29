export default (field, value) => {
  let finalNumber = value.trim()
  finalNumber = finalNumber.replace('.', ',')
  let positions = finalNumber.split('')
  finalNumber = ''
  
  for (let index = 0; index < positions.length; index++) {
    const element = positions[index]
  
    if (!isNaN(element)) {
      finalNumber += element
    }
    if (element === ',' && !finalNumber.includes(',')) {
      finalNumber += element
    }
  }
  
  let obj = {}
  obj[field] = finalNumber
  return obj
}
