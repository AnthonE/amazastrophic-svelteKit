<script>
	import bgVideo from '#lib/images/gates-loop.mp4';
	import bgPoster from '#lib/images/gates-poster.jpg';
	import amazacorp from '#lib/images/amazacorp.png';

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

<div id="background-video" aria-hidden="true" style:background-image="url({bgPoster})">
	<video autoplay loop muted playsinline poster={bgPoster} src={bgVideo}></video>
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

	<footer>
		<nav class="socials" aria-label="Elo Pros elsewhere">
			<a href="https://elopros.com">Elo Pros</a>
			<a href="https://x.com/ELOPROS1337" rel="noopener noreferrer">X</a>
			<a href="https://t.me/elopros4life" rel="noopener noreferrer">Telegram</a>
			<a href="https://discord.gg/UYg2D3Yudm" rel="noopener noreferrer">Discord</a>
		</nav>
		<p class="contact"><a href="mailto:cs@amazastrophic.com">cs@amazastrophic.com</a></p>
		<p class="copyright">© {year} Amazastrophic</p>
	</footer>
</div>

<style>
	#background-video {
		position: fixed;
		inset: 0;
		z-index: -1;
		overflow: hidden;
		background: center / cover no-repeat;
	}

	#background-video video {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	@media (prefers-reduced-motion: reduce) {
		#background-video video {
			display: none;
		}
	}

	.panel {
		max-width: 640px;
		width: 100%;
		margin: 0 auto;
		padding: 1.5rem;
		box-sizing: border-box;
		background-color: hsla(0, 0%, 12%, 0.92);
		border-radius: 8px;
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

	footer {
		text-align: center;
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid hsla(0, 0%, 100%, 0.2);
	}

	.socials {
		display: flex;
		flex-wrap: wrap;
		gap: 1.25rem;
		justify-content: center;
	}

	.contact {
		margin: 0.75rem 0 0;
	}

	.copyright {
		font-size: 0.8rem;
		color: #999;
	}
</style>
