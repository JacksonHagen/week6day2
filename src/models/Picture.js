export class Picture {
  constructor(data) {
    this.imgUrl = data.hdurl
    this.date = data.date
    this.description = data.explanation
    this.title = data.title
  }
}