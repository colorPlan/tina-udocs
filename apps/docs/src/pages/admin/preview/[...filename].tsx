import client from "@tina/__generated__/client";
import { TopicWithSiteDataQuery, TopicWithSiteDataQueryVariables } from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";


type Props = {
    data: TopicWithSiteDataQuery,
    variables: TopicWithSiteDataQueryVariables,
    query: string
  }
  
export default ({ data, variables, query}: Props) => {

    const { data: pageData } = useTina({
        query: query,
        variables: variables,
        data: data,
      })


    return (<div>
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
  </div>)
}

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    }
}

export const getStaticProps = async ({ params }) => {
    const { filename } = params;

    const { variables, data, query} = await client.queries.topics({
        relativePath: filename.join('/')
    });
    
    return {
        props: {
            variables,
            data,
            query,
        },
    }
}