// const numberToConsole1 = () => {
//   setTimeout(() => {
//     console.log(1)
//   }, 1000)
// }
//
// const numberToConsole2 = () => {
//   setTimeout(() => {
//     console.log(2)
//   }, 2000)
// }
//
// const numberToConsole3 = () => {
//   setTimeout(() => {
//     console.log(3)
//   }, 3000)
// }
//
// numberToConsole1();
// numberToConsole2();
// numberToConsole3();

const wait = (ms) => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {resolve()}, ms)
  })
}

async function run() {
  await wait(1000)
  console.log(1)
  await wait(1000)
  console.log(2)
  await wait(1000)
  console.log(3)
}

run()