import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import styles from './styles.module.scss';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className={styles.container}>
        <h2>系務公告</h2>
        <div className={styles.postWrapper}>
          <div className={styles.post}>
            <p>標題 1</p>
          </div>
          <Link className={styles.post} to={`/announcements/12345`}>
            <p>標題 2</p>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
