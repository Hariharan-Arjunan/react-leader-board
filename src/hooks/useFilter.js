import { useEffect, useState } from "react";
import { response } from "../response";

const useFilter = (key) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (key) {
      setData(
        response.list.sort((a, b) => {
          const dataA = key === "name" ? a[key] : parseInt(a[key]);
          const dataB = key === "name" ? b[key] : parseInt(b[key]);
          if (dataA === dataB) {
            return -1;
          }
          return dataA < dataB ? -1 : 1;
        })
      );
    } else {
      setData(response?.list);
    }
  }, [key]);

  return data;
};

export default useFilter;
