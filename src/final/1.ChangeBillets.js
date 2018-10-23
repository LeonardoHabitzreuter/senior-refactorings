import { pipe, pick, merge } from 'ramda'

const onTituloEdit = (titulos, tituloAlterado) => titulos.map(pipe(
  pick(['numero', 'vencimentoOriginal', 'vencimentoProrrogado', 'provavelPagamento', 'dataNegociados', 'dataDesconto']),
  merge(tituloAlterado)
))
  
export default onTituloEdit