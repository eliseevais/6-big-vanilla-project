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
export var findUserInDB = (id) => {
  const users = [
    {id: 1, name: 'Dima', friend: 3},
    {id: 2, name: 'Sveta', friend: null},
    {id: 3, name: 'Valera', friend: 2}
  ]

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = users.find( user => user.id == id);
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