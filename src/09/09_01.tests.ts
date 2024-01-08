function increaseAge(u: UserType) {
  u.age++
}

type UserType = {
  name: string;
  age: number;
  address: { city: string }
}


test('reference test', () => {
  let user09: UserType = {
    name: 'Dima',
    age: 32,
    address: {
      city: 'Minsk'
    }
  }

  increaseAge(user09);
  expect(user09.age).toBe(33);
  let superman = user09;
  superman.age = 1000;
  expect(user09.age).toBe(1000);
});

test('array test', () => {
  let users09 = [
    {
      name: 'Dima',
      age: 32
    },
    {
      name: 'Katya',
      age: 25
    }
  ]

  let admins = users09;
  admins.push({name: 'Bandit', age: 10})
  expect(users09[2]).toEqual({name: 'Bandit', age: 10});
});

test('reference test primitives', () => {
  let usersCount = 100;
  let adminsCount = usersCount;

  adminsCount++;
  expect(usersCount).toBe(100);
});

test('reference test with two objects', () => {

  let address = {
    city: 'Minsk'
  }
  let userDima: UserType = {
    name: 'Dima',
    age: 32,
    address: address,
  }

  let userNatasha = {
    name: 'Natasha',
    age: 30,
    address: address,
  }

  userNatasha.address.city = 'Kanary';

  expect(userDima.address).toBe(userNatasha.address);
  expect(userDima.address.city).toBe('Kanary');
});

test('reference test array', () => {

  let address = {
    city: 'Minsk'
  }
  let user001: UserType = {
    name: 'Dima',
    age: 32,
    address: address,
  }

  let user002 = {
    name: 'Natasha',
    age: 30,
    address: address,
  }

  let usersFamily = [user001, user002, {
    name: 'Misha',
    age: 4,
    address: address
  }];

  let admins = [user001, user002];

  admins[0].name = 'Kostya';

  expect(user001.name).toBe('Kostya');
  expect(usersFamily[0].name).toBe('Kostya');
});


test('array sort', () => {

  let letters = ['z', 'f', 'a']

  pasportist(letters);

  expect(letters).toEqual(['z', 'f', 'a'])

});

function pasportist(letters: any) {
  let copy = [...letters].sort();
  console.log(copy)
}


