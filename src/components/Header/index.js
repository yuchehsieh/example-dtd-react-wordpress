import React from 'react';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>數位系 DTD</h1>
    </div>
  );
};

// return (
//   <div className="px-10 py-5 xl:px-64">
//     <h1 className="text-2xl font-bold">數位系 DTD</h1>
//   </div>
// );

// return (
//   <div className={styles.container}>
//     <h1>數位系 DTD</h1>
//   </div>
// );

export default Header;
