import React, { Fragment } from 'react';

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
          <div className={styles.post}>
            <p>標題 2</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
