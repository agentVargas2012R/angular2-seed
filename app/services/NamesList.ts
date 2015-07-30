export class NamesList {
	names = ['mgechev', 'ludohenin', 'NathanWalker', 'dstockhammer', 'robertpenner', 'jgolla'];

  get() {
    return this.names;
  }
  add(value) {
    this.names.push(value);
  }


}

