import React, {MouseEvent, ChangeEvent} from "react";

// window.setTimeout(() => {} , 1000);
// const  callback = () => {
//   alert('hello')
// };
// window.setTimeout(callback, 1000); // функцию запустит кто-то другой, а не мы

export const User = () => {
  const searchUser = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.value);
  };

  const onNameChanged = () => {
    console.log('Name was changed')
  };

  const focusLostHandler = () => {
    console.log('focus was lost')
  };

  const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('age was changed');
    console.log(`age ${event.currentTarget.value}`);
  }

  return (
    <div>
      <textarea onChange={onNameChanged}
      onBlur={focusLostHandler}
      >Irina</textarea>
      <input onChange={onAgeChanged} type={'number'}/>
      <button name='delete' onClick={searchUser}>search</button>
    </div>
  )
};