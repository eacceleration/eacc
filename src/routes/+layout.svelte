<script lang="ts">
  import { page } from '$app/state';
  import { base } from '$app/paths';
  import '../styles/global.css';

  let { children } = $props();

  const links = [
    { href: `${base}/`, label: 'Start', index: '01' },
    { href: `${base}/manifesto/`, label: 'Manifesto', index: '02' },
    { href: `${base}/ideas/`, label: 'Ideas', index: '03' }
  ];
</script>

<svelte:head>
  <title>e/acc — Choose acceleration</title>
  <meta
    name="description"
    content="A visual field guide to effective accelerationism: adaptation, intelligence, variance, technocapital, and flourishing consciousness."
  />
  <meta property="og:title" content="e/acc — Choose acceleration" />
  <meta property="og:description" content="Increase the scope and scale of life, intelligence, and adaptive civilization." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`https://eacc.space${page.url.pathname.replace(base, '')}`} />
  <meta property="og:image" content="https://eacc.space/hero-orbital.jpg" />
  <meta property="og:image:width" content="928" />
  <meta property="og:image:height" content="634" />
  <meta property="og:image:alt" content="A sunlit orbital research habitat and interstellar laboratory vessel" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://eacc.space/hero-orbital.jpg" />
  <link rel="canonical" href={`https://eacc.space${page.url.pathname.replace(base, '')}`} />
</svelte:head>

<header class="site-header">
  <a class="wordmark" href={`${base}/`} aria-label="e/acc home">
    <span>e</span><i>/</i><span>acc</span>
  </a>

  <nav aria-label="Main navigation">
    {#each links as link}
      <a href={link.href} aria-current={page.url.pathname === link.href ? 'page' : undefined}>
        <span>{link.index}</span>{link.label}
      </a>
    {/each}
  </nav>

  <a class="header-cta" href={`${base}/manifesto/#commit`}>Accelerate <span>↗</span></a>
</header>

{@render children()}

<footer class="site-footer">
  <a class="wordmark footer-mark" href={`${base}/`} aria-label="e/acc home">
    <span>e</span><i>/</i><span>acc</span>
  </a>
  <p>System / Build. Explore. Accelerate.</p>
  <p class="footer-note">eacc.space · Adaptive civilization in progress.</p>
</footer>
