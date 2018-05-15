class Driver {
  constructor(name, joinDate) {
    this.name = name
    this.joinDate = joinDate
    this.startDate = new Date(this.joinDate)
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear
  }
}
