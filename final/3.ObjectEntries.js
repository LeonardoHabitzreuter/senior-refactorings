import { pipe, pick, forEachObjIndexed, nAry } from 'ramda'

export default (obj, cb) => pipe(
  pick([
    'valorBaixar', 'valorCorrecao', 'valorEncargos', 'valorOutrosAcrescimos',
    'valorJuros', 'valorMulta', 'valorDescontos', 'valorOutrosDescontos'
  ]),
  forEachObjIndexed(nAry(2, cb))
)(obj)
