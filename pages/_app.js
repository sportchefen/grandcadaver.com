import Head from 'next/head';
import '../styles/globals.scss';

const ld = {
	'@context': 'https://schema.org',
	'@id': 'https://musicbrainz.org/artist/54c4e328-0952-4a77-8421-f3d5f00e41d5',
	'@type': 'MusicGroup',
	name: 'Grand Cadaver',
	url: 'https://grandcadaver.com',
	logo: 'https://grandcadaver.com/logo.png',
	sameAs: [
		'https://www.facebook.com/grandcadaver',
		'https://www.twitter.com/grandcadaver',
		'https://www.instagram.com/grandcadaver',
		'https://www.bandsintown.com/a/15490921-grand-cadaver',
		'https://www.grandcadaver.com/',
	],
	genre: 'Death Metal',
	member: [
		{
			'@type': 'OrganizationRole',
			member: {
				'@type': 'Person',
				name: 'Mikael Stanne',
			},
			startDate: '2020',
			roleName: ['lead vocals'],
		},
		{
			'@type': 'OrganizationRole',
			member: {
				'@type': 'Person',
				name: 'Stefan Lagergren',
			},
			startDate: '2020',
			roleName: ['guitar'],
		},
		{
			'@type': 'OrganizationRole',
			member: {
				'@type': 'Person',
				name: 'Alex Stjernfeldt',
			},
			startDate: '2020',
			roleName: ['guitar'],
		},
		{
			'@type': 'OrganizationRole',
			member: {
				'@type': 'Person',
				name: 'Daniel Liljekvist',
			},
			startDate: '2020',
			roleName: ['drums'],
		},
		{
			'@type': 'OrganizationRole',
			member: {
				'@type': 'Person',
				name: 'Christian Jansson',
			},
			startDate: '2020',
			roleName: ['bass'],
		},
	],
	foundingDate: '2020',
};

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>Grand Cadaver – Death Metal from Sweden - official site</title>
				<meta name="title" content="Grand Cadaver – Death Metal from Sweden - official site" />
				<meta
					name="description"
					content="Grand Cadaver, for us, is a way to return to the rehearsal room, beer drinking, no holds barred Death Metal we grew up on."
				/>

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://grandcadaver.com/" />
				<meta property="og:title" content="Grand Cadaver – Death Metal from Sweden - official site" />
				<meta
					property="og:description"
					content="Grand Cadaver, for us, is a way to return to the rehearsal room, beer drinking, no holds barred Death Metal we grew up on."
				/>
				<meta property="og:image" content="https://grandcadaver.com/assets/fb_share.png" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://grandcadaver.com/" />
				<meta property="twitter:title" content="Grand Cadaver – Death Metal from Sweden - official site" />
				<meta
					property="twitter:description"
					content="Grand Cadaver, for us, is a way to return to the rehearsal room, beer drinking, no holds barred Death Metal we grew up on."
				/>
				<meta property="twitter:image" content="https://grandcadaver.com/assets/fb_share.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
				<link rel="manifest" href="/assets/site.webmanifest" />
				<link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#5bbad5" />
				<link rel="shortcut icon" href="/assets/favicon.ico" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="msapplication-config" content="/assets/browserconfig.xml" />
				<meta name="theme-color" content="#ffffff" />

				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
