import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { QRCode } from 'react-qrcode-logo';

const Home: NextPage = () => {
  const [url, setUrl] = useState('https://www.dfds.com')
  return (
    <div className={styles.container}>
      <Head>
        <title>Create DFDS QR-Code</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Create a DFDS QR-Code
        </h1>

        <input type="text" style={{ fontSize: '3em', padding: '10px', width: '80vw' }} value={url} onChange={(e) => setUrl(e.target.value)} />
        <QRCode value={url} size={500} ecLevel="H" removeQrCodeBehindLogo quietZone={100} logoWidth={100} logoHeight={34} logoImage="/dfds.svg" />
      </main>


    </div>
  )
}

export default Home
