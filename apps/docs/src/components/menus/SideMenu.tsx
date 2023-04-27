import { TopicWithSiteDataQuery } from "@tina/__generated__/types";
import { useRouter } from "next/router";
import { Nav, SelectPicker, Sidenav } from "rsuite"
import Link from "next/link";

type Props = {
    codeVersions: TopicWithSiteDataQuery['code_versionsConnection']['edges'];
    tableOfContents: TopicWithSiteDataQuery['table_of_contents'];
}
const SideMenu: React.FC<Props> = ({ codeVersions, tableOfContents}) => {
    const { query: { version, slugs, type }, push, pathname } = useRouter();

    const handleVersionChange = (value: string) => {
        push({
            pathname,
            query: {
                version: value,
                type
            }
        })
    }

    const handleTypeChange = (value: string) => {
        push({
            pathname,
            query: {
                version,
                type: value
            }
        })
    }

    const buildUrl = (canonicalUrl: string) => {
        return `/${version}/${type}${canonicalUrl}`
    }

    const menuItems = tableOfContents.sections.map((item, index) => {
        if (item.sub_sections) {
            return <Nav.Menu title={item.Label} key={item.permalink.id + index}>
                {item.sub_sections.map((subItem, index) => (  
                    <Link href={buildUrl(item.permalink.canonical_url)} legacyBehavior key={item.permalink.id + index}>
                        <Nav.Item href={buildUrl(item.permalink.canonical_url)}>{subItem.Label}</Nav.Item>                
                    </Link>
                ))}
            </Nav.Menu>
        }
        return (
            <Link href={buildUrl(item.permalink.canonical_url)} legacyBehavior key={item.permalink.id}>
                <Nav.Item href={buildUrl(item.permalink.canonical_url)}>
                    {item.Label}
                </Nav.Item>
            </Link>
        )
    })

    return (    
        <div className="flex flex-col">
            <Nav appearance="tabs" justified>
                <Nav.Item eventKey="learn" onSelect={handleTypeChange} active={type === 'learn'} className="text-center">
                    Learn
                </Nav.Item>
                <Nav.Item eventKey="reference" onSelect={handleTypeChange} active={type === 'reference'} className="text-center">
                    Reference
                </Nav.Item>
            </Nav>
            <Sidenav className="flex-grow p-4 max-w-[300px]">
                <SelectPicker className="mx-auto" label="Version" defaultValue={version} searchable={false} cleanable={false}  onChange={handleVersionChange} data={codeVersions.map((codeVersion) => ({ label: codeVersion.node.version_number, value: codeVersion.node.version_number}))}/>
                <Sidenav.Body className="space-y-4">
                    <Nav activeKey="1">
                        {menuItems}
                    </Nav>                        
                </Sidenav.Body>
            </Sidenav>
        </div>
        
    )
}

export default SideMenu;