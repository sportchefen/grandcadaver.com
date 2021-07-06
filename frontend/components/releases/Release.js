const Release = (props) => {
	const { data } = props;
	return (
		<li>
			<img src={`http://192.168.50.100:1337${data.cover.formats.small.url}`} />
		</li>
	);
};

export default Release;
