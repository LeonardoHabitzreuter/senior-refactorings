import round from '../src/3.ObjectEntries'

const obj = {
  valorBaixar: 1,
  valorJuros: 2,
  valorMulta: 2,
  valorCorrecao: 2,
  valorEncargos: 2,
  valorOutrosAcrescimos: 2,
  valorDescontos: 2,
  valorOutrosDescontos: 2
}

describe('ObjectEntries', () => {
  test('should invoke the callback for every prop', () => {
    const fn = jest.fn()
    
    round(obj, fn)

    expect(fn.mock.calls).toEqual(
      expect.arrayContaining([[1, 'valorBaixar'], [2, 'valorJuros']])
    )
  })
})
