import styles from './header.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <main className={styles.main}>
       <Image
        fill
        alt='ITX Logo'
        src="/assets/full-logo.svg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </main>
  )
}
