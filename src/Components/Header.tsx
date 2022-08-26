import styles from '../styles/Home.module.css'

import React from 'react'
import Head from 'next/head'
export default function Layout({children}) {
  
  return (
    <div className={styles.header}>
      {children}
    </div>
  )
}
