import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';
import { SiteMeta } from '../data/SiteMeta';

interface ContainerProps {
  metadata: SiteMeta;
  children?: React.ReactNode;
}

export default function ContainerBlock({ children, metadata }: ContainerProps) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta charSet="UTF-8" />
        <meta name={metadata.description} />
      </Head>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
