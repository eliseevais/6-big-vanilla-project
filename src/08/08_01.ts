// type usersObjType = {
//   [key: string]: {id: number, name: string}
// }
//
// export const usersObj: usersObjType = {
//   '101': {id: 101, name: 'Dima'},
//   '365551': {id: 365551, name: 'Katya'},
//   '1235': {id: 1235, name: 'Masha'},
//   '1': {id: 1, name: 'Andrey'},
// }

// usersObj[1]
let user = { id: 100500, name: 'Irina'}
usersObj[user.id] = user;
delete usersObj[user.id];
usersObj[user.id].name = 'Vitya';

export const usersArray = [
  {id: 101, name: 'Dima'},
  {id: 365551, name: 'Katya'},
  {id: 1235, name: 'Masha'},
  {id: 1, name: 'Andrey'},
]

usersArray.find(u => u.id === 1)

// usersArray.push(user);
// let usersArrayCopy = [...usersArray.filter(), user];
// let usersArrayCopy2 = usersArray.filter(u => u.id !== user.id);

