import Release from './Release';
import styles from './Releases.module.scss';

const Releases = (props) => {
	const { data } = props;
	return (
		<>
			<h2>Releases</h2>
			<ul className={styles.releases}>
				{JSON.parse(data).map((release) => (
					<Release data={release} key={release.id} />
				))}
			</ul>
		</>
	);
};

export default Releases;
