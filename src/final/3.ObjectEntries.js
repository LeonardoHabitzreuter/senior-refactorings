import { pipe, pick, forEachObjIndexed } from 'ramda'

export default (obj, cb) => pipe(
  pick([
    'valorBaixar', 'valorCorrecao', 'valorEncargos', 'valorOutrosAcrescimos',
    'valorJuros', 'valorMulta', 'valorDescontos', 'valorOutrosDescontos'
  ]),
  forEachObjIndexed(cb)
)(obj)
