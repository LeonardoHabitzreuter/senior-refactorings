import { pipe, trim, replace, split, filter, either, equals, not, objOf } from 'ramda'

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

  this.formGroup.patchValue(objOf(field, formatDecimalValue(value)))
}
