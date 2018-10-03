import changeBillets from '../src/1.ChangeBillets'

describe('Change Billets', () => {
    const titulo1 = {
        numero: 1,
        vencimentoOriginal: 1,
        vencimentoProrrogado: 1,
        provavelPagamento: 1,
        dataNegociados: '21/09/18',
        dataDesconto: '21/09/18',

        juros: 0.50
    }
    const titulo2 = {
        numero: 2,
        vencimentoOriginal: 2,
        vencimentoProrrogado: 2,
        provavelPagamento: 2,
        dataNegociados: '22/09/18',
        dataDesconto: '22/09/18',

        juros: 1.00
    }
    const titulo3 = {
        numero: 3,
        vencimentoOriginal: 3,
        vencimentoProrrogado: 3,
        provavelPagamento: 3,
        dataNegociados: '23/09/18',
        dataDesconto: '23/09/18',

        juros: 1.50
    }

    test('should return the same array changing just the interest prop', () => {
        const response = changeBillets([titulo1, titulo2, titulo3], {
            numero: 3,
            vencimentoOriginal: 3,
            vencimentoProrrogado: 3,
            provavelPagamento: 3,
            dataNegociados: '23/09/18',
            dataDesconto: '23/09/18',

            juros: 2.50
        })
        expect(response).toHaveLength(3)
        expect(response).toMatchObject([
            { ...titulo1, juros: 2.50 },
            { ...titulo2, juros: 2.50 },
            { ...titulo3, juros: 2.50 }
        ])
    })
})
