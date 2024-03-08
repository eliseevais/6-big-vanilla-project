// findUserInDB(1).then(user => {
//   console.log(name)
// })

function getNumber() {
  // const promise = Promise.resolve(Math.random())
  const promise = new Promise((resolve, reject) => {
    //reject('some error')

    setTimeout(() => {
      resolve(Math.random())
    }, 2000)
  })
  return promise
}

//getNumber().then(n => console.log(n))

const repo = {
  save(data) {
    try {
      localStorage.setItem('some-key', JSON.stringify(data))
    } catch (error) {
      return false
    }
    return true
  },
  saveAsync(data) {
    const promise = new Promise((resolve, rejected) => {
      try {
        localStorage.setItem('some-key', JSON.stringify(data))
        resolve()
      } catch (error) {
        rejected(error)
      }
    })
    return promise
  },
  read() {
    const data = localStorage.getItem('some-key')
    if (!data) {
      return null
    } else {
      return JSON.parse(data)
    }
  },
  readAsync() {
    return new Promise((resolve, reject) => {
      const data = localStorage.getItem('some-key')
      if (!data) {
        resolve(null)
      } else {
        resolve(JSON.parse(data))
      }
    })
  }
}

const result = repo.save({name: 'IT-KAMASUTRA'})
console.log('SAVED')

const data = repo.read()
console.log('DATA SYNC', data)


const run = async () => {
  await repo.saveAsync({name: 'IT-KAMASUTRA async'})
  console.log('SAVED')

  const data = await repo.readAsync()
  console.log(data)
}

run();