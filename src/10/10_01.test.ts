import {
  addCompanyToUser,
  addNewBookToUser,
  makeHairStyle,
  moveUser,
  moveUserToOtherHouse,
  removeBook,
  updateBookToUser, updateCompanyName, updateCompanyName2,
  updateUserSkills,
  upgradeUser,
  UserPropsType,
  UserWithBooksPropsType,
  UserWithLaptopPropsType, WithCompaniesPropsType
} from "./10_01";

test('reference type test', () => {
  let user: UserPropsType = {
    name: 'Dima',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    }
  };

  const awesomeUser = makeHairStyle(user, 2);
  expect(user.hair).toBe(32);
  expect(awesomeUser.hair).toBe(16);
  expect(awesomeUser.address).toBe(user.address);
});

test('change address', () => {
  let user: UserWithLaptopPropsType = {
    name: 'Dima',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {title: 'Zenbook'}
  };

  const movedUser = moveUser(user, 'Kiev');

  expect(user).not.toBe(movedUser);
  expect(user.address).not.toBe(movedUser.address);
  // expect(user.laptop).toBe(movedUser.laptop);
  expect(user.laptop).toStrictEqual(movedUser.laptop);
  expect(movedUser.address.city).toBe('Kiev');
});

test('upgrade laptop', () => {
  let user: UserWithLaptopPropsType & UserWithBooksPropsType = {
    name: 'Dima',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {title: 'Zenbook'},
    books: ['html', 'css', 'js', 'ts']
  };

  const upgradedUser = upgradeUser(user, 'Mackbook');

  expect(user).not.toBe(upgradedUser);
  expect(user.address).toBe(upgradedUser.address);
  expect(user.laptop).not.toBe(upgradedUser.laptop);
  expect(upgradedUser.laptop.title).toBe('Mackbook');
  expect(user.laptop.title).toBe('Zenbook');
});

test('upgrade laptop', () => {
  let user: UserWithLaptopPropsType & UserWithBooksPropsType = {
    name: 'Dima',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {title: 'Zenbook'},
    books: ['html', 'css', 'js', 'ts']
  };

  const movedToNewHouseUser = moveUserToOtherHouse(user, 99);

  expect(user).not.toBe(movedToNewHouseUser);
  expect(user.books).toBe(movedToNewHouseUser.books);
  expect(user.laptop).toBe(movedToNewHouseUser.laptop);
  expect(user.address).not.toBe(movedToNewHouseUser.address);
  expect(movedToNewHouseUser.address.house).toBe(99);
});

test('add new books to user', () => {
  let user: UserWithLaptopPropsType & UserWithBooksPropsType = {
    name: 'Dima',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {title: 'Zenbook'},
    books: ['html', 'css', 'js', 'ts']
  };

  const userWithNewBooks = addNewBookToUser(user, 'rest api');

  expect(user).not.toBe(userWithNewBooks);
  expect(user.laptop).toBe(userWithNewBooks.laptop);
  expect(user.address).toBe(userWithNewBooks.address);
  expect(user.books).not.toBe(userWithNewBooks.books);
  expect(userWithNewBooks.books[4]).toBe('rest api');
  expect(user.books.length).toBe(4);
});

test('update css to styles component book to user', () => {
  let user: UserWithLaptopPropsType & UserWithBooksPropsType = {
    name: 'Dima',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {title: 'Zenbook'},
    books: ['html', 'css', 'js', 'ts']
  };

  const userWithNewBooks = updateBookToUser(user, 'css', 'styled component');

  expect(user).not.toBe(userWithNewBooks);
  expect(user.laptop).toBe(userWithNewBooks.laptop);
  expect(user.address).toBe(userWithNewBooks.address);
  expect(user.books).not.toBe(userWithNewBooks.books);
  expect(userWithNewBooks.books[1]).toBe('styled component');
  expect(user.books.length).toBe(4);
  expect(user.books[1]).toBe('css');
});

