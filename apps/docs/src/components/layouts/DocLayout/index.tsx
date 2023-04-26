import Header from "@/components/headers/Header";
import SideMenu from "@/components/menus/SideMenu";
import { TopicWithSiteDataQuery } from "@tina/__generated__/types";
import { useRouter } from "next/router";
import { SelectPicker } from 'rsuite';

type Props = {
    siteSettings: TopicWithSiteDataQuery['site_settings'];
    tableOfContents: TopicWithSiteDataQuery['table_of_contents']
    codeVersions: TopicWithSiteDataQuery['code_versionsConnection']['edges'];
    children: React.ReactNode | React.ReactNode[];
}
const DocLayout: React.FC<Props> = ({ children, siteSettings, tableOfContents, codeVersions }) => {
    return (
        <div className="h-screen w-screen bg-gray-700 text-white flex flex-col rs-theme-dark">
            <Header siteSettings={siteSettings}/>
            <div className="flex-grow flex"> 
                <SideMenu codeVersions={codeVersions} tableOfContents={tableOfContents}/>
                {children}
            </div>
        </div>
    )
}

export default DocLayout;