import Head from 'next/head';
import { Navbar } from '../components/Navbar'
import { Banner } from '../components/Banner'
import { Container } from '../components/Container'
import { Post } from '../components/Post';
import { Topic } from '../components/Topic';
import { Button } from '../components/Button';
import { HiFire, HiRewind } from 'react-icons/hi';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container className="grid grid-cols-4 gap-6">
        <Banner
          text="Testing"
          title="Lorem ipsum dolor sit amet"
          linkUrl="/"
          imageUrl="https://w.wallhaven.cc/full/8o/wallhaven-8ogod1.jpg"
          className="col-span-4"
        />
        <div className="md:col-span-3 col-span-4 flex content-center  flex-wrap gap-y-3">
          <div className="flex py-4 flex-row justify-between items-center  w-full">
            <Topic Icon={HiRewind} text="Tópicos" />
            <Button />
          </div>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div>
          <div className="flex py-4 flex-row justify-between items-center  w-full">
            <Topic Icon={HiFire} text="Hot" />
          </div>
        </div>
      </Container>
    </div>
  );
}
