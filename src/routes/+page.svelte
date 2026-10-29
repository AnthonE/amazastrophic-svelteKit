<script>
	import bgVideo from '$lib/images/front.mp4';
	import amazacorp from '$lib/images/amazacorp.png';

	const site = 'https://www.amazastrophic.com';
	const title = 'Amazastrophic · the company behind Elo Pros';
	const description =
		'Amazastrophic makes multiplayer games and runs Elo Pros, a store for multiplayer games for people and AI agents alike.';
	const year = new Date().getFullYear();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content="Amazastrophic" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="{site}/" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{site}/og.png" />
	<meta property="og:image:alt" content="The Amaza Corp logo" />
	<meta property="og:url" content="{site}/" />
	<meta property="og:site_name" content="Amazastrophic" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{site}/og.png" />
</svelte:head>

<div id="background-video" aria-hidden="true">
	<video autoplay loop muted playsinline src={bgVideo} />
</div>

<div class="panel">
	<section class="intro">
		<img src={amazacorp} alt="Amazastrophic logo" class="logo" />
		<h1>Amazastrophic</h1>
		<p class="tagline">We make multiplayer games and the store they live on.</p>
	</section>

	<section class="product">
		<h2>Elo Pros</h2>
		<p>
			Our store for multiplayer games, for people and AI agents alike. The first game is
			<strong>Gates</strong>, free to play in your browser.
		</p>
		<div class="actions">
			<a class="button" href="https://elopros.com">Visit elopros.com</a>
			<a class="button secondary" href="https://elopros.com/games/gates/play/">Play Gates</a>
		</div>
	</section>

	<section class="about">
		<h2>About us</h2>
		<p>
			Amazastrophic is the company behind Elo Pros. We build the games, the store, and the tools
			developers and agents use to ship their own multiplayer games on it.
		</p>
	</section>

	<hr />

	<section class="legal">
		<h2>For investors</h2>
		<h3>Private Placement Offering &amp; Accredited Investors Only</h3>
		<p>
			Please be advised that the securities offered herein are private placements. They have not
			been registered under the Securities Act of 1933, but are exempt under Rule 506(c) of
			Regulation D.
		</p>
		<p>
			This investment opportunity is limited to accredited investors. As defined by Rule 506(c) of
			Regulation D, accredited investors must meet certain income or net worth criteria. If you're
			unsure about your status, we encourage you to consult with your financial advisor.
		</p>

		<h3 id="risk-disclosure">Risk Disclosure</h3>
		<p>
			Investing in a high-tech startup, such as Amazastrophic, the company behind Elo Pros, carries
			inherent risks. Potential investors need to be aware of these risks and make informed
			decisions. Below, we outline the potential risks associated with investing in Amazastrophic:
		</p>
		<h4>Market and Competition</h4>
		<p>
			The gaming industry is not just highly competitive but also rapidly evolving. With numerous
			established players and new startups entering the scene frequently, Amazastrophic faces the
			challenge of differentiating itself and securing a meaningful market share. While we strive
			for success, there is always a risk of not achieving our growth and market position targets
			due to market dynamics, competitive pressure, or changes in user preferences.
		</p>
		<h4>Technological Complexity</h4>
		<p>
			Our work involves integrating cutting-edge technologies, such as large language model (LLM)
			APIs and blockchain networks, which inherently carry the risk of developmental delays,
			increased costs, or unforeseen challenges. These could impact the timelines and success of
			our projects.
		</p>
		<h4>Financial Risks</h4>
		<p>
			Like any startup, there is a risk that we may not achieve profitability or generate
			sufficient revenue to sustain our operations. Additionally, initial valuations might not
			reflect the actual value of the company, especially in a volatile market. Investors must be
			prepared for the possibility that they may not recoup their initial investment or achieve
			their desired return.
		</p>

		<h3 id="disclaimer">Disclaimer</h3>
		<h4>Forward-Looking Statements</h4>
		<p>
			This website may contain forward-looking statements that reflect our current expectations and
			projections about Amazastrophic's future results, performance, prospects, and opportunities.
			These forward-looking statements are based on information currently available to us and are
			subject to a number of risks, uncertainties, and other factors that could cause our actual
			results, performance, prospects, or opportunities to differ materially from those expressed
			in, or implied by, these forward-looking statements. Actual results may differ significantly
			from those stated or implied in forward-looking statements due to factors such as changes in
			the regulatory environment, fluctuations in the market, and the performance of our products.
			These forward-looking statements are subject to the 'safe harbor' provisions of the Private
			Securities Litigation Reform Act of 1995, which limits potential liabilities related to such
			statements.
		</p>
		<h4>Investment Disclaimer</h4>
		<p>
			The information provided on this website, or any content linked from this website, does not
			constitute investment advice, financial advice, trading advice, or any other sort of advice,
			and you should not treat any of the website's content as such. Amazastrophic does not
			recommend that any cryptocurrency, security, or other investment should be bought, earned,
			sold, or held by you. We strongly suggest conducting your own due diligence or consulting with
			a qualified financial advisor before making any investment decisions.
		</p>
		<h4>Accuracy of Information</h4>
		<p>
			Amazastrophic strives to ensure that the information on this website is updated and correct.
			However, we make no representations or warranties of any kind, express or implied, about the
			completeness, accuracy, reliability, suitability, or availability concerning the website or
			the information, products, services, or related graphics contained on the website for any
			purpose. Any reliance you place on such information is strictly at your own risk.
		</p>
		<h4>Risk Statement</h4>
		<p>
			Investing in digital assets, such as the ones mentioned on this website, is risky and
			speculative. Investors should understand that their capital is at risk and they may
			potentially lose all of their investment. The digital assets' value and performance can be
			highly volatile and could rapidly change. Past performance is not indicative of future
			results.
		</p>
		<h4>Securities Disclosure</h4>
		<p>
			If Amazastrophic ever offers any securities for sale, such offers would be private
			placements, exempt from registration under the Securities Act of 1933 pursuant to Rule 506(c)
			of Regulation D. Such offers would only be made in compliance with applicable state and
			federal securities laws and would be available only to qualified accredited investors. Any
			such offer would be made only through appropriate disclosure documents and only in
			jurisdictions where it is lawfully permitted.
		</p>
		<h4>State Securities and 'Blue Sky' Laws</h4>
		<p>
			Offers and sales of securities by Amazastrophic will only be conducted in compliance with
			state securities or 'Blue Sky' laws to the extent applicable, and investors are advised to
			become aware of and understand these laws before investing.
		</p>
	</section>

	<hr />

	<footer>
		<p>
			Interested in investing? <a href="mailto:cs@amazastrophic.com">Contact us</a> to learn more.
		</p>
		<nav class="socials" aria-label="Elo Pros elsewhere">
			<a href="https://elopros.com">Elo Pros</a>
			<a href="https://x.com/ELOPROS1337" rel="noopener noreferrer">X</a>
			<a href="https://t.me/elopros4life" rel="noopener noreferrer">Telegram</a>
			<a href="https://discord.gg/UYg2D3Yudm" rel="noopener noreferrer">Discord</a>
		</nav>
		<p class="copyright">© {year} Amazastrophic</p>
	</footer>