test('update user skills', () => {
  let user: UserWithLaptopPropsType & UserWithBooksPropsType = {
    name: 'Dima',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {title: 'Zenbook'},
    books: ['html', 'css', 'js', 'ts'],
    skills: ['reading', 'writing', 'painting', 'singing']
  };

  const userWithNewSkill = updateUserSkills(user, 'writing', 'washing' );

  expect(user).not.toBe(userWithNewSkill);
  expect(user.laptop).toBe(userWithNewSkill.laptop);
  expect(user.address).toBe(userWithNewSkill.address);
  expect(user.books).toBe(userWithNewSkill.books);
  expect(userWithNewSkill.skills[1]).toBe('washing');
  expect(user.skills.length).toBe(4);
  expect(user.skills[1]).toBe('writing');
});

test('remove js book', () => {
  let user: UserWithLaptopPropsType & UserWithBooksPropsType = {
    name: 'Dima',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {title: 'Zenbook'},
    books: ['html', 'css', 'js', 'ts'],
    skills: ['reading', 'writing', 'painting', 'singing']
  };

  const userWithUpdatedBooks = removeBook(user, 'js' );

  expect(user).not.toBe(userWithUpdatedBooks);
  expect(user.books).not.toBe(userWithUpdatedBooks.books);
  expect(userWithUpdatedBooks.books[2]).toBe('ts');
  expect(user.books.length).toBe(4);
  expect(userWithUpdatedBooks.books.length).toBe(3);
});

test('add company new work company name to user', () => {
  let user: UserWithLaptopPropsType & WithCompaniesPropsType = {
    name: 'Dima',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {title: 'Zenbook'},
    skills: ['reading', 'writing', 'painting', 'singing'],
    companies: [
      {id: 1, companyName: 'Epam'},
      {id: 2, companyName: 'IT-incubator'},
      {id: 3, companyName: 'Yandex'}
    ]
  };

  let newCompany = {
    id: 4,
    companyName: 'Google}'
  }

  const userWithNewCompany = addCompanyToUser(user,4, 'Google');

  expect(user).not.toBe(userWithNewCompany);
  expect(user.companies).not.toBe(userWithNewCompany.companies);
  expect(user.companies.length).toBe(3);
  expect(userWithNewCompany.companies.length).toBe(4);
  expect(userWithNewCompany.companies[3].companyName).toBe('Google');
});

test('update company name to user', () => {
  let user: UserWithLaptopPropsType & WithCompaniesPropsType = {
    name: 'Dima',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {title: 'Zenbook'},
    skills: ['reading', 'writing', 'painting', 'singing'],
    companies: [
      {id: 1, companyName: 'Epam'},
      {id: 2, companyName: 'IT-incubator'},
      {id: 3, companyName: 'Yandex'}
    ]
  };

  const userWithUpdatedCompanies = updateCompanyName(user, 1, 'EPAM');

  expect(user).not.toBe(userWithUpdatedCompanies);
  expect(user.companies).not.toBe(userWithUpdatedCompanies.companies);
  expect(user.companies.length).toBe(3);
  expect(userWithUpdatedCompanies.companies.length).toBe(3);
  expect(userWithUpdatedCompanies.companies[0].companyName).toBe("EPAM");
});

test('update company name from associative array', () => {

  let companies = {
    'Dima': [
      {id: 1, companyName: 'Epam'},
      {id: 2, companyName: 'IT-incubator'},
      {id: 3, companyName: 'Yandex'}
    ],
    'Artem': [
      {id: 2, companyName: 'IT-incubator'}
    ]
  }


  const companiesCopy = updateCompanyName2(companies, 'Dima', 3, 'Facebook');

  expect(companiesCopy).not.toBe(companies);
  expect(companiesCopy['Dima']).not.toBe(companies['Dima']);
  expect(companiesCopy['Artem']).toBe(companies['Artem']);
  expect(companiesCopy['Dima'][2].companyName).toBe('Facebook');
});
