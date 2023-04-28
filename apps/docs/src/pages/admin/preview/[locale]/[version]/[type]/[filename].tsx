import DocLayout from "@/components/layouts/DocLayout";
import client from "@tina/__generated__/client";
import { TopicWithSiteDataQuery, TopicWithSiteDataQueryVariables } from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
    data: TopicWithSiteDataQuery | null,
    variables: TopicWithSiteDataQueryVariables | null,
    query: string | null
  }

const DocPage: React.FC<Props> = ({ data, variables, query }) => {

    const { data: pageData } = useTina({
        query: query,
        variables: variables,
        data: data,
    })

    if (!data || !pageData?.topics) return null;

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

export const getServerSideProps = async ({ params }) => {
    const { filename, locale, version, type } = params;

    try {
        const { variables, data, query} = await client.queries.topicWithSiteData({
            relativePath: `${locale}/${version}/${type}/${filename}`,
            siteSettings: `${locale}/site_settings.json`,
            tableOfContents: `${locale}/${version}/${type}/toc.json`
        });

        return {
            props: {
                variables,
                data,
                query,
            },
        }
    } catch (e) {
        return {
            props: {
                variables: null,
                data: null,
                query: null,
            },
        }
    }
}