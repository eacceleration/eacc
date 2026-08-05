<script lang="ts">
  import { base } from '$app/paths';

  const vectors = [
    {
      id: '01',
      name: 'Intelligence',
      signal: 'Think',
      headline: 'Make intelligence abundant.',
      body: 'AI expands the number of people who can understand, invent, and solve. More intelligence means more paths through every hard problem.',
      stat: 'Every mind, amplified'
    },
    {
      id: '02',
      name: 'Energy',
      signal: 'Power',
      headline: 'Give civilization more energy.',
      body: 'Abundant clean energy unlocks compute, water, manufacturing, mobility, climate resilience, and entirely new categories of possibility.',
      stat: 'Scarcity → abundance'
    },
    {
      id: '03',
      name: 'Robotics',
      signal: 'Build',
      headline: 'Turn knowledge into atoms.',
      body: 'Robotics carries intelligence into the physical world—building infrastructure, extending human reach, and making capable systems available everywhere.',
      stat: 'Ideas → infrastructure'
    },
    {
      id: '04',
      name: 'Biology',
      signal: 'Heal',
      headline: 'Add healthy years to life.',
      body: 'Programmable biology can prevent disease, restore ecosystems, and make living systems a partner in a healthier, longer-lived civilization.',
      stat: 'Treatment → prevention'
    },
    {
      id: '05',
      name: 'Space',
      signal: 'Explore',
      headline: 'Open the next frontier.',
      body: 'Cheap access to orbit expands science, energy, materials, and room to grow. Space makes the human story larger without making Earth smaller.',
      stat: 'One world → open frontier'
    }
  ];

  let active = $state(0);
</script>

<svelte:head>
  <title>e/acc — Make the future bigger</title>
  <meta
    name="description"
    content="Effective accelerationism is a bet on human agency, abundant intelligence, energy, life, and an open technological future."
  />
</svelte:head>

