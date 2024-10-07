import React from 'react';
import Head from 'next/head';
import styles from './coming-soon.module.scss';

const ComingSoonPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Coming Soon</h1>
        <p className={styles.description}>
          We&apos;re working hard to bring you an amazing experience.
        </p>
      </main>
    </div>
  );
};

export default ComingSoonPage;
