import { useEffect } from "react";

export const useTitle = (pageTitle) => {
  useEffect(() => {
    document.title = `${pageTitle} - BMDB`;
  }, [pageTitle]);
};

export default useTitle;
