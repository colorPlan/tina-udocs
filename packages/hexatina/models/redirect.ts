import { Collection } from "tinacms";

const Redirect: Collection = {
    label: 'Redirects',
    name: 'redirects',
    path: 'content/redirects',
    format: 'json',
    fields: [
        {
            label: 'Source',
            name: 'source',
            type: 'reference',
            collections: ['permalinks'],
            required: true,
        },
        {
            label: 'Redirect To',
            name: 'destination',
            type: 'reference',
            collections: ['permalinks'],
            required: true,
        },
        {
            label: 'Permanent',
            name: 'permanent',
            type: 'boolean',
            required: true,
        }
    ]
}

export default Redirect;