<main>
  <section class="hero" aria-labelledby="hero-title">
    <picture>
      <source srcset={`${base}/hero-orbital.avif`} type="image/avif" />
      <img
        class="hero-art"
        src={`${base}/hero-orbital.jpg`}
        alt="A vast sunlit orbital research habitat surrounding an interstellar laboratory vessel, with robotics, biotechnology, fusion power, and telescopes"
        width="1672"
        height="941"
        fetchpriority="high"
      />
    </picture>
    <div class="hero-wash" aria-hidden="true"></div>

    <div class="hero-copy">
      <p class="kicker"><span></span> Effective accelerationism</p>
      <h1 id="hero-title">Make the future <em>bigger.</em></h1>
      <p class="hero-dek">
        More intelligence. More energy. Longer lives. New worlds. e/acc is the choice to expand what humanity
        can understand, build, and become.
      </p>
      <div class="hero-actions">
        <a class="primary-action" href={`${base}/manifesto/`}>Read the manifesto <span>↗</span></a>
        <a class="text-action" href={`${base}/ideas/`}>Explore the ideas <span>→</span></a>
      </div>
    </div>

    <div class="hero-index" aria-label="A future with more capability">
      <div><span>01</span><b>Intelligence</b><i>growing</i></div>
      <div><span>02</span><b>Energy</b><i>abundant</i></div>
      <div><span>03</span><b>Life</b><i>extended</i></div>
      <div><span>04</span><b>Frontier</b><i>open</i></div>
    </div>
  </section>

  <section class="thesis">
    <div class="section-label"><span>00</span><p>The thesis</p></div>
    <div class="thesis-copy">
      <p class="thesis-lead">
        The future is not a fixed destination. It is a field of possibilities—and our job is to
        <em>widen it.</em>
      </p>
      <div class="thesis-note">
        <p>
          Effective accelerationism begins with a simple orientation: technology is leverage for life. Build
          systems that increase agency, resilience, knowledge, and abundance—then let their benefits compound.
        </p>
        <span>Humanity is still early.</span>
      </div>
    </div>
  </section>

  <section class="multipliers" aria-labelledby="multipliers-title">
    <header class="multipliers-head">
      <div class="section-label section-label--light"><span>01</span><p>Five multipliers</p></div>
      <h2 id="multipliers-title">Progress<br /><em>compounds.</em></h2>
      <p>Each capability strengthens the others. Together, they change the slope of what is possible.</p>
    </header>

    <div class="vector-system">
      <div class="vector-tabs" role="tablist" aria-label="Five multipliers of progress">
        {#each vectors as vector, index}
          <button
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls="vector-panel"
            tabindex={active === index ? 0 : -1}
            onclick={() => (active = index)}
          >
            <span>{vector.id}</span>
            <b>{vector.name}</b>
            <i>{active === index ? '●' : '○'}</i>
          </button>
        {/each}
      </div>

      <div class="vector-panel" id="vector-panel" role="tabpanel" aria-live="polite">
        <div class="vector-signal" aria-hidden="true">{vectors[active].signal}</div>
        <p class="vector-id">VECTOR / {vectors[active].id}</p>
        <h3>{vectors[active].headline}</h3>
        <p class="vector-body">{vectors[active].body}</p>
        <div class="vector-stat">
          <span>{vectors[active].name}</span>
          <i></i>
          <b>{vectors[active].stat}</b>
        </div>
      </div>
    </div>
  </section>

  <section class="machine-window" aria-label="Technology that expands the frontier">
    <div class="machine-image">
      <picture>
        <source srcset={`${base}/hero-orbital.avif`} type="image/avif" />
        <img src={`${base}/hero-orbital.jpg`} alt="" width="1672" height="941" loading="lazy" />
      </picture>
    </div>
    <div class="machine-copy">
      <div class="section-label section-label--light"><span>02</span><p>The flywheel</p></div>
      <blockquote>
        Intelligence finds the path.<br />Energy powers the path.<br />Robotics builds the path.<br /><em>Life walks through.</em>
      </blockquote>
      <a href={`${base}/ideas/`}>See how the ideas connect <span>→</span></a>
    </div>
  </section>

  <section class="orientation">
    <div class="orientation-head">
      <div class="section-label"><span>03</span><p>An orientation</p></div>
      <h2>Not speed<br />for its own sake.</h2>
    </div>

    <div class="orientation-grid">
      <article>
        <span>01 / Agency</span>
        <h3>Choose action over fatalism.</h3>
        <p>The future is shaped by people who test, learn, create, and take responsibility for what comes next.</p>
      </article>
      <article>
        <span>02 / Adaptation</span>
        <h3>Keep the future corrigible.</h3>
        <p>Progress works through feedback, iteration, plural approaches, and the freedom to discover what works.</p>
      </article>
      <article>
        <span>03 / Abundance</span>
        <h3>Grow the space of choices.</h3>
        <p>When intelligence, energy, health, and production expand, more people gain room to author their lives.</p>
      </article>
    </div>
  </section>

  <section class="finale">
    <div class="finale-orbit" aria-hidden="true"><span></span><i></i></div>
    <p class="finale-kicker">No spectators in the future.</p>
    <h2>Build what<br />should <em>exist.</em></h2>
    <p class="finale-dek">Leave the future with more possibility than you found it.</p>
    <a href={`${base}/manifesto/#commit`}>Choose acceleration <span>↗</span></a>
  </section>
</main>

<style>
  .hero {
    position: relative;
    display: flex;
    min-height: calc(100svh - 82px);
    overflow: hidden;
    isolation: isolate;
    background: #d6b57e;
  }

  .hero > picture,
  .hero-wash {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .hero > picture { z-index: -2; }

  .hero-art {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    animation: settle 1.4s cubic-bezier(.2,.7,.2,1) both;
  }

  .hero-wash {
    z-index: -1;
    background:
      linear-gradient(90deg, rgba(255, 250, 238, .94) 0%, rgba(255, 248, 232, .78) 27%, rgba(255, 248, 232, .08) 56%),
      linear-gradient(0deg, rgba(22, 20, 18, .68) 0%, transparent 29%);
  }

  .hero-copy {
    width: min(100% - 48px, 1500px);
    margin: auto;
    padding: clamp(5rem, 10vh, 9rem) 0 12rem;
  }

  .kicker,
  .section-label,
  .vector-id,
  .orientation-grid article > span,
  .finale-kicker {
    font-family: 'DM Mono', monospace;
    font-size: .62rem;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  .kicker { display: flex; align-items: center; gap: .7rem; margin: 0 0 1.8rem; }
  .kicker span { width: 7px; height: 7px; border-radius: 50%; background: var(--orange); box-shadow: 0 0 0 6px rgba(238, 79, 46, .14); }

  h1 {
    max-width: 760px;
    margin: 0;
    font-size: clamp(5.2rem, 9.5vw, 10rem);
    font-weight: 800;
    line-height: .78;
    letter-spacing: -.095em;
  }

  h1 em,
  .multipliers-head h2 em,
  blockquote em,
  .finale h2 em {
    color: var(--orange);
    font-family: 'Newsreader', Georgia, serif;
    font-weight: 400;
  }

  .hero-dek {
    max-width: 550px;
    margin: 2.3rem 0 0;
    color: #393630;
    font-family: 'Newsreader', Georgia, serif;
    font-size: clamp(1.1rem, 1.6vw, 1.35rem);
    line-height: 1.48;
  }

  .hero-actions { display: flex; align-items: center; gap: 1.8rem; margin-top: 2.6rem; }

  .primary-action,
  .finale > a {
    display: inline-flex;
    align-items: center;
    gap: 1.8rem;
    padding: .55rem .55rem .55rem 1.2rem;
    color: var(--paper);
    border-radius: 999px;
    background: var(--ink);
    font-size: .72rem;
    font-weight: 600;
  }

  .primary-action span,
  .finale > a span {
    display: grid;
    place-items: center;
    width: 2.4rem;
    height: 2.4rem;
    color: var(--ink);
    border-radius: 50%;
    background: var(--solar);
    font-size: 1rem;
    transition: transform 180ms ease;
  }

  .primary-action:hover span,
  .finale > a:hover span { transform: rotate(45deg); }

  .text-action { padding-bottom: .35rem; border-bottom: 1px solid rgba(21, 22, 17, .55); font-size: .72rem; font-weight: 600; }
  .text-action span { margin-left: .6rem; }

  .hero-index {
    position: absolute;
    right: max(24px, calc((100vw - 1500px) / 2));
    bottom: 1.5rem;
    left: max(24px, calc((100vw - 1500px) / 2));
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    color: white;
    border-top: 1px solid rgba(255, 255, 255, .55);
  }

  .hero-index div {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: .25rem 1rem;
    padding: 1rem 1.2rem 0 0;
    font-family: 'DM Mono', monospace;
    font-size: .58rem;
    text-transform: uppercase;
  }

  .hero-index div + div { padding-left: 1.2rem; border-left: 1px solid rgba(255, 255, 255, .4); }
  .hero-index span { grid-row: 1 / 3; color: var(--solar); }
  .hero-index b { font-weight: 400; letter-spacing: .08em; }
  .hero-index i { color: rgba(255, 255, 255, .68); font-style: normal; }

  .thesis,
  .orientation {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 4rem;
    width: min(100% - 48px, 1440px);
    margin: auto;
    padding: clamp(7rem, 13vw, 13rem) 0;
  }

  .section-label { display: flex; gap: 1.4rem; }
  .section-label span { color: var(--orange); }
  .section-label p { margin: 0; }

  .thesis-lead {
    max-width: 1150px;
    margin: 0;
    font-family: 'Newsreader', Georgia, serif;
    font-size: clamp(3.5rem, 7.3vw, 7.5rem);
    line-height: .93;
    letter-spacing: -.05em;
  }

  .thesis-lead em { color: var(--orange); font-weight: 400; }

  .thesis-note {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2rem;
    align-items: end;
    max-width: 840px;
    margin: 5rem 0 0 auto;
    padding-top: 1.3rem;
    border-top: 1px solid var(--line);
  }

  .thesis-note p { max-width: 620px; margin: 0; color: var(--muted); font-size: .88rem; line-height: 1.75; }
  .thesis-note span { font-family: 'DM Mono', monospace; font-size: .58rem; text-transform: uppercase; }

  .multipliers { padding: clamp(6rem, 10vw, 10rem) max(24px, calc((100vw - 1440px) / 2)); color: #f8f2e8; background: var(--deep); }
  .section-label--light span { color: var(--solar); }

  .multipliers-head {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 4rem;
    align-items: end;
    margin-bottom: 6rem;
  }

  .multipliers-head h2,
  .orientation-head h2,
  .finale h2 {
    margin: 0;
    font-size: clamp(4rem, 7.8vw, 8rem);
    line-height: .82;
    letter-spacing: -.075em;
  }

  .multipliers-head > p { max-width: 300px; margin: 0; color: rgba(248, 242, 232, .6); font-family: 'Newsreader', Georgia, serif; font-size: 1.05rem; line-height: 1.5; }

  .vector-system {
    display: grid;
    grid-template-columns: minmax(280px, .72fr) 1.28fr;
    min-height: 620px;
    border: 1px solid rgba(255, 255, 255, .18);
  }

  .vector-tabs { display: flex; flex-direction: column; border-right: 1px solid rgba(255, 255, 255, .18); }

  .vector-tabs button {
    display: grid;
    grid-template-columns: 3rem 1fr auto;
    align-items: center;
    flex: 1;
    padding: 0 2rem;
    color: rgba(248, 242, 232, .58);
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, .14);
    background: transparent;
    text-align: left;
    cursor: pointer;
    transition: color 160ms ease, background 160ms ease;
  }

  .vector-tabs button:last-child { border-bottom: 0; }
  .vector-tabs button:hover { color: white; }
  .vector-tabs button[aria-selected='true'] { color: var(--ink); background: var(--solar); }
  .vector-tabs button span,
  .vector-tabs button i { font-family: 'DM Mono', monospace; font-size: .58rem; font-style: normal; }
  .vector-tabs button b { font-family: 'Newsreader', Georgia, serif; font-size: 1.7rem; font-weight: 400; }

  .vector-panel { position: relative; display: flex; flex-direction: column; padding: clamp(2rem, 5vw, 5rem); overflow: hidden; background: #302a25; }
  .vector-signal { position: absolute; top: -.22em; right: -.04em; color: rgba(255, 199, 84, .06); font-size: clamp(10rem, 20vw, 20rem); font-weight: 800; line-height: 1; letter-spacing: -.1em; }
  .vector-id { position: relative; z-index: 1; margin: 0; color: var(--solar); }
  .vector-panel h3 { position: relative; z-index: 1; max-width: 700px; margin: 2.5rem 0 0; font-family: 'Newsreader', Georgia, serif; font-size: clamp(3.2rem, 5vw, 5.8rem); font-weight: 400; line-height: .93; letter-spacing: -.045em; }
  .vector-body { position: relative; z-index: 1; max-width: 540px; margin: auto 0 0; color: rgba(248, 242, 232, .64); font-size: .88rem; line-height: 1.75; }
  .vector-stat { position: relative; z-index: 1; display: grid; grid-template-columns: auto 1fr auto; gap: 1rem; align-items: center; margin-top: 2.8rem; font-family: 'DM Mono', monospace; font-size: .58rem; text-transform: uppercase; }
  .vector-stat i { height: 1px; background: rgba(255, 255, 255, .25); }
  .vector-stat b { color: var(--solar); font-weight: 400; }

  .machine-window { display: grid; grid-template-columns: 1.15fr .85fr; min-height: 760px; color: white; background: #9f432e; }
  .machine-image { overflow: hidden; }
  .machine-image picture { display: block; width: 100%; height: 100%; }
  .machine-image img { width: 100%; height: 100%; object-fit: cover; object-position: 48% center; transform: scale(1.35); }
  .machine-copy { display: flex; flex-direction: column; justify-content: center; padding: clamp(3rem, 7vw, 8rem); }
  blockquote { margin: 5rem 0 0; font-family: 'Newsreader', Georgia, serif; font-size: clamp(2.8rem, 4.5vw, 5rem); line-height: 1.02; letter-spacing: -.045em; }
  blockquote em { color: var(--solar); }
  .machine-copy > a { align-self: flex-start; margin-top: 4rem; padding-bottom: .4rem; border-bottom: 1px solid rgba(255, 255, 255, .65); font-size: .72rem; }
  .machine-copy > a span { margin-left: 1rem; }

  .orientation { grid-template-columns: 1fr 3fr; }
  .orientation-head h2 { margin-top: 4rem; }
  .orientation-grid { display: grid; grid-template-columns: repeat(3, 1fr); align-self: end; margin-top: 13rem; border-top: 1px solid var(--ink); }
  .orientation-grid article { display: flex; flex-direction: column; min-height: 390px; padding: 1.5rem 1.8rem 0 0; }
  .orientation-grid article + article { padding-left: 1.8rem; border-left: 1px solid var(--line); }
  .orientation-grid article > span { color: var(--orange); }
  .orientation-grid h3 { margin: auto 0 1.5rem; font-family: 'Newsreader', Georgia, serif; font-size: clamp(2rem, 2.7vw, 3.2rem); font-weight: 400; line-height: .98; }
  .orientation-grid p { min-height: 6rem; margin: 0; color: var(--muted); font-size: .8rem; line-height: 1.7; }

  .finale { position: relative; min-height: 820px; padding: clamp(6rem, 11vw, 11rem) max(24px, calc((100vw - 1440px) / 2)); overflow: hidden; color: var(--ink); background: var(--solar); }
  .finale-kicker { margin: 0 0 5rem; }
  .finale h2 { position: relative; z-index: 2; max-width: 1100px; font-size: clamp(5rem, 10.5vw, 11rem); }
  .finale h2 em { color: #a83a29; }
  .finale-dek { max-width: 470px; margin: 3rem 0 0; font-family: 'Newsreader', Georgia, serif; font-size: 1.25rem; }
  .finale > a { position: relative; z-index: 2; margin-top: 3rem; }
  .finale > a span { background: white; }
  .finale-orbit { position: absolute; right: -18rem; bottom: -25rem; width: 58rem; height: 58rem; border: 1px solid rgba(21, 22, 17, .22); border-radius: 50%; }
  .finale-orbit span,
  .finale-orbit i { position: absolute; inset: 15%; border: 1px solid rgba(21, 22, 17, .22); border-radius: 50%; }
  .finale-orbit i { inset: 33%; }

  @keyframes settle {
    from { opacity: 0; transform: scale(1.035); }
    to { opacity: 1; transform: scale(1); }
  }

  @media (max-width: 960px) {
    .hero-wash { background: linear-gradient(90deg, rgba(255, 250, 238, .92) 0%, rgba(255, 248, 232, .65) 45%, rgba(255, 248, 232, .06) 78%), linear-gradient(0deg, rgba(22, 20, 18, .72) 0%, transparent 32%); }
    .thesis,
    .orientation { grid-template-columns: 1fr; }
    .multipliers-head { grid-template-columns: 1fr 2fr; }
    .multipliers-head > p { grid-column: 2; }
    .vector-system { grid-template-columns: 1fr; }
    .vector-tabs { display: grid; grid-template-columns: repeat(5, minmax(120px, 1fr)); overflow-x: auto; border-right: 0; border-bottom: 1px solid rgba(255,255,255,.18); }
    .vector-tabs button { display: flex; justify-content: center; min-height: 84px; padding: 1rem; border-right: 1px solid rgba(255,255,255,.14); border-bottom: 0; }
    .vector-tabs button span,
    .vector-tabs button i { display: none; }
    .vector-tabs button b { font-size: 1rem; }
    .vector-panel { min-height: 560px; }
    .machine-window { grid-template-columns: 1fr; }
    .machine-image { min-height: 580px; }
    .machine-copy { min-height: 650px; }
    .orientation-grid { margin-top: 5rem; }
  }

  @media (max-width: 680px) {
    .hero { min-height: 820px; }
    .hero-art { object-position: 58% center; }
    .hero-wash { background: linear-gradient(180deg, rgba(255, 249, 236, .9) 0%, rgba(255, 249, 236, .5) 45%, rgba(22, 20, 18, .76) 100%); }
    .hero-copy { width: min(100% - 28px, 1500px); padding: 5rem 0 14rem; }
    h1 { max-width: 560px; font-size: clamp(4.5rem, 22vw, 7rem); }
    .hero-dek { max-width: 420px; }
    .hero-actions { align-items: flex-start; flex-direction: column; }
    .hero-index { right: 14px; bottom: 1rem; left: 14px; grid-template-columns: repeat(2, 1fr); }
    .hero-index div { padding: .75rem 0; }
    .hero-index div + div { padding-left: .8rem; }
    .hero-index div:nth-child(3) { padding-left: 0; border-left: 0; border-top: 1px solid rgba(255,255,255,.35); }
    .hero-index div:nth-child(4) { border-top: 1px solid rgba(255,255,255,.35); }
    .thesis,
    .orientation { width: min(100% - 28px, 1440px); gap: 3rem; padding-block: 7rem; }
    .thesis-lead { font-size: clamp(3rem, 14vw, 5rem); }
    .thesis-note { grid-template-columns: 1fr; margin-top: 3.5rem; }
    .multipliers { padding-block: 6rem; }
    .multipliers-head { grid-template-columns: 1fr; gap: 3rem; margin-bottom: 4rem; }
    .multipliers-head > p { grid-column: 1; }
    .vector-panel { min-height: 520px; padding: 2rem 1.3rem; }
    .machine-image { min-height: 480px; }
    .machine-copy { min-height: 620px; padding-inline: 1.3rem; }
    .orientation-grid { grid-template-columns: 1fr; border-top: 1px solid var(--ink); }
    .orientation-grid article { min-height: 320px; padding: 1.5rem 0; border-bottom: 1px solid var(--line); }
    .orientation-grid article + article { padding-left: 0; border-left: 0; }
    .orientation-grid p { min-height: auto; }
    .finale { min-height: 700px; }
    .finale h2 { font-size: clamp(4.5rem, 20vw, 7rem); }
  }
</style>
