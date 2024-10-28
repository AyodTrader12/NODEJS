import moment from "moment";
import { v4 as uuid } from "uuid";

class Student {
  public name: string;
  readonly lang: string;
  public score: number;
  //   protected age: number;

  constructor(name: string, score: number, lang: string = "TS") {
    this.name = name;
    this.score = score;
    this.lang = lang;
  }
}

let student = new Student("Amaka", 70, "JAVA");

// console.log(student);
// console.log(student.score); moment and uuid

class Attendance {
  public id: string;
  public name: string;
  public gender: string;
  public time: string;

  constructor(
    name: string,
    gender: string,
    id: string = uuid(),
    time: string = moment(new Date().getTime()).add(1, "days").format("LLLL")
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.time = time;
  }

  // set updateTime(x: string) {
  // this.time = x;
  // }

  getName(x: number) {
    return ` ${this.name.charAt(x)}`;
  }

  getTime() {
    return ` ${this.time}`;
  }
}

const attendance = new Attendance("Amaka", "Female");
// attendance.updateTime = "Wed, Sep 16, 2024 2:50 PM";
// console.log(attendance.getName(2));
console.log(attendance.getTime());
// console.log(attendance);
