import ContainerBlock from '../components/ContainerBlock';
import { SiteMeta } from '../data/SiteMeta';

const meta: SiteMeta = {
  title: 'My Projects - Geonhyuk Im',
  description: 'An aspiring software engineer, based in Seoul, South Korea',
};

export default function Projects() {
  return (
    <>
      <ContainerBlock metadata={meta}></ContainerBlock>
    </>
  );
}
