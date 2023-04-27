import DocPage from "@/components/pages/DocPage";
import client from "@tina/__generated__/client";

export default DocPage

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    }
}

export const getStaticProps = async ({ params }) => {
    const { filename, locale, version, type } = params;

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
}