import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Header from '../../components/Header';

// import styles from './styles.module.scss';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    let url =
      'https://dtd.ntue.edu.tw/wp-json/wp/v2/posts?categories=31&_fields=id, title, category&per_page=5';
    // let url = 'https://dtd.ntue.edu.tw/wp-json/dtd/v1/announcements';
    let response = await axios.get(url);
    let data = response.data;
    setPosts(data);
  };

  return (
    <Fragment>
      <Header />
      <div className="px-10 py-10 pt-5 xl:px-64">
        <h2 className="text-xl">系務公告</h2>
        <div className="flex-col mt-5 space-y-dtd-spacing">
          {posts.map((post) => (
            <Link
              className="px-dtd-padding py-7 bg-white flex rounded-xl transition duration-150 shadow-lg hover:shadow-xl"
              to={`/announcements/${post?.id}`}
              key={post?.id}
            >
              <p className="text-dtd-general-text-color hover:text-dtd-primary duration-150">
                {post?.title?.rendered}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

// return (
//   <Fragment>
//     <Header />
//     <div className={styles.container}>
//       <h2>系務公告</h2>
//       <div className={styles.postWrapper}>
//         {posts.map((post) => (
//           <Link
//             className={styles.post}
//             to={`/announcements/${post?.id}`}
//             key={post?.id}
//           >
//             <p>{post?.title?.rendered}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   </Fragment>
// );

export default Home;
