export default class RobotName {
  name: string;

  constructor() {
    this.name = this.generateName();
  }

  generateName(): string {
    const str1 = this.generateRandomLetter();
    let str2 = this.generateRandomLetter();

    let nums = [
      this.generateRandomDigit(),
      this.generateRandomDigit(),
      this.generateRandomDigit()
    ];

    // enforce that the letters are not within 2 or less of each other
    if (Math.abs(str1.charCodeAt(0) - str2.charCodeAt(0)) <= 2)
      this.generateName();
    return `${str1}${str2}${nums.join(" ").replace(/\s/g, "")}`;
  }

  resetName(): void {
    this.name = this.generateName();
  }

  generateRandomLetter(): string {
    // ASCII codes for A-Z: 65-90
    return String.fromCharCode(Math.random() * (91 - 65) + 65);
  }

  generateRandomDigit(): number {
    return Math.floor(Math.random() * (10 - 0) + 0);
  }
}
