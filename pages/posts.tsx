import Link from 'next/link';
import ContainerBlock from '../components/ContainerBlock';
import { SiteMeta } from '../data/SiteMeta';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/Date';
import { GetStaticProps } from 'next';

const meta: SiteMeta = {
  title: 'My Blog Posts - Geonhyuk Im',
  description:
    'I posts my developer project experiences and other random stuff',
};

export default function Posts({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <ContainerBlock metadata={meta}>
      <br />
      <br />
      <div>
        <h1 className="text-5xl text-center">Blog Posts</h1>
        <br />
        <ul className="list-none list-inside">
          {allPostsData.map(({ id, date, title }) => (
            <li className="list-item indent-8" key={id}>
              <Link
                href={`/posts/${id}`}
                className="font-bold text-sky-500 text-center"
              >
                {title}
              </Link>
              <br />
              <p className="font-light text-black text-jusitify">
                <Date dateString={date} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </ContainerBlock>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
