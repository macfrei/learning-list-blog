import Head from 'next/head'
import Header from '../components/Header/Header'
import Link from 'next/link'
import AboutUsTeaser from '../components/AboutUsTeaser/AboutUsTeaser'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Header title="About" />
      <Link href="/">Home</Link>

      <AboutUsTeaser />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam
        adipiscing vitae proin sagittis nisl rhoncus mattis. Leo vel fringilla
        est ullamcorper eget nulla facilisi etiam dignissim. Quis commodo odio
        aenean sed adipiscing diam donec adipiscing tristique. Orci sagittis eu
        volutpat odio facilisis. Convallis a cras semper auctor neque vitae
        tempus quam pellentesque. Fringilla ut morbi tincidunt augue interdum.
        Diam donec adipiscing tristique risus. Suscipit adipiscing bibendum est
        ultricies integer quis auctor elit sed. Commodo quis imperdiet massa
        tincidunt nunc pulvinar. Fames ac turpis egestas maecenas pharetra
        convallis posuere. Ipsum a arcu cursus vitae congue. Nec dui nunc mattis
        enim ut tellus elementum sagittis.
      </p>
      <p>
        Cursus risus at ultrices mi tempus imperdiet. Natoque penatibus et
        magnis dis parturient montes. Feugiat scelerisque varius morbi enim.
        Pellentesque sit amet porttitor eget dolor morbi non arcu. Mattis
        pellentesque id nibh tortor id aliquet lectus proin. Eu feugiat pretium
        nibh ipsum consequat nisl. Mus mauris vitae ultricies leo integer
        malesuada. Non arcu risus quis varius quam quisque id diam vel. Aliquam
        ultrices sagittis orci a scelerisque purus semper eget duis. Leo a diam
        sollicitudin tempor id eu nisl nunc mi. Erat velit scelerisque in dictum
        non consectetur a. Molestie at elementum eu facilisis sed. At lectus
        urna duis convallis convallis tellus. A condimentum vitae sapien
        pellentesque habitant morbi. Mauris commodo quis imperdiet massa
        tincidunt nunc pulvinar. Ipsum faucibus vitae aliquet nec ullamcorper.
        Nunc sed augue lacus viverra vitae congue eu. Fames ac turpis egestas
        maecenas.
      </p>
    </>
  )
}
