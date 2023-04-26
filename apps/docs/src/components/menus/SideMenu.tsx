import { TopicWithSiteDataQuery } from "@tina/__generated__/types";
import { useRouter } from "next/router";
import { Nav, Navbar, SelectPicker, Sidenav, Toggle } from "rsuite"
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
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
        return `/${version}/${type}/${canonicalUrl}`
    }

    const menuItems = tableOfContents.sections.map((item) => {
        if (item.sub_sections) {
            return <Nav.Menu title={item.Label} icon={<GearCircleIcon/>}>
                {item.sub_sections.map((subItem) => (  
                    <Link href={buildUrl(item.permalink.canonical_url)} legacyBehavior>
                        <Nav.Item href={buildUrl(item.permalink.canonical_url)}>{subItem.Label}</Nav.Item>                
                    </Link>
                ))}
            </Nav.Menu>
        }
        return (
            <Link href={buildUrl(item.permalink.canonical_url)} legacyBehavior>
                <Nav.Item href={buildUrl(item.permalink.canonical_url)}>
                    {item.Label}
                </Nav.Item>
            </Link>
        )
    })

    return (    
        <div>
             <Nav appearance="tabs" justified>
                <Nav.Item eventKey="learn" onSelect={handleTypeChange} active={type === 'learn'} className="text-center">
                    Learn
                </Nav.Item>
                <Nav.Item eventKey="reference" onSelect={handleTypeChange} active={type === 'reference'} className="text-center">
                    Reference
                </Nav.Item>
            </Nav>
            <Sidenav className="p-4 h-full max-w-[300px]">
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