type CityTypeLocal = {
  title: string;
  country: string;
}

type AdressType = {
  streetTitle: string;
  city: CityTypeLocal;
}

type TechType = {
  id: number;
  title: string;
}

export type StudentType = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  adress: AdressType;
  technologies: Array<TechType>;
}

export let student: StudentType = {
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

console.log(student.age);
console.log(student.name);
console.log(student.adress.city.title);
console.log(student.technologies[2].title)
