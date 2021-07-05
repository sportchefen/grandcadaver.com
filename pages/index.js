import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
	const [h, setH] = useState(null);

	const appHeight = () => {
		const wh = `${window.innerHeight}px`;
		if (!h) {
			const doc = document.documentElement;
			doc.style.setProperty('--app-height', wh);
			setH(wh);
		}
	};
	console.log({ h });

	useEffect(() => {
		appHeight();
		//window.addEventListener('resize', appHeight);
	}, []);

	return (
		<div className="container">
			<div className="top">
				<div className="topContent">
					<div className="logoTop">
						<Image src="/assets/logo-black-original.png" layout="responsive" width="400px" height="227px" />
					</div>
					<div className="mcImageObject">
						<Image src="/assets/zombie-original.png" layout="responsive" width="800px" height="515px" />
					</div>

					<h1 className="preamble">Death Metal from Sweden</h1>
				</div>
			</div>
			<div className="grid">
				<div className="lg-row">
					<section className="social">
						<h2>Social</h2>
						<div className="content">
							<a target="_blank" href="https://www.facebook.com/grandcadaver">
								<i className="icon-facebook-squared" />
							</a>
							<a target="_blank" href="https://www.instagram.com/grandcadaver">
								<i className="icon-instagram" />
							</a>
							<a target="_blank" href="https://www.twitter.com/grandcadaver">
								<i className="icon-twitter-squared" />
							</a>
							<a target="_blank" href="https://grandcadaver.bandcamp.com">
								<i className="icon-bandcamp" />
							</a>
							<a target="_blank" href="https://www.bandsintown.com/a/15490921-grand-cadaver">
								<i className="icon-icon-bandsintown" />
							</a>
						</div>
					</section>
					<section className="links">
						<h2>Buy MADNESS COMES vinyl</h2>
						<div className="content">
							<a
								target="_blank"
								href="https://majesticmountainrecords.bigcartel.com/products?utf8=%E2%9C%93&search=grand+cadaver"
							>
								Majestic Mountain web store
							</a>
							<a target="_blank" href="http://grandcadaver.bandcamp.com">
								Grand Cadaver Bandcamp
							</a>
							<a
								target="_blank"
								href="https://soundpollution.se/sv/shop/results,1-24?keyword=grand+cadaver&limitstart=0&option=com_virtuemart&view=category&Itemid=614"
							>
								Sound Pollution store
							</a>
						</div>
					</section>
				</div>
				<div className="lg-row">
					<section className="covers column">
						<h2>Stream GRAND CADAVER</h2>
						<div className="content row">
							<div className="stream">
								<div className="cover">
									<Image
										src="/assets/fotu-original.png"
										layout="responsive"
										width={512}
										height={512}
									/>
								</div>
								<a
									target="_blank"
									href="https://open.spotify.com/track/4TzjJb0Ssqb3jaDtSBSoQ6?si=YX_ig7j6QKCQA1kQfYIaWg"
								>
									<i className="icon-spotify"></i>
								</a>
								<a
									target="_blank"
									href="https://music.apple.com/album/fields-of-the-undying-single/1537112033?l=en"
								>
									<i className="icon-apple"></i>
								</a>
							</div>

							<div className="stream">
								<div className="cover">
									<Image
										src="/assets/bfs-original.png"
										layout="responsive"
										width={512}
										height={512}
									/>
								</div>
								<a
									target="_blank"
									href="https://open.spotify.com/track/3q5yYBSoTn2YxgtBcCAqrG?si=ucvO10c3RBik1ASwTk44vg"
								>
									<i className="icon-spotify"></i>
								</a>
								<a
									target="_blank"
									href="https://music.apple.com/album/blood-filled-skies-single/1543731756?l=en"
								>
									<i className="icon-apple"></i>
								</a>
							</div>
							<div className="stream">
								<div className="cover">
									<Image src="/assets/mc-original.png" layout="responsive" width={512} height={512} />
								</div>
								<a
									target="_blank"
									href="https://open.spotify.com/album/703vG58ZN7BlsgeKXs1WJ2?si=yTV8rtMvQT-XarQ_MzIi_Q"
								>
									<i className="icon-spotify"></i>
								</a>
								<a
									target="_blank"
									href="https://music.apple.com/album/madness-comes-ep/1535593635?l=en"
								>
									<i className="icon-apple"></i>
								</a>
							</div>
						</div>
						<div className="live column">
							<h2>GRAND CADAVER live</h2>
							<div className="content">
								<script charSet="utf-8" src="https://widget.bandsintown.com/main.min.js"></script>
								<a
									className="bit-widget-initializer"
									data-artist-name="Grand Cadaver"
									data-display-past-dates="false"
									data-text-color="#ffffff"
									data-link-color="#E4695D"
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
								>
									<span />
								</a>
							</div>
						</div>
					</section>
					<div className="contact column">
						<section className="bandImg">
							<div className="content">
								<Image
									src="/assets/bandbg-original.jpg"
									layout="responsive"
									width="1280px"
									height="853px"
								/>
							</div>
						</section>
						<section className="contact">
							<h2>Contact GRAND CADAVER</h2>
							<div className="content">
								<a target="_blank" href="mailto:majesticmountainrecords@gmail.com">
									majesticmountainrecords@gmail.com
								</a>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
