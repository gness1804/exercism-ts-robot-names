export default class RobotName {
  name: string;

  constructor() {
    this.name = this.generateName();
  }

  generateName(): string {
    return 'test';
  }

  resetName(): void {

  }
}
