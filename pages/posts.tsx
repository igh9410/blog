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
      <div className="w-full">
        <h1 className="font-extrabold text-4xl text-teal-700 text-center">
          Blog Posts
        </h1>
        <br />
        <br />
        <hr className="border-solid border-lime-500 ml-60 mr-60 drop-shadow-2xl" />
        <br />
        <br />
        <ul className="list-none list-inside">
          {allPostsData.map(({ id, date, title }) => (
            <li className="list-item py-4" key={id}>
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <div className="space-y-3 xl:col-span-3">
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link
                      href={`/posts/${id}`}
                      className="font-bold text-blue-700 text-center"
                    >
                      {title}
                    </Link>
                  </h3>
                  <p className="prose max-w-none text-black text-jusitify">
                    <Date dateString={date} />
                  </p>
                  <br />
                </div>
              </article>
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
