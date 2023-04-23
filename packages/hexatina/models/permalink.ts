import { Collection } from "tinacms";

const Redirect: Collection = {
    label: 'Permalinks',
    name: 'permalinks',
    path: 'content/permalinks',
    format: 'json',
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
                    collections: ['doc_pages'],
                    required: true,
                },
                {
                    label: 'Language',
                    name: 'language',
                    type: 'string',
                    required: true,
                    options: [
                        { value: 'en', label: 'English' },
                        { value: 'fr', label: 'French' }
                    ]
                },
            ]
        }
    ]
}

export default Redirect;