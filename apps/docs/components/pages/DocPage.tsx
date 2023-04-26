import Head from "next/head";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const DocPage = ({ data, variables, query }) => {

    const { data: pageData } = useTina({
        query: query,
        variables: variables,
        data: data,
      })
      if (!pageData?.topics) return null;

      return (
        <>
          <div>
            <div
              style={{
                textAlign: 'center',
              }}
            >
              <h1 className="text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {pageData?.topics.title}
              </h1>
              <TinaMarkdown content={pageData?.topics.body}></TinaMarkdown>
            </div>
            <div className="bg-green-100 text-center">
              Lost and looking for a place to start?
              <a
                href="https://tina.io/guides/tina-cloud/getting-started/overview/"
                className="text-blue-500 underline"
              >
                {' '}
                Check out this guide
              </a>{' '}
              to see how add TinaCMS to an existing Next.js site.
            </div>
          </div>
        </>
      );
};
export default DocPage;
