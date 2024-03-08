const axios = {}
// const findUserInDB = (id) => {
// };

// pending
const promise1 = axios.get('https://google.com');
promise1.then((data) => {
  console.log(data)
});

// axios.get('https://google.com')
//   .then((data) => {
//   console.log(data)
// });

// pending
const promise2 = findUserInDB(1);

// promise2
//   .then((user) => {
//     console.log(promise2);
//     console.log(user)
//   })
//   .catch((error) => {
//     console.warn(error)
//   })
//   .finally(() => {
//     console.log('finish')
//   })

promise2
  .then((user) => {
    console.log(user)
  })

// console.log('finish')

const otherPromise = Promise.all([promise1, promise2]); // зарезолвится
// только тогда когда зарезолвятся два промиса

const otherPromise2 = Promise.allSettled([promise1, promise2]); // сработает
// в любом случае и не упает с ошибкой в случае если один из промисов не
// сработает

// results для случая all- массив результатов, полученных от двух промисов.
// неважно кто первый зарезолвится. выведется сразу результат в виде массива
otherPromise
  .then((results) => {
    const dataFromGoogle = results[0];
    const userFromDB = results[1]
    console.log('finish all promises')
  })
  .catch(() => {
    console.log('initialization failed')
  })

otherPromise2
  .then((results) => {
    const dataFromGoogle =
      results[0].status === 'fulfilled'
        ? results[0].value
        : {data: {vacancies: null}}
    const userFromDB =
      results[1].status === 'fulfilled'
        ? results[1].value
        : {name: results[1].reason}
    console.log('finish all promises')
  })
  .catch(() => {
    console.log('initialization failed')
  })