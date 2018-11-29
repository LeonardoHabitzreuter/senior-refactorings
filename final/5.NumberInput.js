import { pipe, trim, replace, split, filter, either, equals, not, reduce, objOf } from 'ramda'

export default (field, value) => {
  const joinValues = (prev, next) => (
    prev.includes(',') && next === ','
      ? prev
      : `${prev}${next}`
  )

  const formatDecimalValue = pipe(
    trim,
    replace('.', ','),
    split(''),
    filter(either(
      equals(','),
      pipe(isNaN, not)
    )),
    reduce(joinValues, '')
  )

  return objOf(field, formatDecimalValue(value))
}
