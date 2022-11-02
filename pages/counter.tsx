import dynamic from 'next/dynamic'
const RemoteCounter = dynamic(
  () => import("app1/counter"),
  { ssr: false }
)
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Counter</h1>
      <RemoteCounter />
    </div>
  )
}
