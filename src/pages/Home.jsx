import React, { useEffect, useState } from "react";

// importing components
import Loader from "../components/Loader";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const result = await fetch(API_URL);
      const data = await result.json();

      setPosts(data);
    } catch (error) {
      console.log("🚀 ~ fetchData ~ error:", error);
      setPosts([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {posts.map((post) => {
            return <Product key={post.id} post={post} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[100vh] font-bold">
          <p>No Posts Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
