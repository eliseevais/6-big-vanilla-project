import { StudentType } from "../02/02"
import { addSkill, doesStudentLiveIn, makeStudentActive } from "./03";

let student: StudentType;
beforeEach(() => {
  student = {
    id: 1,
    name: "Irina",
    age: 32,
    isActive: false,
    adress: {
      streetTitle: "Kurganova 2",
      city: {
        title: "Moscow",
        country: "Russia",
      },
    },
    technologies: [
      { id: 1, title: "CSS" },
      { id: 2, title: "JS" },
      { id: 3, title: "NodeJS" },
    ],
  };
})

test.skip("new tech skill shoul be added to student", () => {
  expect(student.technologies.length).toBe(3);

  addSkill(student, "JS");
  
  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe("JS");
  expect(student.technologies[3].id).toBeDefined();
});

test.skip("student should be active", () => {
  expect(student.isActive).toBe(false);

  makeStudentActive(student);
  
  expect(student.isActive).toBe(false);
});

test.skip("does student live in city?", () => {
  
  let result1 = doesStudentLiveIn(student, "Moscow");
  let result2 = doesStudentLiveIn(student, "Moscow");
  
  expect(result1).toBe(true);
  expect(result2).toBe(true);
});