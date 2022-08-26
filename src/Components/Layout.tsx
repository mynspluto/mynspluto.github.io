import type { NextComponentType } from 'next'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import menus from '../../content/menu'
import React from 'react'
import Header from './Header'
import Head from 'next/head'
export default function Layout({children}) {
  const router = useRouter()
  function 반복된UI(str, row, column) {
    let arr = [];
    for(let i = 0; i < row; i++) {
      arr.push(<div key={`${str}-${i}`}>{i}{str.padEnd(column, '2')}</div>)
    }
    return arr
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>hi head</title>
      </Head>
      <Header>
        {반복된UI("header", 2, 200)}
      </Header>
      
      <div className={styles.middle}>
        <div className={styles.content}>
          {children}
        </div>
        <div className={styles.sideMenu}>
          {menus.map(menu =>
            <div className={styles.menu} key={menu.title}>
              <div>{menu.title}</div>
              {menu.child?.map(c =>
                <div onClick={()=>{router.push(`posts/${c.title}`)}}className={styles.childMenu} key={c.title}>{c.title}</div>
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
