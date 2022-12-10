import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';
import { GetStaticProps, GetStaticPaths } from 'next';
import { SiteMeta } from '../../data/SiteMeta';
import ContainerBlock from '../../components/ContainerBlock';

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  const meta: SiteMeta = {
    title: postData.title,
    description: 'Blog Post',
  };
  return (
    <ContainerBlock metadata={meta}>
      <br />
      <article>
        <h1 className="text-4xl font-bold text-center text-sky-500">
          {postData.title}
        </h1>
        <br />
        <div className="text-xl font-light text-center ml-auto mr-auto text-black">
          <Date dateString={postData.date} />
        </div>

        <br />
        <div className="prose prose-stone text-justify ml-auto mr-auto">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </article>
    </ContainerBlock>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
