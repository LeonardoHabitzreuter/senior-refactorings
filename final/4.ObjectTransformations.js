import { pipe, when, path, assoc, anyPass, ifElse, dissoc, over, lensProp, prop, pick } from 'ramda'

const setPropIf = (propName, value, condition) => when(
  condition,
  assoc(propName, value)
)

const getDateObjByMoment = moment => (init = new Date(), end = new Date()) => ({
  init: moment(init),
  end: moment(end)
})

export default (controls, moment) => {
  const getDateObj = getDateObjByMoment(moment)
  
  return pipe(
    ifElse(
      path(['status', 'value']),
      over(lensProp('status'), prop('value')),
      dissoc('status')
    ),
    setPropIf('sourceIdents', controls.source.value, path(['source', 'value'])),
    setPropIf('status', controls.status.value, path(['status', 'value'])),
    setPropIf('payload', controls.content.value, path(['content', 'value'])),
    setPropIf('id', controls.identification.value, path(['identification', 'value'])),
    setPropIf(
      'includedOnInterval',
      getDateObj(controls.processingInitial.value, controls.processingFinal.value),
      anyPass([path(['processingInitial', 'value']), path(['processingFinal', 'value'])])
    ),
    setPropIf(
      'lastProcessedOnInterval',
      getDateObj(controls.dateInitial.value, controls.dateFinal.value),
      anyPass([path(['dateInitial', 'value']), path(['dateFinal', 'value'])])
    ),
    pick(['sourceIdents', 'status', 'payload', 'id', 'includedOnInterval', 'lastProcessedOnInterval'])
  )(controls)
}