class Add {
  constructor(...words) {
    this.words = words;
  }
  print() {
    for (let i = 0; i < this.words.length; i++) {
      this.words[i] = `$${this.words[i]}$`;
    }
    console.log(this.words.join(""));
  }
}
let x = new Add(`home`, `car`, `him`);
x.print();
