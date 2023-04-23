import { Collection } from "tinacms";

const Custom: Collection =  {
    label: 'Custom',
    name: 'custom',
    path: 'content/custom',
    format: 'json',
    fields: [
        {
            label: 'Full Name',
            name: 'full_name',
            type: 'string',
            isTitle: true,
            required: true
        },
        {
            label: 'Github Handle',
            name: 'github',
            type: 'string',
        }
    ],
}


export default Custom;