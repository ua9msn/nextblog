import dynamic from 'next/dynamic';
import Head from 'next/head';

const Loading = () => (
	<div className="min-h-screen flex items-center justify-center">
		<p className="text-gray-500 font-semibold text-xl">Loading...</p>
	</div>
);

const MyTemplate = (data) => {
	console.log(data);
	return <div>AAAA</div>;
};

// Initialize the CMS object
const config = {
	backend: {
		name: 'git-gateway',
		branch: 'main',
	},
	media_folder: 'public/img',
	public_folder: 'img',
	collections: [
		{
			name: 'pages',
			label: 'Pages',
			folder: 'content/blog',
			create: true,
			files: [
				{
					label: 'Home',
					name: 'home',
					file: 'content/home.md',
					fields: [
						{ label: 'Title', name: 'title', widget: 'string', default: 'asdf' }
					],
				},
			],
		},
	],
};

const CMS = dynamic(
	() =>
		import('netlify-cms-app').then((cms) => {
			cms.init({ config });
			cms.registerPreviewTemplate('my-template', MyTemplate)
		}),
	{ ssr: false, loading: Loading }
);

const AdminPage = () => {
	return <CMS />;
};

export default AdminPage;
