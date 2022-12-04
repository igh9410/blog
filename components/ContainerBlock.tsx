import Container from '@mui/material/Container';
import Head from 'next/head';
import Navbar from './Navbar';

export default function ContainerBlock() {
  return (
    <>
      <Head>
        <title>Geonhyuk, Software Engineer</title>
        <meta name="description" content="My personal website" />
      </Head>
      <Container maxWidth="lg">
        <Navbar />
      </Container>
    </>
  );
}
