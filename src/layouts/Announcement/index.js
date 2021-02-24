import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './styles.module.scss';

const Announcement = () => {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <h1>單一的文章內容, id : {id}</h1>
    </div>
  );
};

export default Announcement;
