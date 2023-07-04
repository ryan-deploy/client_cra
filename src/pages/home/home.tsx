import { useEffect } from "react";
import { ReadPosts } from "../../api/post";

const Home = () => {
  useEffect(() => {
    ReadPosts().then((res) => {
      console.log(res);
    });
  }, []);

  return <div className="home">home</div>;
};

export default Home;
