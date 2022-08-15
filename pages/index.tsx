import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Router from 'next/router';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  function 반복된UI(str, row, column) {
    let arr = [];
    for(let i = 0; i < row; i++) {
      arr.push(<div>{i}{str.padEnd(column, '2')}</div>)
    }
    return arr
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {반복된UI("header", 3, 200)}
      </div>
      <div className={styles.middle}>
        <div className={styles.content}>
          {반복된UI("content", 50, 200)}
        </div>
        <div className={styles.sideMenu}>
          <div onClick={()=>Router.push('/Hi/1')}>hi</div>
        </div>
      </div>
      <div className={styles.footer}>
        {반복된UI("footer", 1, 200)}
      </div>
    </div>
  )
}

export default Home
