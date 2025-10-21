import { useContext } from "react";
import ToysContext from "../contexts/ToysContext";

const useToysData = () => {
  return useContext(ToysContext);
};

export default useToysData;
