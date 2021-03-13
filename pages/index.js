import Head from 'next/head';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Learning List Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Learning List Blog" />
      <Header
        title="This is a blog entry"
        level="2"
        date="20-3-21"
        subtitle="awesome"
      />
      <Header
        title="This is a teaser headline"
        level="3"
        date="20-3-21"
        subtitle="awesome"
      />
    </div>
  );
}
