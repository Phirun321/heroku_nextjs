import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <h2 style={{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)'
        }}>This is project involves face book service!
      </h2>
    </div>
  )
}
