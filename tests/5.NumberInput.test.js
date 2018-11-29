import convertTextToNumber from '../src/5.NumberInput'

describe('InputNumber', () => {
  test('should remove the space from input', () => {
    expect(convertTextToNumber('field', '1 ')).toEqual({ field: '1' })
  })

  test('should replace the dot for comma', () => {
    expect(convertTextToNumber('field', '1.')).toEqual({ field: '1,' })
  })

  test('should remove the letter', () => {
    expect(convertTextToNumber('field', '1.a')).toEqual({ field: '1,' })
  })

  test('should not permit two commas at the same input', () => {
    expect(convertTextToNumber('field', '1,.')).toEqual({ field: '1,' })
  })
})
