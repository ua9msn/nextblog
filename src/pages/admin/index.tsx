import dynamic from "next/dynamic";
import Head from "next/head";

const MyTemplate = (data: any) => {
    console.log(data);
    return (
        <div>AAAA</div>
    )
}


// Initialize the CMS object
const config = {
    config: {
        backend: {
            name: 'git-gateway',
            branch: 'main'
        },
        media_folder: 'public/img',
        public_folder: 'img',
        collections: [
            {
                name: "pages",
                label: "Pages",
                files: [{
                    label: "Home",
                    name: "home",
                    file: "content/home.md",
                    fields: [
                        {label: "Title", name: "title", widget: "string"},
                        {label: "Publish Date", name: "date", widget: "datetime"},
                        {label: "Body", name: "body", widget: "markdown"},
                        {
                            label: 'Cats', name: "cats", widget: 'list',
                            fields: [
                                {label: "Name", name: "name", widget: "string"},
                                {label: "Description", name: "description", widget: "text"},
                            ]
                        }
                    ]
                }]
            }
        ]
    }

}

const CMS = dynamic(
    () =>
        import('netlify-cms-app').then((CMS) => {
            CMS.init(config);
            CMS.registerPreviewTemplate('caseStudies', MyTemplate);
        }),
    { ssr: false }
);

const Admin = () => (
    <>
        <Head>
            <title>Admin</title>
            <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js" defer />
        </Head>
        <CMS />
    </>
);

export default Admin;