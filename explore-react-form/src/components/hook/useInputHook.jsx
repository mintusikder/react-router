import { useState } from "react";

const useImportHook = (defaultValue) => {
  const [fieldValue, setFieldValue] = useState(defaultValue);
  const fieldHandelChange = (e) => {
    setFieldValue(e.target.value);
  };
  return [fieldValue, fieldHandelChange];
};

export default useImportHook;
