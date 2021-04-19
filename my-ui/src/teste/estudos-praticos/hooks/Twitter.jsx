import React, { useEffect } from "react";

const Twitter = (props) => {
  const { loading } = props;
  useEffect(() => {
    const { posts, loading } = props;
    console.log("Ciclo post", posts);
    console.log("Ciclo loading", loading);
  }, []);

  useEffect(() => {
    console.log("componnteDidupdate", loading);
  }, [loading]);

  useEffect(() => {
    return () => {
      console.log("removido");
    };
  }, []);
  //   handleTweet = () => {};
  // const { posts } = props;
  return <div>teste</div>;
};

export default Twitter;
