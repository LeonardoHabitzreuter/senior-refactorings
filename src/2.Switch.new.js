const weekDays = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6
}

const getWeekDay = (day) => {
  switch (day) {
    case weekDays.MONDAY:
      return 'Segunda';
    case weekDays.TUESDAY:
      return 'Terça';
    case weekDays.WEDNESDAY:
      return 'Quarta';
    case weekDays.THURSDAY:
      return 'Quinta';
    case weekDays.FRIDAY:
      return 'Sexta';
    case weekDays.SATURDAY:
      return 'Sábado';
    case weekDays.SUNDAY:
      return 'Domingo';
  }
}

export default getWeekDay