import dynamic from 'next/dynamic';
import config from '../../cms/config';
import Preview from '../../components/Preview';
import Head from 'next/head';

const Loading = () => (
	<div className="min-h-screen flex items-center justify-center">
		<p className="text-gray-500 font-semibold text-xl">Loading...</p>
	</div>
);

const CMS = dynamic(
	() =>
		import('netlify-cms-app').then((CMS) => {
			CMS.init({ config });
			CMS.registerPreviewTemplate('landingPages', Preview);
		}),
	{ ssr: false, loading: Loading }
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

Admin.layout = 'frame';
export default Admin;
