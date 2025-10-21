import { useEffect, useState } from "react";
import ToysContext from "../contexts/ToysContext";

const ToysProvider = ({ children }) => {
  const [allToys, setAllToys] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch("/toysData.json");
        const data = await res.json();
        setAllToys(data);
      } catch (error) {
        console.log("Error fetching toys data: ", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return <ToysContext value={{ allToys, loading }}>{children}</ToysContext>;
};

export default ToysProvider;
