const onTituloEdit = (titulos, tituloAlterado) => titulos.map(titulo => {
    const { numero, vencimentoOriginal, vencimentoProrrogado,
        provavelPagamento, dataNegociados, dataDesconto } = titulo

    return {
        ...tituloAlterado,
        numero, vencimentoOriginal, vencimentoProrrogado, provavelPagamento, dataNegociados, dataDesconto
    }
})
  
  
  export default onTituloEdit