import { useCallback, useEffect, useMemo, useState } from 'react';

const TamingUseMemo = () => {
  const [val, setVal] = useState(5);

  const myMemoFunc = useCallback(
    (val) => {
      let res = val * 2;
      console.log(res);
      return res;
    },
    [val],
  );

  useEffect(() => {
    console.log('myMemoFunc changed');
    myMemoFunc();
  }, [myMemoFunc]);

  console.log(myMemoFunc);

  return (
    <div>
      <button onClick={() => setVal((v) => v - 1)}>-</button>
      {val}
      <button onClick={() => setVal((v) => v + 1)}>+</button>
      <button onClick={() => myMemoFunc()}></button>
    </div>
  );
};

export default TamingUseMemo;
