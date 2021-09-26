import * as React from "react"
import Layout from '@components/Layout'
import { Link } from "gatsby"
import Card from '@components/Card'

const IndexPage = () => {
  return (
    <Layout pageTitle="トップ">
      <title>トップページ</title>
      <div className="grid place-items-center">
        <Card title={'旅をはじめよう'}>
          <div className="search-answer">
            <Link className="btn btn-wide" to="/search/1">カテゴリから探す</Link>
          </div>
          <div className="search-answer">
            <Link className="btn btn-wide" to="/search/1">現在地から探す</Link>
          </div>
          <div className="search-answer">
            <Link className="btn btn-wide" to="/search/1">観光地から探す</Link>
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default IndexPage
