import React, { useState } from "react";

const Welcome = (props: Props) => {
  const [data, setData] = useState<Props2>(0);
  return (
    <div className="container">
      <div>Welcome to {props.title}</div>
      <div>
        course duration is {props.duration} and {data}
      </div>
    </div>
  );
};

export default Welcome;
