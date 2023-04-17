import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Popup from "../components/popup";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WTT Healthie Intergration Form</title>
        <meta name="description" content="WTT Healthie Intergration Demo" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <img width={"20%"} height={"20%"} src="https://wethetrillions-public.s3.us-west-1.amazonaws.com/img/logo.png"/>
      <main className={styles.main}>
        <Popup />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
