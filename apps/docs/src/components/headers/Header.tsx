import { TopicWithSiteDataQuery } from "@tina/__generated__/types";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
    siteSettings: TopicWithSiteDataQuery['site_settings'];
}
const Header: React.FC<Props> = ({ siteSettings}) => {
    const { query: { version, type } } = useRouter();

    return (
        <div className="bg-black text-white flex items-center justify-between px-8 py-4 gap-2">
            <div className="flex items-center gap-2">
                <Link href={`/${version}/${type}`} className="text-white hover:text-blue-200">
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 97" height={40}><path d="M136.006 52.8c0 4.55-2.53 7.79-7.86 7.79-5.65 0-7.99-3.05-7.99-7.6v-27.8h-11.5V52.6c0 10.85 6.49 17.21 19.48 17.21 12.92 0 19.35-6.49 19.35-17.21V25.2h-11.5v27.6h.02ZM173.558 34.75c-4.61 0-7.79 1.95-10.26 5.52h-.2v-4.55h-10.2v33.25h10.59V50.6c0-4.09 2.34-7.01 5.84-7.01 3.44 0 5.2 2.4 5.2 5.91v19.48h10.59V47.35c0-7.4-4.29-12.6-11.56-12.6ZM201.145 22.54h-10.59v8.58h10.59v-8.58ZM201.145 35.72h-10.59v33.25h10.59V35.72ZM219.797 25.2h-10.33v10.52h-4.42v8.58h4.42v15.91c0 7.14 4.42 9.16 10.59 9.16 2.86 0 4.87-.26 5.78-.52v-7.73c-.39 0-1.43.07-2.34.07-2.27 0-3.7-.65-3.7-3.25V44.3h6.04v-8.58h-6.04V25.2ZM248.38 49.88c-1.04 3.25-1.95 7.66-1.95 7.66h-.13s-1.04-4.42-2.08-7.66l-4.48-14.16h-11.17l9.81 25.59c1.36 3.51 2.01 5.46 2.01 6.88 0 2.27-1.23 3.51-4.35 3.51h-3.64v8.25h6.88c6.69 0 9.87-2.73 12.53-10.52l11.5-33.71h-10.59l-4.34 14.16ZM47.137 17.29l15.3 8.83c.55.31.57 1.17 0 1.48l-18.18 10.5c-.55.32-1.2.3-1.71 0l-18.18-10.5c-.56-.3-.57-1.18 0-1.48l15.29-8.83V0L.617 22.54v45.08l14.97-8.64V41.32c-.01-.63.73-1.08 1.28-.74l18.18 10.5c.55.32.86.89.86 1.48v20.99c.01.63-.73 1.08-1.28.74l-15.3-8.83-14.97 8.64 39.04 22.54 39.04-22.54-14.97-8.64-15.3 8.83c-.54.33-1.3-.1-1.28-.74V52.56c0-.63.35-1.19.86-1.48l18.18-10.5c.54-.33 1.3.09 1.28.74v17.66l14.97 8.64V22.54L47.137 0v17.29Z" fill="currentColor"/></svg>
                </Link>
                <span>-</span>
                <span className="text-xl">{ siteSettings.site_title }</span>
            </div>

            <div>
                <a href={siteSettings.project_code_repository} target="_blank">
                    <svg height="25" width="25" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/></svg>
                </a>
            </div>
        </div>
    )
}

export default Header;