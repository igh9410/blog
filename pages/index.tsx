import ContainerBlock from '../components/ContainerBlock';
import { SiteMeta } from '../data/SiteMeta';

const meta: SiteMeta = {
  title: 'Geonhyuk Im - Software Engineer',
  description: 'An aspiring software engineer, based in Seoul, South Korea',
};

export default function Home() {
  return (
    <>
      <ContainerBlock metadata={meta}></ContainerBlock>
    </>
  );
}
