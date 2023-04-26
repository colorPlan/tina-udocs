import { Collection } from "tinacms";

const Redirect: Collection = {
    label: 'Permalinks',
    name: 'permalinks',
    path: 'content/permalinks',
    format: 'json',
    ui: {
        filename: {
            readonly: true,
            slugify: values => {
                return values.canonical_url
            }
        },
    },
    fields: [
        {
            label: 'Canonical URL',
            name: 'canonical_url',
            type: 'string',
            required: true,
            isTitle: true
        },
        {
            label: 'Pages',
            name: 'pages',
            type: 'object',
            list: true,
            fields: [
                {
                    label: 'Page',
                    name: 'page',
                    type: 'reference',
                    collections: ['topics'],
                    required: true,
                },
            ]
        }
    ]
}

export default Redirect;