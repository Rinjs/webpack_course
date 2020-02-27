class Post {
  constructor(title) {
    this.title = title;
    this.date = new Date().toLocaleString();
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date
    });
  }
}
