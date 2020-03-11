export default class RobotName {
  static allNames = new Set();
  name: string;

  constructor() {
    this.name = this.generateName();
  }

  generateName(): string {
    const str1 = this.generateRandomLetter();
    const str2 = this.generateRandomLetter();

    const nums = [
      this.generateRandomDigit(),
      this.generateRandomDigit(),
      this.generateRandomDigit()
    ];

    // enforce that the letters are not within 2 or less of each other
    if (Math.abs(str1.charCodeAt(0) - str2.charCodeAt(0)) <= 2)
      this.generateName();
    const newName = `${str1}${str2}${nums.join(" ").replace(/\s/g, "")}`;
    RobotName.allNames.add(newName);
    return newName;
  }

  resetName(): void {
    const names = Array.from(RobotName.allNames);
    const newName = this.generateName();
    if (names.includes(newName)) {
      this.resetName();
    } else {
      this.name = newName;
    }
  }

  generateRandomLetter(): string {
    // ASCII codes for A-Z: 65-90
    return String.fromCharCode(Math.random() * (91 - 65) + 65);
  }

  generateRandomDigit(): number {
    return Math.floor(Math.random() * (10 - 0) + 0);
  }
}
