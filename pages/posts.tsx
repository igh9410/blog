import ContainerBlock from '../components/ContainerBlock';
import { SiteMeta } from '../data/SiteMeta';

const meta: SiteMeta = {
  title: 'My Blog Posts - Geonhyuk Im',
  description: 'I posts my developer project experience and other random stuff',
};

export default function Posts({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (<ContainerBlock metadata={meta}>    
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))})   
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}