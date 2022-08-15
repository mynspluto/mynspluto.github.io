import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const Hi: NextPage = () => {
  const router = useRouter()
  const {id} = router.query
  console.log('id', id)
  return (
    <div className={styles.container}>
      hi
    </div>
  )
}

export default Hi
