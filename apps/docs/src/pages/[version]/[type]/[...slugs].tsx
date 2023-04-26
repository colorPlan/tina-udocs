import client from "@tina/__generated__/client";
import DocPage from "../../../components/pages/DocPage";

export default DocPage;

export const getStaticPaths = async ({ locales }) => {
    const permalinksListData = await client.queries.permalinksConnection();
    
    const paths = permalinksListData.data.permalinksConnection.edges.flatMap((permalink) => {
        return permalink.node.pages.map(({ page }) => ({
            params: {
                version: page.code_version.version_number,
                type: page.type,
                slugs: permalink.node.canonical_url.split('/').filter(Boolean)
            },
            locale: page.language
        }))
    });

    return {
        paths,
        fallback: false,
    }
}


export const getStaticProps = async ({ params, locale }) => {
    const { version, type, slugs } = params;
    const relativePath = `${slugs.join('/')}.json`

    try {
        const permalinkListData = await client.queries.permalinks({
            relativePath
        });
    
        const permalinkPage = permalinkListData.data.permalinks.pages.find(({ page }) => { 
            return page.language === locale && page.code_version.version_number === version && page.type === type
        });
    
        const { variables, query, data } = await client.queries.topicWithSiteData({
            relativePath: permalinkPage.page.id.replace('content/topics', ''),
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
    } catch (e) {
        return {
            redirect: {
                destination: '/404',
            }
        }
    }
}