import { useEffect, useRef } from "react";

const RefExample = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []); // чтобы не шло бесконечно

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Фокус</button>
    </div>
  );
};

export default RefExample;
