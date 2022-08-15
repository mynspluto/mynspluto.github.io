import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import ReactMarkdown from "react-markdown";
import content from "../../content/test.md";

const Hi: NextPage = () => {
  const router = useRouter()
  const {pid} = router.query
  console.log('pid', pid)
  console.log('content', content)
  return (
    <>
      hi
      <ReactMarkdown>
      {content}
      </ReactMarkdown>
    </>
  )
}

export default Hi
