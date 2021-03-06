import Layout from "../components/layout"
import Link from "next/link"
import styles from "../styles/index.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <p>Home Page</p>

        <Link href="/page-2">
          <a>Link to Page 2</a>
        </Link>
      </div>
    </Layout>
  )
}
