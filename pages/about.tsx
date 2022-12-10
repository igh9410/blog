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
          <br />
          <h1 className="font-extrabold text-4xl text-teal-700 text-center">
            About Me
          </h1>
          <br />
          <hr className="border-solid border-lime-500 ml-60 mr-60 drop-shadow-2xl" />
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
          <div className="md:container ml-60 mr-60 w-full">
            <p>
              Hello. I&#39;m Geonhyuk, call me as Geon (Gun).
              <br />I hold a B.S in Computer Science obtained from Purdue
              University Northwest in 2021.
            </p>
          </div>
        </div>
      </ContainerBlock>
    </>
  );
}
