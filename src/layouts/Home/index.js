import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Header from '../../components/Header';

import styles from './styles.module.scss';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    let response = await axios.get(
      'https://dtd.ntue.edu.tw/wp-json/wp/v2/posts?per_page=5',
    );
    let data = response.data;
    setPosts(data);
  };

  return (
    <Fragment>
      <Header />
      <div className={styles.container}>
        <h2>系務公告</h2>
        <div className={styles.postWrapper}>
          {posts.map((post) => (
            <Link
              className={styles.post}
              to={`/announcements/${post?.id}`}
              key={post?.id}
            >
              <p>{post?.title?.rendered}</p>
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
