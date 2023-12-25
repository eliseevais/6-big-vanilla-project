import {ManType} from "./06-1-destructuring";

export let props: ManType;
beforeEach(() => {
  props = {
    name: 'Dima',
    age: 32,
    lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
    address: {
      street: {
        title: 'Nezavisimosti street'
      }
    }
  }
})

test('', () => {

  // const age = props.age;
  // const lessons = props.lessons;
  const {age, lessons} = props;
  const {title} = props.address.street;

  expect(age).toBe(32);
  expect(lessons.length).toBe(10);
  expect(title).toBe('Nezavisimosti street');
})

test('', () => {
  const lesson1 = props.lessons[0];
  const lesson2 = props.lessons[1];

  const [les1, ...restLessons] = props.lessons;

  expect(lesson1.title).toBe('1');
  expect(lesson2.title).toBe('2');

  expect(les1.title).toBe('1');
  expect(restLessons.length).toBe(5);
  expect(restLessons[1].title).toBe('2');
})