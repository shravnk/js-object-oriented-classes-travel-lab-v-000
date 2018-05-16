class Driver {
  constructor(name, joinDate) {
    this.name = name
    this.joinDate = joinDate
    this.startDate = new Date(this.joinDate)
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}
class Route {
  constructor(b, e) {
    this.beginningLocation = b
    this.endingLocation = e
  }

  blocksTravelled() {
    return (Math.abs(this.beginningLocation.horizontal - this.endingLocation.horizontal) + Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical))
  }
}
