<script lang="ts">
  const statements = [
    ['01', 'We believe in agency.', 'The world is shaped by people who act. We choose experiments over commentary, creation over resignation, and learning over the comfort of standing still.'],
    ['02', 'We believe in intelligence.', 'Intelligence—biological, artificial, individual, and collective—is how the universe becomes more able to understand and transform itself.'],
    ['03', 'We believe in abundance.', 'More energy, better tools, and wider access create choices that scarcity denies. Growth is valuable when it compounds human possibility.'],
    ['04', 'We believe in adaptation.', 'No system is perfect at launch. Resilient futures come from feedback, iteration, plural approaches, and the freedom to discover what works.'],
    ['05', 'We believe the future is open.', 'Neither utopia nor collapse is inevitable. The path ahead is contingent—and that makes building matter.']
  ];
</script>

<svelte:head>
  <title>The manifesto — e/acc</title>
  <meta name="description" content="A compact manifesto for agency, intelligence, abundance, adaptation, and an open future." />
</svelte:head>

<main>
  <section class="manifesto-hero">
    <p class="eyebrow">A direction, not a doctrine</p>
    <div class="manifesto-title">
      <h1>Manifesto</h1>
      <span>001 / 005</span>
    </div>
    <p class="intro">We choose to participate in the future.</p>
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
      I will leave the future with <em>more possibility</em> than I found it.
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
    .statements article { grid-template-columns: 1fr; min-height: 440px; }
    .statement-copy p { margin-top: 3rem; }
    .progress { grid-column: 1; }
    .commitment { min-height: 680px; margin-block: 4rem; padding: 2rem; }
    blockquote { margin-top: 8rem; }
    .signature { right: 2rem; bottom: 2rem; left: 2rem; }
  }
</style>
