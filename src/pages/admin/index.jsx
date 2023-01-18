import dynamic from "next/dynamic";
import Head from "next/head";


const Loading = () => (
    <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 font-semibold text-xl">Loading...</p>
    </div>
);

// Initialize the CMS object
const config = {
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

const CMS = dynamic(
    () =>
        import('netlify-cms-app').then((cms) => {
            cms.init({config});
        }),
    { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage = () => {
    return <CMS />;
};

export default AdminPage;