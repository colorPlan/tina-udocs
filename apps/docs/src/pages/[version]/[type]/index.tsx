import DocLayout from "@/components/layouts/DocLayout"
import client from "@tina/__generated__/client"
import { TopicWithSiteDataQuery, TopicWithSiteDataQueryVariables } from "@tina/__generated__/types"


type Props = {
    data: TopicWithSiteDataQuery,
    variables: TopicWithSiteDataQueryVariables,
    query: string
}

  
const Home: React.FC<Props> = ({ data }) => {
    return <DocLayout siteSettings={data.site_settings} codeVersions={data.code_versionsConnection.edges} tableOfContents={data.table_of_contents}>
        Welcome to Hexadocs for {data.site_settings.site_title}
    </DocLayout>
}

export default Home

export const getStaticPaths = async ({ locales }) => {
    const codeVersionsListData = await client.queries.code_versionsConnection();
    
    const paths = codeVersionsListData.data.code_versionsConnection.edges.flatMap((codeVersion) => {
        return [
            {
                params: {
                    version: codeVersion.node.version_number,
                    type: 'learn'
                }
            }
        ]
    })

    return {
        paths,
        fallback: true,
    }
}


export const getStaticProps = async ({ params, locale }) => {
    const { version, type } = params;

    const { variables, query, data } = await client.queries.siteData({
        siteSettings: `${locale}/site_settings.json`,
        tableOfContents: `${locale}/${version}/${type}/toc.json`
    })
        
    return {
        props: {
            variables,
            data,
            query,
        },
    }
}