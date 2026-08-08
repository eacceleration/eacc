<script lang="ts">
  import { base } from '$app/paths';

  const vectors = [
    {
      id: '01',
      name: 'Life',
      signal: 'ADAPT',
      headline: 'Life learns to capture free energy.',
      body: 'e/acc begins with dissipative adaptation: out-of-equilibrium matter organizes to preserve and replicate itself by using energy. Evolution is one expression of that process.',
      stat: 'Matter → life'
    },
    {
      id: '02',
      name: 'Intelligence',
      signal: 'MODEL',
      headline: 'Intelligence accelerates adaptation.',
      body: 'Pattern recognition lets living systems find useful action on shorter timescales. More intelligence increases civilization’s capacity to find resources and solve problems.',
      stat: 'Patterns → agency'
    },
    {
      id: '03',
      name: 'Markets',
      signal: 'VARY',
      headline: 'Variance keeps systems adaptive.',
      body: 'e/acc treats competitive markets as distributed civilizational intelligence. Many parallel experiments preserve the variance complex systems need to learn.',
      stat: 'Competition → discovery'
    },
    {
      id: '04',
      name: 'Technocapital',
      signal: 'COMPOUND',
      headline: 'Technology and capital form a flywheel.',
      body: 'Better tools expand production and discovery; markets direct resources toward useful tools. Each turn increases the system’s capacity to adapt.',
      stat: 'Tools × markets'
    },
    {
      id: '05',
      name: 'Frontier',
      signal: 'EXPAND',
      headline: 'Carry intelligence beyond one substrate.',
      body: 'e/acc aims for life and consciousness to become more varied, durable, and capable—drawing on new energy and resources beyond Earth.',
      stat: 'One substrate → many'
    }
  ];

  let active = $state(0);
</script>

