import { TopicWithSiteDataQuery, TopicWithSiteDataQueryVariables } from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import DocLayout from "../layouts/DocLayout";


type Props = {
  data: TopicWithSiteDataQuery,
  variables: TopicWithSiteDataQueryVariables,
  query: string
}

const DocPage: React.FC<Props> = ({ data, variables, query }) => {

    const { data: pageData } = useTina({
        query: query,
        variables: variables,
        data: data,
      })

      
      if (!pageData?.topics) return null;

      return (
        <DocLayout siteSettings={data.site_settings} codeVersions={data.code_versionsConnection.edges} tableOfContents={data.table_of_contents}>
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
          </div>
        </DocLayout>
      );
};
export default DocPage;