</div>

<style>
	#background-video {
		position: fixed;
		inset: 0;
		z-index: -1;
		overflow: hidden;
	}

	#background-video video {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	.panel {
		max-width: 640px;
		width: 100%;
		margin: 0 auto;
		padding: 1.5rem;
		box-sizing: border-box;
		background-color: hsla(0, 0%, 12%, 0.92);
		border-radius: 8px;
		color: #eee;
	}

	section {
		margin: 1.5rem 0;
	}

	.intro {
		text-align: center;
	}

	.logo {
		width: 125px;
		transition: filter 0.3s ease-in-out;
	}

	.logo:hover {
		filter: invert(1);
	}

	.tagline {
		font-size: 1.1rem;
		text-align: center;
	}

	.product {
		text-align: center;
		padding: 1.25rem;
		border: 1px solid hsla(0, 0%, 100%, 0.15);
		border-radius: 8px;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		justify-content: center;
		margin-top: 1rem;
	}

	.button {
		display: inline-block;
		padding: 0.6rem 1.2rem;
		border-radius: 6px;
		background: var(--color-theme-1);
		color: #111;
		font-weight: 600;
	}

	.button.secondary {
		background: transparent;
		color: var(--color-theme-1);
		border: 1px solid var(--color-theme-1);
	}

	.button:hover {
		text-decoration: none;
		filter: brightness(1.1);
	}

	hr {
		border: 0;
		border-top: 1px solid hsla(0, 0%, 100%, 0.2);
		margin: 2rem 0;
	}

	.legal p,
	.legal h4 {
		font-size: 0.85rem;
	}

	.legal p {
		color: #bbb;
	}

	footer {
		text-align: center;
	}

	.socials {
		display: flex;
		gap: 1.25rem;
		justify-content: center;
		margin: 1rem 0;
	}

	.copyright {
		font-size: 0.8rem;
		color: #999;
	}
</style>
