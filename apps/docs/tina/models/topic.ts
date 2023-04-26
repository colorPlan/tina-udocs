;import { Collection } from "tinacms";

const Topic: Collection = {
    label: 'Documentation Page',
    name: 'topics',
    path: 'content/topics',
    format: 'mdx',
    ui: {
        filename: {
            readonly: true,
            slugify: values => {
                return `${values.language}/${values.code_version?.match(/\/(v\d+.\d+.\d+)\.json$/)?.[1] ?? ''}/${values.type}/${values.title?.toLowerCase().replace(/ /g, '-') ?? ''}`
            }
        },
        router: ({ document }) => {
            return `/admin/preview/${document._sys?.relativePath}`
        }
    },
    fields: [     
        {
            label: 'Title',
            name: 'title',
            type: 'string',
            isTitle: true,
            required: true
        },
        {
            label: 'Description',
            name: 'description',
            type: 'string',
        },
        {
            label: 'Author',
            name: 'author',
            type: 'reference',
            collections: ['authors'],
        },
        {
            label: 'Type',
            name: 'type',
            type: 'string',
            required: true,
            options: [
                { value: 'learn', label: 'Learn' },
                { value: 'refrence', label: 'Reference' },
            ]
        },
        {
            label: 'Language',
            name: 'language',
            type: 'string',
            required: true,
            options: [
                { value: 'en', label: 'English' },
            ]
        },
        {
            label: 'Code Version',
            name: 'code_version',
            type: 'reference',
            collections: ['code_versions'],
        },
        {
            label: 'Draft',
            name: 'draft',
            type: 'boolean',
            required: true,
            description: 'If this is checked the post will not be published',
        },
        {
            label: 'Body',
            name: 'body',
            type: 'rich-text',
            required: true,
            isBody: true,
            
        },
        {
            label: 'Last Updated',
            name: 'last_updated',
            type: 'datetime',
            required: true,
            description: 'The last time this page was updated',
        },
    ],
}

export default Topic;