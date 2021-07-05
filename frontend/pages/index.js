import Releases from '../components/releases';
import TourDates from '../components/tourDates';

const Index = (props) => {
	const { releases, error } = props;

	if (error) {
		return <div>An error occured: {error.message}</div>;
	}

	return (
		<div>
			<figure>
				<img src="/images/band_lg.jpg" />
			</figure>

			<TourDates />
			<Releases data={releases} />
			<nav>
				<img className="logo" src="/images/logo-white.png" />
			</nav>
		</div>
	);
};

export async function getServerSideProps(ctx) {
	try {
		// Parses the JSON returned by a network request
		const parseJSON = (resp) => (resp.json ? resp.json() : resp);
		// Checks if a network request came back fine, and throws an error if not
		const checkStatus = (resp) => {
			if (resp.status >= 200 && resp.status < 300) {
				return resp;
			}

			return parseJSON(resp.body).then((resp) => {
				throw resp;
			});
		};

		const headers = {
			'Content-Type': 'application/json',
		};

		const releases = await fetch('http://localhost:1337/releases', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				return JSON.stringify(data);
			});

		return { props: { releases } };
	} catch (error) {
		return { error };
	}
}

export default Index;
