const Release = (props) => {
	const { data } = props;
	return (
		<li>
			<img src={`http://localhost:1337${data.cover.formats.small.url}`} />
		</li>
	);
};

export default Release;
