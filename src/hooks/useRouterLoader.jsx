import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const useRouterLoader = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (currentPath !== pathname) {
      setLoading(true);
      setCurrentPath(pathname);
    } else if (currentPath === pathname) {
      const timerId = setTimeout(() => {
        setLoading(false);
      }, 300);

      return () => clearTimeout(timerId);
    }
  }, [currentPath, pathname]);

  return { loading };
};

export default useRouterLoader;
