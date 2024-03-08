var axios = {
  _fake(url, data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let responseData = {
          text: `${url} loves you`
        };
        if (url.indexOf('it-kamasutra') > 0) {
          responseData = {
            requestedCount: data.count,
            message: 'we will prepare students for you'
          }
        } else if (url.indexOf('google') > 0) {
          responseData = {
            vacancies: 12
          }
        } else if (url.indexOf('microsoft') > 0) {
          responseData = {
            vacancies: 21
          }
        }
        resolve({
          request: {},
          status: 200,
          headers: {},
          config: {},
          data: responseData
        })
      }, radomIntFromInterval(1, 5) * 1000)
    })
  },
  post(url, data) {
    return this._fake(url, data)
  },
  get(url, data) {
    return this._fake(url, data)
  }
}
var findUserInDB = (id) => {
  const users = [
    {id: 1, name: 'Dima', friend: 4},
    {id: 2, name: 'Sveta', friend: null},
    {id: 3, name: 'Valera', friend: 2}
  ]

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = users.find(user => user.id == id);
      if (user == null) {
        reject('user not found')
      } else {
        resolve(user)
      }
    }, radomIntFromInterval(500, 1500))
  })
};

function radomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// findUserInDB(1)
//   .then(user => {
//     console.log(user.name)
//     return user.friend
//   })
//   .then(friendId => findUserInDB(friendId))
//   .catch(error => {
//     console.log('sorry, no user friend')
//     return {name: 'Friend bot', friend: 3}
//   })
//   .then(friend1 => {
//     console.log(friend1.name);
//     return friend1.friend
//   })
//   .then(friendId => findUserInDB(friendId))
//   .then(friend2 => {
//     console.log(friend2.name)
//   })
//   .catch(error => alert(error))


const wait = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

async function run() {
  try {
    let user = await findUserInDB(1)
    console.log(user.name)
    let friend1
    try {
      friend1 = await findUserInDB(user.friend)
    } catch (error) {
      friend1 = {
        name: 'Friend bot', friend: 3
      }
    }
    console.log(friend1.name)
    let friend2 = await findUserInDB(friend1.friend)
    console.log(friend2.name)
  } catch (error) {
    alert(error)
  }
}

run()