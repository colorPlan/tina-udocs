import { Collection } from "tinacms";

const Version: Collection = {
    label: 'Code Version',
    name: 'code_versions',
    path: 'content/code_versions',
    format: 'json',
    ui: {
        filename: {
            slugify: (values) => values.version_number ?? ''
        }
    },
    fields: [
        {
            label: 'Version Number',
            name: 'version_number',
            type: 'string',
            required: true,
            isTitle: true,
        },
        {
            label: 'Release Date',
            name: 'release_date',
            type: 'datetime',
            required: true,
        },
        {
            label: 'Published',
            name: 'published',
            type: 'boolean',
            required: true,
        }
    ]
}

export default Version;