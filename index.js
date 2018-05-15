class Driver {
  constructor(name, joinDate) {
    this.name = name
    this.joinDate = joinDate
    this.startDate = new Date(this.joinDate)
  }
  startDate(){
    return new Date(this.joinDate)
  }
}
