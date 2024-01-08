import React, {useState} from "react";

type StreetType = {
  title: string;
};

type AddressType = {
  street: StreetType;
};

type LessonType = {
  title: string;
  name?: string;
};

export type ManType = {
  name: string;
  age: number;
  lessons: Array<LessonType>;
  address: AddressType
};

type ManComponentProps = {
  title: string;
  man: ManType;
  food: Array<string>;
  car: { model: string }
};

function useDimaState(m: string) {
  return [m, function (){}]
}

export const ManComponent: React.FC<ManComponentProps> = (props) => {
  const {title, man} = props;

  const [message, setMessage] = useState<string>('hello');

  return (
    <>
      <h1>{title}</h1>
      <hr/>
      <div>{man.name}</div>
      <div>{props.car.model}</div>
    </>
  )
}