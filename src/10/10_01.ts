export type UserPropsType = {
  name: string;
  hair: number;
  address: {
    city: string,
    house: number
  },
  skills: Array<string>
};

export type LaptopPropsType = {
  title: string
};

export type UserWithLaptopPropsType = UserPropsType & {
  laptop: LaptopPropsType
};

export type UserWithBooksPropsType = UserPropsType & {
  books: Array<string>
};

type CompanyPropsType = { id: number, companyName: string };
export type WithCompaniesPropsType = {
  companies: Array<CompanyPropsType>
};

export function makeHairStyle(user: UserPropsType, power: number) {
  const copyUser = {
    ...user,
    hair: user.hair / power
  }
  // copyUser.hair = copyUser.hair / power
  return copyUser
};

export function moveUser(user: UserWithLaptopPropsType, city: string) {
  const copyUser = {
    ...user,
    address: {
      ...user.address,
      city: city
    }
  };
  return copyUser
};

export function moveUserToOtherHouse(user: UserWithLaptopPropsType & UserWithBooksPropsType, house: number) {
  const copyUser = {
    ...user,
    address: {
      ...user.address,
      house: house
    }
  };
  return copyUser
};

export function upgradeUser(user: UserWithLaptopPropsType, title: string) {
  const copyUser = {
    ...user,
    laptop: {
      ...user.laptop,
      title: title
    }
  };

  return copyUser
};

export function addNewBookToUser(user: UserWithLaptopPropsType & UserWithBooksPropsType, newBook: string) {
  const userWithNewBooks = {
    ...user,
    books: [
      ...user.books,
      newBook
    ]
  }
  return userWithNewBooks
};

export function updateBookToUser(user: UserWithLaptopPropsType & UserWithBooksPropsType, oldBook: string, newBook: string) {
  const userWithNewBooks = {
    ...user,
    books: user.books.map(book => book === oldBook ? newBook : newBook)
  }
  return userWithNewBooks
};

export function updateUserSkills(user: UserWithLaptopPropsType & UserWithBooksPropsType, oldSkill: string, newSkill: string) {
  return {
    ...user,
    skills: user.skills.map(skill => skill === oldSkill ? newSkill : skill)
  }
};

export function removeBook(user: UserWithLaptopPropsType & UserWithBooksPropsType, bookToRemove: string) {
  return {
    ...user,
    books: user.books.filter(book => book !== bookToRemove)
  }
};

export function addCompanyToUser(
  user: UserWithLaptopPropsType & WithCompaniesPropsType,
  idCompany: number,
  newCompanyName: string) {

  return {
    ...user,
    companies: [...user.companies, {id: idCompany, companyName: newCompanyName}]
  }
};

export function updateCompanyName(
  user: WithCompaniesPropsType,
  idCompany: number,
  newCompanyName: string) {

  return {
    ...user,
    companies: user.companies.map(
      company => company.id === idCompany
        ? {...company, companyName: newCompanyName}
        : company
    )
  }
};

export function updateCompanyName2(companies: {
                                     [key: string]: Array<CompanyPropsType>
                                   },
                                   userName: string,
                                   id: number,
                                   newCompanyName: string) {

  let companiesCopy = {...companies};
  companiesCopy[userName] = companiesCopy[userName].map(
    c => c.id === id
      ? {...c, companyName: newCompanyName}
      : c)

  return companiesCopy
};