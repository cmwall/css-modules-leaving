import Layout from "../components/layout"
import Link from "next/link"
import styles from "../styles/page-2.module.css"

export default function Page2() {
  return (
    <Layout>
      <div className={styles.container}>
        <p>Page 2</p>

        <Link href="/">
          <a>Link to Home</a>
        </Link>
      </div>
    </Layout>
  )
}
