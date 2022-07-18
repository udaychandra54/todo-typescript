import React, { ChangeEvent, FC, useState } from "react";

type Props = {};

export const Person: FC = (props: Props) => {
  const [country, setCountry] = useState<string | null>("");
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  return (
    <div className="container">
      <input type="text" onChange={changeHandler} />
    </div>
  );
};
