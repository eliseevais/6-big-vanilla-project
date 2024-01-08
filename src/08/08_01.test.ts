type usersObjType = {
  [key: string]: {id: number, name: string}
}

export let usersObj: usersObjType;
beforeEach(() => {
  usersObj = {
    '101': {id: 101, name: 'Dima'},
    '365551': {id: 365551, name: 'Natasha'},
    '1235': {id: 1235, name: 'Masha'},
    '1': {id: 1, name: 'Katya'}
  }
});

test('should update corresponding user from obj', () => {
usersObj['1'].name = 'Ekaterina';

  expect(usersObj['1'].name).toBe('Ekaterina');
  expect(usersObj['1']).toEqual({id: 1, name: 'Ekaterina'});
});

test('should delete corresponding user from obj', () => {
  delete usersObj['1'];

  expect(usersObj['1']).toBeUndefined();
});