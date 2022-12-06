import ContainerBlock from '../components/ContainerBlock';
import { SiteMeta } from '../data/SiteMeta';
import Image from 'next/image';
const meta: SiteMeta = {
  title: 'About Me - Geonhyuk',
  description: 'An aspiring software engineer, based in Seoul, South Korea',
};

export default function About() {
  return (
    <>
      <ContainerBlock metadata={meta}>
        <div>
          <br />
          <h1 className="text-5xl text-center">About Me</h1>
          <br />
          <hr className="border-1 divide-x-8 border-blue-400 drop-shadow-xl" />
          <br />
          <br />
          <div className="flex flex-col justify-center items-center">
            <Image
              className="rounded-full"
              src="/images/profile.jpg"
              height={144}
              width={144}
              alt="Geonhyuk Im"
            />
          </div>
          <br />
          <br />
          <br />
          <section className="md:container md:mx-auto">
            <p>
              Hello. I&#39;m Geonhyuk, call me as Geon (Gun).
              <br />I hold a B.S in Computer Science obtained from Purdue
              University Northwest in 2021.
            </p>
          </section>
        </div>
      </ContainerBlock>
    </>
  );
}
