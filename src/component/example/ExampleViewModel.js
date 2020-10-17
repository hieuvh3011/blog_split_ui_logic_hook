import {useState} from 'react';

export default function exampleViewModel() {
  const [count, setCount] = useState(0);

  const _increment = () => setCount(count + 1);
  const _decrement = () => setCount(count - 1);

  return {count, _increment, _decrement};
}
