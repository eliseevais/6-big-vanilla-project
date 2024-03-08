const resolvedPromise = Promise.resolve([{}]);
// resolvedPromise
//   .then(data => console.log(data))
//   .catch(error => console.warn(error))

// const rejectedPromise = Promise.reject({message: 'Some error'});

// rejectedPromise
//   .then(data => console.log(data))
//   .catch(error => console.warn(error))

const usersAPI = {
  getAllUsers() {
    return Promise.resolve([{name: 'D'}, {name: 'N'}])
  },
  login(login, password) {
    if (login !== '123' && password !== '123') {
      return Promise.reject({message: 'incorrect login and password'})
    } else {
      return Promise.resolve({mane: 'Dima', id: 15})
    }
  }
}

const pr = usersAPI.getAllUsers()
pr.then(users => console.log(users))

usersAPI.login('123', '123')
  .then((data) => {
    // makeRedirect
  })
  .catch(error => {
    //show error
  })
