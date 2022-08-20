import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Router from 'next/router';
import styles from '../styles/Home.module.css'
import menus from '../../content/menu'
import Menu from '../Components/Menu'
const menus2 = [
  {title: "asd", child: [{title: 1}, {title: 2}, {title: 3}]},
]

const Home: NextPage = () => {
  function 반복된UI(str, row, column) {
    let arr = [];
    for(let i = 0; i < row; i++) {
      arr.push(<div key={`${str}-${i}`}>{i}{str.padEnd(column, '2')}</div>)
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
          {menus.map(menu =>
            <div className={styles.menu} key={menu.title}>
              <div>{menu.title}</div>
              {menu.child?.map(c =>
                <div className={styles.childMenu} key={c.title}>{c.title}</div>
              )}
            </div>
          )}
          
        </div>
      </div>
      <div className={styles.footer}>
        {반복된UI("footer", 1, 200)}
      </div>
    </div>
  )
}

export default Home
