import { Collection } from "tinacms";

const TableOfContent: Collection = {
    label: 'Table of Contents',
    name: 'table_of_contents',
    path: 'content/table_of_contents',
    format: 'json',
    ui: {
        filename: {
            slugify: (values) => `${values.language}/${values.code_version?.match(/\/(v\d+.\d+.\d+)\.json$/)?.[1] ?? ''}/${values.type}/toc`

        }
    },
    fields: [
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
            label: 'Type',
            name: 'type',
            type: 'string',
            options: [
                { value: 'learn', label: 'Learn' },
            ]
        },
        {
            label: 'Sections',
            name: 'sections',
            type: 'object',
            list: true,
            fields: [
                {
                    label: 'label',
                    name: 'Label',
                    type: 'string',
                    required: true,
                },
                {
                    label: 'Permalink',
                    name: 'permalink',
                    type: 'reference',
                    required: true,
                    collections: ['permalinks']
                },
                {
                    label: 'Sub Sections',
                    name: 'sub_sections',
                    type: 'object',
                    list: true,
                    fields: [
                        {
                            label: 'label',
                            name: 'Label',
                            type: 'string',
                            required: true,
                        },
                        {
                            label: 'Permalink',
                            name: 'permalink',
                            type: 'reference',
                            required: true,
                            collections: ['permalinks']
                        },
                        {
                            label: 'Sub Sections',
                            name: 'sub_sections',
                            type: 'object',
                            list: true,
                            fields: [
                                {
                                    label: 'label',
                                    name: 'Label',
                                    type: 'string',
                                    required: true,
                                },
                                {
                                    label: 'Permalink',
                                    name: 'permalink',
                                    type: 'reference',
                                    required: true,
                                    collections: ['permalinks']
                                },
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

export default TableOfContent;