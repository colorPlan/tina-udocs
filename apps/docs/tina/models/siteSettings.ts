import { Collection } from "tinacms";

const SiteSettings: Collection = {
    label: 'Site Settings',
    name: 'site_settings',
    path: 'content/site_settings',
    format: 'json',
    ui: {
        filename: {
            slugify: () => 'site_settings'
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
                { value: 'fr', label: 'French' }
            ]
        },
        {
            label: 'SKU Product Name',
            name: 'sku_product_name',
            type: 'string',
            required: true,
        },
        {
            label: 'Site Title',
            name: 'site_title',
            type: 'string',
            required: true,
        },
        {
            label: 'Project Code Repository',
            name: 'project_code_repository',
            type: 'string',
            required: true,
        },
        {
            label: 'Meta Links',
            name: 'meta_links',
            type: 'object',
            list: true,
            fields: [
                {
                    label: 'Link',
                    name: 'link',
                    type: 'string',
                    required: true,
                },
                {
                    label: 'Label',
                    name: 'label',
                    type: 'string',
                    required: true,
                }
            ]
                
        }
    ]
}

export default SiteSettings;