import { v4 as uuid } from "uuid";

class attendance {
  public name: string;
  public time: string;

  constructor(name: string, time: string) {
    this.name = name;
    this.time = time;
  }
}

let attendances = new attendance("ibrahim", "8:00am");

console.log(attendances);
