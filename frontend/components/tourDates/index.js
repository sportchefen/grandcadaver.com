const TourDates = () => {
	return (
		<>
			<script charSet="utf-8" src="https://widget.bandsintown.com/main.min.js"></script>
			<a
				className="bit-widget-initializer"
				data-artist-name="Grand Cadaver"
				data-display-past-dates="false"
				data-text-color="#ffffff"
				data-link-color="#990000"
				data-background-color="transparent"
				data-display-details="false"
				data-popup-background-color="#ffffff"
				data-link-text-color="#FFFFFF"
				data-separator-color="#CBCBCB"
				data-language="en"
				data-font="bodoni-urw"
				data-display-local-dates="false"
				data-auto-style="false"
				data-display-lineup="false"
				data-display-play-my-city="false"
				data-display-limit="15"
				data-display-start-time="false"
			></a>
		</>
	);
};

export default TourDates;
