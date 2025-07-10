import { useState } from "react";

export const useCustomHook = () => {
  const [value, setValue] = useState(0);
  return { value, increment: () => setValue(value + 1) };
};
