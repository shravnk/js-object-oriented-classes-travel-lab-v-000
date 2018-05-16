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
  constructor(start, end) {
    this.beginningLocation = start
    this.endingLocation = end
  }
  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

  blocksTravelled() {
    return (Math.abs(eastWest.indexof(this.beginningLocation.horizontal) - eastWest.indexof(this.endingLocation.horizontal)) + Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical))
  }
}
