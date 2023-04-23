import { Collection } from "tinacms";

const Tooltips: Collection =  {
    label: 'Tooltips',
    name: 'Tooltips',
    path: 'content/tooltips',
    format: 'json',
    fields: [
        {
            label: 'Tooltip',
            name: 'tooltip',
            type: 'string',
            isTitle: true,
            required: true
        },
    ],
}

export default Tooltips;