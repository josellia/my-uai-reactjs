import React, { useState, useEffect } from "react";
import Card from "../teste/estudos-praticos/hooks/Card";
import ShowImage from "../teste/estudos-praticos/hooks/ShowImage";
import { ThemeContext, themes } from "../teste/estudos-praticos/hooks/Theme";

const DashboardEstudos = () => {
  // const posts = [
  //   {
  //     title: "teste",
  //     description: "Study ReactJs Hooks",
  //   },
  // ];
  const [token, setToken] = useState();
  useEffect(() => {
    setTimeout(() => {
      setToken("a34fgtyyuuuuuuuu678888");
    }, 4000);
  }, [setToken]);
  return (
    <>
      <div className="container">
        {/* <ThemeContext.Provider value={{ ...themes.primary, token }}>
          <Card></Card>
        </ThemeContext.Provider> */}
        <ShowImage />
      </div>
    </>
  );
};

export default DashboardEstudos;
