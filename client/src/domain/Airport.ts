export default class Airport {
  code: string;
  name: string;

  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
  }

  toString() {
    return `${this.code} - ${this.name}`;
  }
}
