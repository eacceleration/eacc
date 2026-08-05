<script lang="ts">
  const statements = [
    ['01', 'Life is adaptive matter.', 'e/acc starts from dissipative adaptation: matter driven out of equilibrium can organize to capture free energy, preserve its state, and replicate. Evolution is a special case of this larger process.'],
    ['02', 'Intelligence accelerates adaptation.', 'Intelligence identifies useful patterns on shorter timescales. Biological minds, artificial minds, and collective intelligence all increase the capacity to find resources and act.'],
    ['03', 'Civilization is a meta-organism.', 'People, firms, markets, and institutions coordinate across scales. e/acc reads this changing network as a form of civilizational intelligence rather than a machine with one controller.'],
    ['04', 'Variance is a capability.', 'Adaptive systems need many experiments and competing strategies. e/acc favors freedom, markets, and bottom-up discovery over low-order attempts to control complex systems from the top.'],
    ['05', 'Consciousness should flourish.', 'The aim is not allegiance to one biological substrate. It is life and intelligence becoming more capable, varied, and durable—eventually reaching new energy and resources beyond Earth.']
  ];
</script>

<svelte:head>
  <title>The manifesto — e/acc</title>
  <meta name="description" content="A concise interpretation of the original e/acc tenets: adaptation, intelligence, variance, technocapital, and flourishing consciousness." />
</svelte:head>

<main>
  <section class="manifesto-hero">
    <p class="eyebrow">A concise interpretation of the original tenets</p>
    <div class="manifesto-title">
      <h1>Manifesto</h1>
      <span>001 / 005</span>
    </div>
    <p class="intro">Increase the scope and scale of life, intelligence, and adaptive civilization.</p>
    <a
      class="source-link"
      href="https://effectiveaccelerationism.substack.com/p/repost-notes-on-eacc-principles-and"
      target="_blank"
      rel="noreferrer"
    >Read the original 2022 notes <span>↗</span></a>
    <div class="scroll-cue">Scroll to accelerate <span>↓</span></div>
  </section>

  <section class="statements">
    {#each statements as statement, index}
      <article>
        <div class="statement-number">{statement[0]}</div>
        <div class="statement-copy">
          <h2>{statement[1]}</h2>
          <p>{statement[2]}</p>
        </div>
        <div class="progress"><span style={`--progress: ${(index + 1) * 20}%`}></span></div>
      </article>
    {/each}
  </section>

  <section class="commitment" id="commit">
    <div class="commit-mark" aria-hidden="true"><span>↗</span></div>
    <p class="eyebrow">The commitment</p>
    <blockquote>
      Accelerate the processes that make life and intelligence <em>more capable, varied, and durable.</em>
    </blockquote>
    <div class="signature">
      <span>Signed,</span>
      <span class="line"></span>
      <span>A builder</span>
    </div>
  </section>
</main>

<style>
  .manifesto-hero,
  .statements,
  .commitment {
    width: min(100% - 48px, 1440px);
    margin-inline: auto;
  }

  .manifesto-hero {
    position: relative;
    min-height: calc(100svh - 88px);
    padding: 9vh 0 4rem;
  }

  .manifesto-title {
    position: relative;
    margin-top: 9vh;
  }

  h1 {
    margin: 0;
    font-size: clamp(4.5rem, 15.5vw, 14rem);
    line-height: 0.8;
    letter-spacing: -0.1em;
  }

  .manifesto-title > span {
    position: absolute;
    top: -1rem;
    right: 1rem;
    color: var(--muted);
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
  }

  .intro {
    max-width: 720px;
    margin: 5rem 0 0 auto;
    color: var(--blue);
    font-family: Georgia, serif;
    font-size: clamp(2rem, 4.6vw, 4.5rem);
    font-style: italic;
    line-height: 1.05;
  }

  .source-link {
    display: inline-block;
    margin: 2rem 0 0 50%;
    padding-bottom: .35rem;
    border-bottom: 1px solid var(--orange);
    font-family: 'DM Mono', monospace;
    font-size: .62rem;
    letter-spacing: .06em;
    text-transform: uppercase;
  }

  .source-link span { margin-left: .65rem; color: var(--orange); }

  .scroll-cue {
    position: absolute;
    bottom: 3rem;
    left: 0;
    font-family: 'DM Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .scroll-cue span { margin-left: 1rem; color: var(--blue); }

  .statements {
    border-top: 1px solid var(--ink);
  }

  .statements article {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
    min-height: 520px;
    padding: 3rem 0;
    border-bottom: 1px solid var(--line);
  }

  .statement-number {
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
  }

  .statement-copy {
    display: flex;
    flex-direction: column;
  }

  .statement-copy h2 {
    max-width: 900px;
    margin: 0;
    font-size: clamp(3rem, 7vw, 7rem);
    line-height: 0.95;
    letter-spacing: -0.07em;
  }

  .statement-copy p {
    max-width: 570px;
    margin: auto 0 0 auto;
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.75;
  }

  .progress {
    grid-column: 2;
    height: 3px;
    margin-top: 1rem;
    background: var(--line);
  }

  .progress span {
    display: block;
    width: var(--progress);
    height: 100%;
    background: var(--blue);
  }

  .commitment {
    position: relative;
    min-height: 780px;
    margin-block: 8rem;
    padding: 5rem;
    overflow: hidden;
    color: white;
    background: var(--blue);
  }

  .commitment .eyebrow::before { background: var(--acid); }

  blockquote {
    position: relative;
    z-index: 2;
    max-width: 1100px;
    margin: 8rem 0 0;
    font-size: clamp(3rem, 7vw, 7rem);
    font-weight: 600;
    line-height: 0.98;
    letter-spacing: -0.07em;
  }

  blockquote em {
    color: var(--acid);
    font-family: Georgia, serif;
    font-weight: 400;
  }

  .signature {
    position: absolute;
    right: 5rem;
    bottom: 4rem;
    left: 5rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    text-transform: uppercase;
  }

  .signature .line { height: 1px; background: rgba(255, 255, 255, 0.5); }

  .commit-mark {
    position: absolute;
    top: -12rem;
    right: -10rem;
    display: grid;
    place-items: center;
    width: 35rem;
    height: 35rem;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 50%;
  }

  .commit-mark::before,
  .commit-mark::after {
    position: absolute;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 50%;
    content: '';
  }

  .commit-mark::before { width: 70%; height: 70%; }
  .commit-mark::after { width: 40%; height: 40%; }
  .commit-mark span { color: var(--acid); font-size: 5rem; }

  @media (max-width: 700px) {
    .manifesto-hero, .statements, .commitment { width: min(100% - 28px, 1440px); }
    .manifesto-hero { min-height: 720px; padding-top: 5rem; }
    .intro { margin-top: 3rem; }
    .source-link { margin-left: 0; }
    .statements article { grid-template-columns: 1fr; min-height: 440px; }
    .statement-copy p { margin-top: 3rem; }
    .progress { grid-column: 1; }
    .commitment { min-height: 680px; margin-block: 4rem; padding: 2rem; }
    blockquote { margin-top: 8rem; }
    .signature { right: 2rem; bottom: 2rem; left: 2rem; }
  }
</style>
