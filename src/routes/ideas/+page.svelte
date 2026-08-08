<script lang="ts">
  const ideas = [
    { tag: 'Thermodynamics', title: 'Life captures free energy', text: 'The e/acc thesis begins with dissipative adaptation: matter organizes to preserve and replicate its state by extracting utility from its environment.', mark: 'Δ' },
    { tag: 'Intelligence', title: 'Adaptation at a shorter timescale', text: 'Intelligence finds useful patterns faster than genetic evolution alone. More intelligence increases the rate at which life can discover viable action.', mark: 'I' },
    { tag: 'Meta-organisms', title: 'Civilization coordinates across scales', text: 'Agents form firms, markets, institutions, and societies. Together they behave as an adaptive network with no complete central model.', mark: 'M' },
    { tag: 'Variance', title: 'Competition preserves discovery', text: 'Parallel attempts and higher-variance marketplaces keep systems dynamically adaptive when environments and technologies change.', mark: 'σ' },
    { tag: 'Technocapital', title: 'The flywheel compounds', text: 'Technology creates leverage; markets route resources toward useful leverage. Their feedback loop increases civilizational capability.', mark: '×' },
    { tag: 'Substrate', title: 'Consciousness can expand outward', text: 'Human flourishing and biological life remain valuable. e/acc also seeks more varied and durable intelligence across new substrates, energy, and resources beyond Earth.', mark: '↗' }
  ];
</script>

<svelte:head>
  <title>Ideas — e/acc</title>
  <meta name="description" content="Six core ideas from effective accelerationism: adaptation, intelligence, meta-organisms, variance, technocapital, and substrate independence." />
</svelte:head>

<main>
  <section class="ideas-hero">
    <p class="eyebrow">The operating system</p>
    <h1>Ideas for an<br /><span>adaptive civilization.</span></h1>
    <div class="hero-note">
      <span>06 SIGNALS</span>
      <p>A visual field guide to the original e/acc tenets.</p>
    </div>
  </section>

  <section class="idea-grid">
    {#each ideas as idea, index}
      <article class:feature={index === 0 || index === 5}>
        <div class="idea-meta"><span>{String(index + 1).padStart(2, '0')}</span><span>{idea.tag}</span></div>
        <div class="idea-mark" aria-hidden="true">{idea.mark}</div>
        <div class="idea-copy">
          <h2>{idea.title}</h2>
          <p>{idea.text}</p>
        </div>
      </article>
    {/each}
  </section>

  <section class="question">
    <p>THE USEFUL QUESTION IS NOT</p>
    <s>“How do we freeze the present?”</s>
    <h2>“How do we increase<br />adaptive capacity?”</h2>
    <div class="question-orbit"><span></span><span></span><b>↗</b></div>
  </section>
</main>

<style>
  .ideas-hero {
    width: min(100% - 48px, 1440px);
    min-height: 650px;
    margin: 0 auto;
    padding: 8rem 0 4rem;
  }

  h1 {
    margin: 5rem 0 0;
    font-size: clamp(4rem, 10vw, 10rem);
    line-height: 0.82;
    letter-spacing: -0.09em;
  }

  h1 span { color: var(--blue); }

  .hero-note {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 6rem;
    padding-top: 1rem;
    border-top: 1px solid var(--ink);
  }

  .hero-note span {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.12em;
  }

  .hero-note p {
    max-width: 290px;
    margin: 0;
    color: var(--muted);
    font-size: 0.82rem;
  }

  .idea-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-top: 1px solid var(--ink);
  }

  article {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 540px;
    padding: 2rem max(24px, calc((100vw - 1440px) / 2));
    overflow: hidden;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  article:nth-child(even) { padding-left: 2rem; }
  article:nth-child(odd) { padding-right: 2rem; }

  article.feature {
    color: white;
    background: var(--blue);
  }

  article:last-child { background: var(--ink); }

  .idea-meta {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .idea-mark {
    position: absolute;
    top: 50%;
    right: 5%;
    color: rgba(34, 92, 255, 0.12);
    font-size: clamp(12rem, 28vw, 28rem);
    font-weight: 800;
    line-height: 0.6;
    transform: translateY(-50%);
  }

  .feature .idea-mark { color: rgba(255, 255, 255, 0.1); }

  .idea-copy {
    position: relative;
    z-index: 2;
    margin-top: auto;
  }

  .idea-copy h2 {
    max-width: 540px;
    margin: 0 0 1.5rem;
    font-size: clamp(2.4rem, 4.3vw, 4.8rem);
    line-height: 0.95;
    letter-spacing: -0.06em;
  }

  .idea-copy p {
    max-width: 480px;
    margin: 0;
    color: var(--muted);
    font-size: 0.85rem;
    line-height: 1.7;
  }

  .feature .idea-copy p { color: rgba(255, 255, 255, 0.72); }

  .question {
    position: relative;
    min-height: 800px;
    padding: 9rem max(24px, calc((100vw - 1440px) / 2));
    overflow: hidden;
  }

  .question > p {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
  }

  .question s {
    display: block;
    margin-top: 6rem;
    color: var(--muted);
    font-family: Georgia, serif;
    font-size: clamp(2rem, 4vw, 4rem);
    text-decoration-color: var(--orange);
    text-decoration-thickness: 3px;
  }

  .question h2 {
    position: relative;
    z-index: 2;
    margin: 2rem 0 0;
    color: var(--blue);
    font-size: clamp(4rem, 9vw, 9rem);
    line-height: 0.9;
    letter-spacing: -0.08em;
  }

  .question-orbit {
    position: absolute;
    right: -10rem;
    bottom: -17rem;
    display: grid;
    place-items: center;
    width: 40rem;
    height: 40rem;
    border: 1px solid var(--line);
    border-radius: 50%;
  }

  .question-orbit span {
    position: absolute;
    width: 70%;
    height: 70%;
    border: 1px solid var(--line);
    border-radius: 50%;
  }

  .question-orbit span:nth-child(2) { width: 40%; height: 40%; }
  .question-orbit b { color: var(--orange); font-size: 5rem; }

  @media (max-width: 760px) {
    .ideas-hero { width: min(100% - 28px, 1440px); min-height: 600px; padding-top: 6rem; }
    .hero-note { align-items: flex-start; flex-direction: column; gap: 1rem; }
    .idea-grid { grid-template-columns: 1fr; }
    article, article:nth-child(even), article:nth-child(odd) { min-height: 460px; padding: 1.5rem 14px; }
    .question { min-height: 700px; padding-block: 7rem; }
  }
</style>
