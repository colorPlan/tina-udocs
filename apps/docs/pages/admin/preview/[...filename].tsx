import client from "@tina/__generated__/client";
import DocPage from "../../../components/pages/DocPage";

export default DocPage;

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