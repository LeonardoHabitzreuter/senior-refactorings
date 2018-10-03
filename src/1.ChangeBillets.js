const onTituloEdit = (titulos, tituloAlterado) => {
  titulos.forEach((titulo) => {
    for (const propName in tituloAlterado) {
      if (Object.is(titulo[propName], tituloAlterado[propName]) === false) {
        if (propName !== "numero" &&
          propName !== "vencimentoOriginal" &&
          propName !== "vencimentoProrrogado" &&
          propName !== "provavelPagamento" &&
          propName !== "dataNegociados" &&
          propName !== "dataDesconto") {
          titulo[propName] = tituloAlterado[propName]
        }
      }
    }
  })

  return titulos
}


export default onTituloEdit