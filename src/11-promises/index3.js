// const promise2 = findUserInDB(1)
//
// const promise2_2 = promise2.then((user) => {})
//
// promise2_2.then(name => console.log(name))

findUserInDB(1)
  .then(user => user.name) // найди имя и отправь это имя в следующий then
  .then(name => console.log(name))

axios.get('https://google.com')
  // .then(response => console.log(response.data)) // ниже тоже самое в две
  // строки
  .then(response => response.data)
  .then(data => console.log(data))

const getVacanciesFromGoogle = () => {
  // const promise = axios.get('https://google.com')
  // const promise2 = promise.then(response = response.data)
  // return promise2

  // return axios.get('https://google.com')
  //   .then(response => response.data)

  return axios.get('https://google.com')
    .then(response => response.data)
    .then(data => data.vacancies)
}

promiseCount = getVacanciesFromGoogle()
  .then(count => console.log(count))