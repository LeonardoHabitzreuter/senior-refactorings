import getWeekDay from '../src/old/2.Switch'

describe('Switch', () => {
  
  test('should return Domingo when day equals 0', () => {
    const response = getWeekDay(0)
    
    expect(response).toBe('Domingo')
  })

  test('should return Segunda when day equals 1', () => {
    const response = getWeekDay(1)

    expect(response).toBe('Segunda')
  })
})
