import transform from '../src/4.ObjectTransformations'

describe('ObjectTransformations', () => {
  const moment = jest.fn(date => date.toDateString())
  
  describe('input controls with no values', () => {
    const controls = {
      source: {},
      status: {},
      content: {},
      identification: {},
      dateInitial: {},
      dateFinal: {},
      processingInitial: {},
      processingFinal: {},
    }

    test('should return an empty object', () => {
      expect(transform(controls, moment)).toEqual({})
    })
  })

  describe('input controls with values', () => {
    const controls = {
      source: { value: 1 },
      status: { value: 2 },
      content: { value: 3 },
      identification: { value: 4 },
      dateInitial: { value: new Date() },
      dateFinal: { value: new Date() },
      processingInitial: { value: new Date() },
      processingFinal: { value: new Date() },
    }

    test('should return an object transformed', () => {
      expect(transform(controls, moment)).toMatchObject({
        sourceIdents: 1,
        status: 2,
        payload: 3,
        id: 4
      })
    })
    
    test('should return an object with transformed dates when dates are not empty', () => {
      expect(transform(controls, moment)).toMatchObject({
        includedOnInterval: {
          init: controls.dateInitial.value.toDateString(),
          end: controls.dateFinal.value.toDateString()
        },
        lastProcessedOnInterval: {
          init: controls.processingInitial.value.toDateString(),
          end: controls.processingFinal.value.toDateString()
        }
      })
    })
  })
})
