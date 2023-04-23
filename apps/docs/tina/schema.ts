import { defineSchema}  from 'tinacms';

import Author from './models/author';
import Redirect from './models/redirect';
import Version from './models/version';
import Permalink from './models/permalink';
import TableOfContent from './models/tableOfContent';
import SiteSettings from './models/siteSettings';
import Topic from './models/topic';

export const schema = defineSchema({
    collections: [
        Author,
        Redirect,
        Version,
        Permalink,
        TableOfContent,
        SiteSettings,
        Topic
    ],
})