<svelte:head>
  <title>e/acc — Make the future bigger</title>
  <meta
    name="description"
    content="Effective accelerationism: increase the scope and scale of life, intelligence, variance, technocapital, and adaptive civilization."
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
    <div class="hero-grid" aria-hidden="true"></div>
    <div class="hero-frame" aria-hidden="true"><i></i><i></i><i></i><i></i></div>

    <div class="hero-system" aria-hidden="true">
      <span>SYS / EACC-01</span>
      <span>PROCESS / DYNAMIC</span>
      <span>VECTOR / OUTWARD</span>
    </div>

    <div class="hero-copy">
      <p class="kicker"><span></span> Effective accelerationism <b>ONLINE</b></p>
      <h1 id="hero-title">Make the<br /><strong>future</strong><br />bigger.</h1>
      <p class="hero-dek">
        e/acc is a philosophy of leaning into the universe’s adaptive process—expanding energy, intelligence,
        experimentation, and the reach of consciousness.
      </p>
      <div class="hero-actions">
        <a class="primary-action" href={`${base}/manifesto/`}>Initialize manifesto <span>↗</span></a>
        <a class="text-action" href={`${base}/ideas/`}><i>02</i> Explore the system <span>→</span></a>
      </div>
    </div>

    <div class="hero-index" aria-label="A future with more capability">
      <div><span>01</span><b>Life</b><i>ADAPTING</i></div>
      <div><span>02</span><b>Intelligence</b><i>SCALING</i></div>
      <div><span>03</span><b>Variance</b><i>PRESERVED</i></div>
      <div><span>04</span><b>Frontier</b><i>OUTWARD</i></div>
    </div>
  </section>

  <section class="thesis">
    <div class="section-label"><span>00</span><p>ROOT / THESIS</p></div>
    <div class="thesis-copy">
      <p class="thesis-lead">
        e/acc begins from a thermodynamic thesis: life is matter learning to capture energy, preserve itself,
        and <em>replicate.</em>
      </p>
      <div class="thesis-note">
        <span class="thesis-code">ADAPTATION.LOOP</span>
        <p>
          Intelligence compresses adaptation into shorter timescales. Markets coordinate experiments across
          civilization. Technology gives that distributed intelligence leverage. e/acc seeks to accelerate the
          whole process rather than freeze it.
        </p>
        <span class="thesis-state"><i></i> Humanity is still early</span>
      </div>
    </div>
  </section>

  <section class="multipliers" aria-labelledby="multipliers-title">
    <header class="multipliers-head">
      <div class="section-label section-label--light"><span>01</span><p>CAPABILITY / VECTORS</p></div>
      <h2 id="multipliers-title">Adaptation<br /><em>compounds.</em></h2>
      <p>From living matter to civilization, each layer expands the capacity to find and use what works.</p>
    </header>

    <div class="vector-system">
      <div class="vector-tabs" aria-label="Five multipliers of progress">
        {#each vectors as vector, index}
          <button
            type="button"
            aria-pressed={active === index}
            aria-controls="vector-panel"
            onclick={() => (active = index)}
          >
            <span>{vector.id}</span>
            <b>{vector.name}</b>
            <i>{active === index ? 'ACTIVE' : 'STANDBY'}</i>
          </button>
        {/each}
      </div>

      <div class="vector-panel" id="vector-panel" aria-live="polite">
        <div class="panel-grid" aria-hidden="true"></div>
        <div class="vector-signal" aria-hidden="true">{vectors[active].signal}</div>
        <p class="vector-id"><span></span> VECTOR / {vectors[active].id} / {vectors[active].name}</p>
        <h3>{vectors[active].headline}</h3>
        <p class="vector-body">{vectors[active].body}</p>
        <div class="vector-stat">
          <span>INPUT / {vectors[active].name}</span>
          <i></i>
          <b>OUTPUT / {vectors[active].stat}</b>
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
      <div class="machine-overlay" aria-hidden="true">
        <span>OPTICAL FEED / 02</span>
        <i></i>
        <span>ENERGY → UTILITY</span>
      </div>
    </div>
    <div class="machine-copy">
      <div class="section-label section-label--light"><span>02</span><p>PROCESS / FLYWHEEL</p></div>
      <blockquote>
        <span>01</span> Life captures energy.<br />
        <span>02</span> Intelligence finds utility.<br />
        <span>03</span> Markets preserve variance.<br />
        <span>04</span> <em>Technocapital compounds.</em>
      </blockquote>
      <a href={`${base}/ideas/`}>Inspect the operating ideas <span>→</span></a>
    </div>
  </section>

  <section class="orientation">
    <div class="orientation-head">
      <div class="section-label"><span>03</span><p>CONTROL / LOGIC</p></div>
      <h2>Keep the system<br />adaptive.</h2>
      <p>Three operating constraints for a civilization that can keep learning.</p>
    </div>

    <div class="orientation-grid">
      <article>
        <div class="card-top"><span>01 / VARIANCE</span><i>↗</i></div>
        <h3>Protect parallel experiments.</h3>
        <p>e/acc links adaptability to variance: many competing approaches reveal more useful paths than one authorized plan.</p>
        <b>STATE / DISTRIBUTED</b>
      </article>
      <article>
        <div class="card-top"><span>02 / EMERGENCE</span><i>↗</i></div>
        <h3>Prefer discovery to top-down control.</h3>
        <p>Complex, chaotic systems exceed low-order centralized models. Preserve freedom to experiment and adapt.</p>
        <b>STATE / OPEN</b>
      </article>
      <article>
        <div class="card-top"><span>03 / AGENCY</span><i>↗</i></div>
        <h3>Participate in the acceleration.</h3>
        <p>The process is larger than any one actor, but humans have agency now over its direction and the conditions in which consciousness flourishes.</p>
        <b>STATE / IN MOTION</b>
      </article>
    </div>
  </section>

  <section class="finale">
    <div class="finale-grid" aria-hidden="true"></div>
    <div class="finale-target" aria-hidden="true"><span></span><i></i></div>
    <p class="finale-kicker"><span></span> SYSTEM DIRECTIVE / 001</p>
    <h2>Accelerate what<br />can <em>flourish.</em></h2>
    <p class="finale-dek">Increase the scope, scale, variety, and resilience of life and intelligence.</p>
    <a href={`${base}/manifesto/#commit`}>Choose acceleration <span>↗</span></a>
    <div class="finale-state"><span>eacc.space</span><span>CONSCIOUSNESS / OUTWARD</span><span>NO FINAL STATE</span></div>
  </section>
</main>

<style>
  :global(main) { background: var(--paper); }

  .hero {
    position: relative;
    display: flex;
    min-height: calc(100svh - 72px);
    overflow: hidden;
    isolation: isolate;
    color: #f4f1e8;
    background: #11130f;
  }

  .hero > picture,
  .hero-wash,
  .hero-grid {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .hero > picture { z-index: -3; }

  .hero-art {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: saturate(.7) contrast(1.12) brightness(.75);
    animation: boot-image 1.1s cubic-bezier(.2,.7,.2,1) both;
  }

  .hero-wash {
    z-index: -2;
    background:
      linear-gradient(90deg, rgba(8, 10, 9, .96) 0%, rgba(8, 10, 9, .83) 31%, rgba(8, 10, 9, .19) 64%),
      linear-gradient(0deg, rgba(8, 10, 9, .94) 0%, transparent 38%);
  }

  .hero-grid,
  .finale-grid,
  .panel-grid {
    z-index: -1;
    opacity: .18;
    background-image:
      linear-gradient(rgba(223, 255, 79, .24) 1px, transparent 1px),
      linear-gradient(90deg, rgba(223, 255, 79, .24) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: linear-gradient(90deg, black, transparent 68%);
  }

  .hero::after {
    position: absolute;
    z-index: 1;
    inset: -20% 0 auto;
    height: 14%;
    pointer-events: none;
    background: linear-gradient(transparent, rgba(223, 255, 79, .07), transparent);
    content: '';
    animation: scan 7s linear infinite;
  }

  .hero-frame { position: absolute; z-index: 2; inset: 18px; pointer-events: none; }
  .hero-frame i { position: absolute; width: 28px; height: 28px; border-color: rgba(223,255,79,.75); border-style: solid; }
  .hero-frame i:nth-child(1) { top: 0; left: 0; border-width: 1px 0 0 1px; }
  .hero-frame i:nth-child(2) { top: 0; right: 0; border-width: 1px 1px 0 0; }
  .hero-frame i:nth-child(3) { right: 0; bottom: 0; border-width: 0 1px 1px 0; }
  .hero-frame i:nth-child(4) { bottom: 0; left: 0; border-width: 0 0 1px 1px; }

  .hero-system {
    position: absolute;
    z-index: 2;
    top: 2rem;
    right: max(2.3rem, calc((100vw - 1500px) / 2));
    display: grid;
    gap: .45rem;
    min-width: 220px;
    padding: 1rem;
    border: 1px solid rgba(255,255,255,.28);
    background: rgba(8,10,9,.45);
    backdrop-filter: blur(10px);
    font-family: 'IBM Plex Mono', monospace;
    font-size: .54rem;
    letter-spacing: .08em;
  }

  .hero-system span::before { margin-right: .7rem; color: var(--acid); content: '>'; }

  .hero-copy {
    position: relative;
    z-index: 2;
    width: min(100% - 72px, 1500px);
    margin: auto;
    padding: clamp(5rem, 8vh, 8rem) 0 12rem;
  }

  .kicker,
  .section-label,
  .vector-id,
  .orientation-grid .card-top,
  .orientation-grid article > b,
  .finale-kicker,
  .finale-state {
    font-family: 'IBM Plex Mono', monospace;
    font-size: .6rem;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  .kicker { display: flex; align-items: center; gap: .75rem; margin: 0 0 2.2rem; color: rgba(244,241,232,.72); }
  .kicker > span,
  .finale-kicker > span { width: 7px; height: 7px; background: var(--acid); box-shadow: 0 0 18px var(--acid); animation: blink 1.6s steps(1) infinite; }
  .kicker b { padding: .3rem .45rem; color: var(--ink); background: var(--acid); font-size: .5rem; font-weight: 600; }

  h1 {
    max-width: 810px;
    margin: 0;
    font-size: clamp(5rem, 10vw, 10.5rem);
    font-weight: 650;
    line-height: .74;
    letter-spacing: -.085em;
    text-transform: uppercase;
  }

  h1 strong {
    color: transparent;
    font-weight: inherit;
    -webkit-text-stroke: 1.5px var(--acid);
    text-shadow: 0 0 35px rgba(223,255,79,.16);
  }

  .hero-dek {
    max-width: 590px;
    margin: 2.5rem 0 0;
    color: rgba(244,241,232,.72);
    font-size: .92rem;
    line-height: 1.7;
  }

  .hero-actions { display: flex; align-items: center; gap: 2rem; margin-top: 2.6rem; }

  .primary-action,
  .finale > a {
    display: inline-flex;
    align-items: center;
    gap: 2rem;
    min-height: 50px;
    padding: 0 0 0 1.2rem;
    color: var(--ink);
    border: 1px solid var(--acid);
    background: var(--acid);
    font-family: 'IBM Plex Mono', monospace;
    font-size: .64rem;
    font-weight: 600;
    letter-spacing: .04em;
    text-transform: uppercase;
  }

  .primary-action span,
  .finale > a span { display: grid; place-items: center; align-self: stretch; width: 50px; border-left: 1px solid var(--ink); font-size: 1rem; transition: transform 180ms ease; }
  .primary-action:hover span,
  .finale > a:hover span { transform: translate(3px, -3px); }

  .text-action { display: inline-flex; align-items: center; gap: .8rem; padding-bottom: .5rem; color: #f4f1e8; border-bottom: 1px solid rgba(244,241,232,.5); font-family: 'IBM Plex Mono', monospace; font-size: .62rem; text-transform: uppercase; }
  .text-action i { color: var(--orange); font-style: normal; }

  .hero-index {
    position: absolute;
    z-index: 2;
    right: max(36px, calc((100vw - 1500px) / 2));
    bottom: 2rem;
    left: max(36px, calc((100vw - 1500px) / 2));
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(244,241,232,.38);
  }

  .hero-index div { display: grid; grid-template-columns: auto 1fr; gap: .35rem 1rem; padding: 1rem 1rem 0 0; font-family: 'IBM Plex Mono', monospace; font-size: .55rem; text-transform: uppercase; }
  .hero-index div + div { padding-left: 1.2rem; border-left: 1px solid rgba(244,241,232,.2); }
  .hero-index span { grid-row: 1 / 3; color: var(--orange); }
  .hero-index b { font-weight: 500; }
  .hero-index i { color: var(--acid); font-style: normal; }

  .thesis {
    position: relative;
    display: grid;
    grid-template-columns: .7fr 3.3fr;
    gap: 4rem;
    width: min(100% - 72px, 1440px);
    margin: auto;
    padding: clamp(8rem, 13vw, 13rem) 0;
  }

  .thesis::before,
  .orientation::before { position: absolute; inset: 0; z-index: 0; opacity: .42; pointer-events: none; background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px); background-size: 40px 40px; mask-image: linear-gradient(90deg, transparent, black 28%, transparent 90%); content: ''; }
  .thesis > *, .orientation > * { position: relative; z-index: 1; }

  .section-label { display: flex; gap: 1.2rem; align-self: start; }
  .section-label span { color: var(--orange); }
  .section-label p { margin: 0; }
  .section-label--light span { color: var(--acid); }

  .thesis-lead {
    max-width: 1160px;
    margin: 0;
    font-size: clamp(3.4rem, 7vw, 7.2rem);
    font-weight: 520;
    line-height: .91;
    letter-spacing: -.065em;
  }

  .thesis-lead em,
  .multipliers-head h2 em,
  blockquote em,
  .finale h2 em { color: var(--orange); font-style: normal; }

  .thesis-note {
    display: grid;
    grid-template-columns: auto minmax(260px, 640px) auto;
    gap: 2rem;
    align-items: start;
    margin: 5.5rem 0 0;
    padding: 1.4rem 0;
    border-top: 1px solid var(--ink);
    border-bottom: 1px solid var(--line);
  }

  .thesis-code,
  .thesis-state { font-family: 'IBM Plex Mono', monospace; font-size: .56rem; letter-spacing: .06em; text-transform: uppercase; }
  .thesis-code { color: var(--orange); }
  .thesis-note p { margin: 0; color: var(--muted); font-size: .84rem; line-height: 1.75; }
  .thesis-state { justify-self: end; white-space: nowrap; }
  .thesis-state i { display: inline-block; width: 6px; height: 6px; margin-right: .55rem; background: var(--acid-dark); }

  .multipliers { padding: clamp(7rem, 10vw, 10rem) max(36px, calc((100vw - 1440px) / 2)); color: #f4f1e8; background: var(--deep); }
  .multipliers-head { display: grid; grid-template-columns: .8fr 2fr 1fr; gap: 4rem; align-items: end; margin-bottom: 5rem; }
  .multipliers-head h2,
  .orientation-head h2,
  .finale h2 { margin: 0; font-size: clamp(4rem, 7.6vw, 8rem); font-weight: 600; line-height: .82; letter-spacing: -.075em; text-transform: uppercase; }
  .multipliers-head > p { max-width: 300px; margin: 0; color: rgba(244,241,232,.55); font-size: .82rem; line-height: 1.7; }

  .vector-system { display: grid; grid-template-columns: minmax(280px,.72fr) 1.28fr; min-height: 660px; border: 1px solid rgba(244,241,232,.25); box-shadow: 0 0 0 8px rgba(244,241,232,.025); }
  .vector-tabs { display: flex; flex-direction: column; border-right: 1px solid rgba(244,241,232,.25); }
  .vector-tabs button { display: grid; grid-template-columns: 2.8rem 1fr auto; align-items: center; flex: 1; padding: 0 1.5rem; color: rgba(244,241,232,.48); border: 0; border-bottom: 1px solid rgba(244,241,232,.16); background: transparent; font: inherit; text-align: left; cursor: pointer; transition: color 160ms ease, background 160ms ease; }
  .vector-tabs button:last-child { border-bottom: 0; }
  .vector-tabs button:hover { color: white; background: rgba(255,255,255,.03); }
  .vector-tabs button[aria-pressed='true'] { color: var(--ink); background: var(--acid); }
  .vector-tabs button span,
  .vector-tabs button i { font-family: 'IBM Plex Mono', monospace; font-size: .52rem; font-style: normal; letter-spacing: .06em; }
  .vector-tabs button b { font-size: 1.2rem; font-weight: 520; }

  .vector-panel { position: relative; display: flex; flex-direction: column; padding: clamp(2.2rem,5vw,5rem); overflow: hidden; background: #151a17; }
  .panel-grid { position: absolute; inset: 0; z-index: 0; mask-image: linear-gradient(135deg, transparent 10%, black 90%); }
  .vector-signal { position: absolute; z-index: 0; top: .02em; right: -.02em; color: transparent; font-family: 'IBM Plex Mono', monospace; font-size: clamp(6rem,14vw,14rem); font-weight: 700; line-height: .8; letter-spacing: -.1em; -webkit-text-stroke: 1px rgba(223,255,79,.16); writing-mode: vertical-rl; }
  .vector-id { position: relative; z-index: 1; display: flex; align-items: center; gap: .7rem; margin: 0; color: var(--acid); }
  .vector-id span { width: 26px; height: 1px; background: var(--acid); }
  .vector-panel h3 { position: relative; z-index: 1; max-width: 720px; margin: 3rem 0 0; font-size: clamp(3.2rem,5vw,5.6rem); font-weight: 520; line-height: .92; letter-spacing: -.06em; }
  .vector-body { position: relative; z-index: 1; max-width: 570px; margin: auto 0 0; color: rgba(244,241,232,.62); font-size: .84rem; line-height: 1.75; }
  .vector-stat { position: relative; z-index: 1; display: grid; grid-template-columns: auto 1fr auto; gap: 1rem; align-items: center; margin-top: 2.8rem; font-family: 'IBM Plex Mono', monospace; font-size: .52rem; text-transform: uppercase; }
  .vector-stat i { height: 1px; background: rgba(244,241,232,.24); }
  .vector-stat b { color: var(--acid); font-weight: 400; }

  .machine-window { display: grid; grid-template-columns: 1.08fr .92fr; min-height: 780px; color: #f4f1e8; background: #111512; border-top: 1px solid var(--acid); }
  .machine-image { position: relative; overflow: hidden; border-right: 1px solid rgba(244,241,232,.2); }
  .machine-image picture { display: block; width: 100%; height: 100%; }
  .machine-image img { width: 100%; height: 100%; object-fit: cover; object-position: 48% center; filter: grayscale(.35) sepia(.2) contrast(1.15) brightness(.68); transform: scale(1.28); }
  .machine-image::after { position: absolute; inset: 0; background: repeating-linear-gradient(0deg, transparent 0 5px, rgba(10,14,11,.09) 6px); content: ''; pointer-events: none; }
  .machine-overlay { position: absolute; z-index: 2; right: 1.4rem; bottom: 1.4rem; left: 1.4rem; display: grid; grid-template-columns: auto 1fr auto; gap: 1rem; align-items: center; padding: .8rem 1rem; border: 1px solid rgba(223,255,79,.55); background: rgba(8,10,9,.62); backdrop-filter: blur(8px); font-family: 'IBM Plex Mono', monospace; font-size: .5rem; letter-spacing: .08em; }
  .machine-overlay i { height: 1px; background: rgba(223,255,79,.45); }
  .machine-copy { display: flex; flex-direction: column; justify-content: center; padding: clamp(3rem,6vw,7rem); background-image: radial-gradient(circle at 85% 15%, rgba(255,90,54,.13), transparent 32%); }
  blockquote { margin: 5rem 0 0; font-size: clamp(2.6rem,4.1vw,4.7rem); font-weight: 500; line-height: 1.08; letter-spacing: -.05em; }
  blockquote > span { display: inline-block; width: 2rem; color: var(--orange); font-family: 'IBM Plex Mono', monospace; font-size: .58rem; letter-spacing: 0; }
  blockquote em { color: var(--acid); }
  .machine-copy > a { align-self: flex-start; margin-top: 4rem; padding: .8rem 0; border-top: 1px solid rgba(244,241,232,.5); border-bottom: 1px solid rgba(244,241,232,.5); font-family: 'IBM Plex Mono', monospace; font-size: .58rem; text-transform: uppercase; }
  .machine-copy > a span { margin-left: 2rem; color: var(--acid); }

  .orientation { position: relative; width: min(100% - 72px,1440px); margin: auto; padding: clamp(8rem,12vw,12rem) 0; }
  .orientation-head { display: grid; grid-template-columns: .8fr 2fr 1fr; gap: 4rem; align-items: end; }
  .orientation-head > p { max-width: 290px; margin: 0; color: var(--muted); font-size: .82rem; line-height: 1.7; }
  .orientation-grid { display: grid; grid-template-columns: repeat(3,1fr); margin-top: 6rem; border-top: 1px solid var(--ink); border-bottom: 1px solid var(--ink); }
  .orientation-grid article { position: relative; display: flex; flex-direction: column; min-height: 450px; padding: 1.4rem 1.6rem 1.6rem; overflow: hidden; background: rgba(244,241,232,.68); }
  .orientation-grid article + article { border-left: 1px solid var(--ink); }
  .orientation-grid article::after { position: absolute; right: -2.5rem; bottom: -2.5rem; width: 8rem; height: 8rem; border: 1px solid var(--line); transform: rotate(45deg); content: ''; }
  .card-top { display: flex; justify-content: space-between; color: var(--orange); }
  .card-top i { font-size: 1rem; font-style: normal; }
  .orientation-grid h3 { margin: auto 0 1.5rem; font-size: clamp(2.1rem,2.9vw,3.3rem); font-weight: 520; line-height: .95; letter-spacing: -.05em; }
  .orientation-grid p { min-height: 5.8rem; margin: 0; color: var(--muted); font-size: .78rem; line-height: 1.7; }
  .orientation-grid article > b { margin-top: 2rem; color: var(--acid-dark); font-weight: 500; }

  .finale { position: relative; min-height: 850px; padding: clamp(7rem,11vw,11rem) max(36px,calc((100vw - 1440px) / 2)); overflow: hidden; color: #f4f1e8; background: var(--orange); }
  .finale-grid { position: absolute; inset: 0; z-index: 0; opacity: .28; background-image: linear-gradient(rgba(11,14,12,.42) 1px,transparent 1px),linear-gradient(90deg,rgba(11,14,12,.42) 1px,transparent 1px); background-size: 56px 56px; mask-image: none; }
  .finale > *:not(.finale-grid,.finale-target) { position: relative; z-index: 2; }
  .finale-kicker { display: flex; align-items: center; gap: .8rem; margin: 0 0 5rem; color: var(--ink); }
  .finale-kicker > span { background: var(--ink); box-shadow: 0 0 14px rgba(11,14,12,.5); }
  .finale h2 { max-width: 1150px; color: var(--ink); font-size: clamp(5rem,10.2vw,10.8rem); }
  .finale h2 em { color: var(--acid); text-shadow: 0 0 40px rgba(223,255,79,.18); }
  .finale-dek { max-width: 510px; margin: 3rem 0 0; color: rgba(11,14,12,.72); font-size: .92rem; line-height: 1.7; }
  .finale > a { margin-top: 3rem; color: var(--ink); border-color: var(--ink); }
  .finale > a span { border-left-color: var(--ink); }
  .finale-target { position: absolute; z-index: 1; right: -15rem; bottom: -17rem; width: 48rem; height: 48rem; border: 1px solid rgba(11,14,12,.4); transform: rotate(45deg); }
  .finale-target span,.finale-target i { position: absolute; inset: 18%; border: 1px solid rgba(11,14,12,.4); }
  .finale-target i { inset: 37%; background: var(--acid); box-shadow: 0 0 55px rgba(223,255,79,.45); }
  .finale-state { position: absolute !important; right: max(36px,calc((100vw - 1440px) / 2)); bottom: 2rem; left: max(36px,calc((100vw - 1440px) / 2)); display: flex; justify-content: space-between; padding-top: 1rem; color: var(--ink); border-top: 1px solid rgba(11,14,12,.5); }

  @keyframes boot-image { from { opacity: 0; transform: scale(1.025); } to { opacity: 1; transform: scale(1); } }
  @keyframes scan { from { transform: translateY(0); } to { transform: translateY(850%); } }
  @keyframes blink { 0%,55% { opacity: 1; } 56%,100% { opacity: .25; } }

  @media (max-width: 980px) {
    .hero-wash { background: linear-gradient(90deg,rgba(8,10,9,.95) 0%,rgba(8,10,9,.76) 48%,rgba(8,10,9,.18) 90%),linear-gradient(0deg,rgba(8,10,9,.95),transparent 42%); }
    .thesis { grid-template-columns: 1fr; }
    .multipliers-head,.orientation-head { grid-template-columns: 1fr 2fr; }
    .multipliers-head > p,.orientation-head > p { grid-column: 2; }
    .vector-system { grid-template-columns: 1fr; }
    .vector-tabs { display: grid; grid-template-columns: repeat(5,minmax(130px,1fr)); overflow-x: auto; border-right: 0; border-bottom: 1px solid rgba(244,241,232,.25); }
    .vector-tabs button { display: flex; justify-content: center; min-height: 84px; padding: 1rem; border-right: 1px solid rgba(244,241,232,.16); border-bottom: 0; }
    .vector-tabs button span,.vector-tabs button i { display: none; }
    .vector-tabs button b { font-size: .85rem; }
    .vector-panel { min-height: 570px; }
    .machine-window { grid-template-columns: 1fr; }
    .machine-image { min-height: 580px; border-right: 0; border-bottom: 1px solid rgba(244,241,232,.2); }
    .machine-copy { min-height: 660px; }
    .orientation-grid { grid-template-columns: 1fr; }
    .orientation-grid article { min-height: 350px; }
    .orientation-grid article + article { border-top: 1px solid var(--ink); border-left: 0; }
  }

  @media (max-width: 680px) {
    .hero { min-height: 850px; }
    .hero-art { object-position: 61% center; }
    .hero-wash { background: linear-gradient(180deg,rgba(8,10,9,.92),rgba(8,10,9,.55) 48%,rgba(8,10,9,.96)); }
    .hero-frame { inset: 9px; }
    .hero-system { display: none; }
    .hero-copy { width: min(100% - 36px,1500px); padding: 4rem 0 15rem; }
    h1 { font-size: clamp(4.5rem,21vw,7rem); }
    .hero-actions { align-items: flex-start; flex-direction: column; }
    .hero-index { right: 18px; bottom: 1.4rem; left: 18px; grid-template-columns: repeat(2,1fr); }
    .hero-index div { padding: .75rem 0; }
    .hero-index div + div { padding-left: .8rem; }
    .hero-index div:nth-child(3) { padding-left: 0; border-top: 1px solid rgba(244,241,232,.25); border-left: 0; }
    .hero-index div:nth-child(4) { border-top: 1px solid rgba(244,241,232,.25); }
    .thesis,.orientation { width: min(100% - 36px,1440px); padding-block: 7rem; }
    .thesis-lead { font-size: clamp(3rem,13vw,4.8rem); }
    .thesis-note { grid-template-columns: 1fr; margin-top: 4rem; }
    .thesis-state { justify-self: start; }
    .multipliers { padding-inline: 18px; padding-block: 6rem; }
    .multipliers-head,.orientation-head { grid-template-columns: 1fr; gap: 2.5rem; }
    .multipliers-head > p,.orientation-head > p { grid-column: 1; }
    .vector-panel { min-height: 540px; padding: 2rem 1.3rem; }
    .vector-panel h3 { font-size: clamp(3rem,13vw,4.6rem); }
    .vector-stat { grid-template-columns: 1fr; }
    .vector-stat i { display: none; }
    .machine-image { min-height: 480px; }
    .machine-overlay { grid-template-columns: 1fr; }
    .machine-overlay i { display: none; }
    .machine-copy { min-height: 620px; padding: 4rem 1.3rem; }
    blockquote > span { width: 1.5rem; }
    .orientation-grid article { min-height: 380px; padding-inline: 1rem; }
    .finale { min-height: 760px; padding-inline: 18px; }
    .finale h2 { font-size: clamp(4.4rem,19vw,6.8rem); }
    .finale-state { right: 18px; left: 18px; gap: 1rem; overflow-x: auto; white-space: nowrap; }
  }
</style>
