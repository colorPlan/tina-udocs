import { Collection } from "tinacms";

const Author: Collection =  {
    label: 'Authors',
    name: 'authors',
    path: 'content/authors',
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

export default Author;