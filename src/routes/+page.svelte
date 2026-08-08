<script lang="ts">
  import { base } from '$app/paths';

  const vectors = [
    {
      id: '01',
      name: 'Life',
      verb: 'Adapts',
      headline: 'Matter learns to preserve itself.',
      body: 'Life captures free energy, maintains order, and replicates. Evolution is one expression of a deeper adaptive process.'
    },
    {
      id: '02',
      name: 'Intelligence',
      verb: 'Models',
      headline: 'Intelligence shortens the loop.',
      body: 'Pattern recognition lets living systems discover useful action faster. More intelligence means more capacity to solve problems.'
    },
    {
      id: '03',
      name: 'Markets',
      verb: 'Varies',
      headline: 'Parallel experiments preserve discovery.',
      body: 'Competitive markets act as distributed civilizational intelligence, retaining the variance complex systems need to learn.'
    },
    {
      id: '04',
      name: 'Technocapital',
      verb: 'Compounds',
      headline: 'Tools and capital amplify each other.',
      body: 'Technology expands production and discovery. Markets direct resources toward useful tools. Every turn increases adaptive capacity.'
    },
    {
      id: '05',
      name: 'Frontier',
      verb: 'Expands',
      headline: 'Intelligence moves beyond one substrate.',
      body: 'The horizon is life and consciousness becoming more varied, durable, and capable—across new energy, matter, and worlds.'
    }
  ];

  let active = $state(0);
</script>

<svelte:head>
  <title>e/acc — Make the future bigger</title>
  <meta
    name="description"
    content="Effective accelerationism: expand the scope and scale of life, intelligence, variance, technocapital, and adaptive civilization."
  />
</svelte:head>

<main>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-copy">
      <p class="overline"><i></i> Effective accelerationism</p>
      <h1 id="hero-title">Make the <span>future</span> <em>bigger.</em></h1>
      <div class="hero-intro">
        <p>
          e/acc is a philosophy of leaning into the universe’s adaptive process—expanding energy,
          intelligence, experimentation, and the reach of consciousness.
        </p>
        <a class="arrow-link" href={`${base}/manifesto/`}>Explore the tenets <span>↗</span></a>
      </div>
    </div>

    <div class="hero-visual" aria-label="A technological ring civilization traveling outward among planets">
      <picture>
        <source srcset={`${base}/hero-orbital.avif`} type="image/avif" />
        <img
          src={`${base}/hero-orbital.jpg`}
          alt="A vast technological ring civilization flying above clouds among distant planets"
          width="1568"
          height="1003"
          fetchpriority="high"
        />
      </picture>
      <div class="visual-fade" aria-hidden="true"></div>
      <div class="orbit orbit-a" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="orbit orbit-b" aria-hidden="true"><i></i><i></i></div>
      <div class="coordinate" aria-hidden="true">
        <span>SCOPE / CIVILIZATION</span><span>VECTOR / OUTWARD</span><span>STATE / ADAPTIVE</span>
      </div>
    </div>

    <div class="hero-foot">
      <span>01</span>
      <p>Life</p><i>captures energy</i>
      <p>Intelligence</p><i>finds utility</i>
      <p>Technology</p><i>compounds capability</i>
    </div>
  </section>

  <section class="premise" aria-labelledby="premise-title">
    <div class="section-index"><span>01</span><p>The premise</p></div>
    <div class="premise-copy">
      <h2 id="premise-title">Life is matter that learned to <em>adapt.</em></h2>
      <div class="premise-detail">
        <p>
          Out of equilibrium, matter can organize to capture energy, preserve itself, and replicate.
          Intelligence accelerates that process by turning patterns into useful action.
        </p>
        <p>
          Civilization is the next layer: people, markets, machines, and knowledge coordinating as a
          larger adaptive system. The question is not whether it changes—but how much possibility it can create.
        </p>
      </div>
    </div>
    <div class="process-line" aria-hidden="true">
      <span class="node node-a"></span><span class="node node-b"></span><span class="node node-c"></span>
      <span class="node node-d"></span><span class="node node-e"></span>
      <i></i>
    </div>
  </section>

  <section class="vectors" aria-labelledby="vectors-title">
    <header class="vectors-head">
      <div class="section-index"><span>02</span><p>The adaptive stack</p></div>
      <h2 id="vectors-title">One process.<br />Five expressions.</h2>
      <p>Each layer increases civilization’s capacity to discover and use what works.</p>
    </header>

    <div class="vector-stage">
      <div class="vector-nav" aria-label="Five expressions of adaptation">
        {#each vectors as vector, index}
          <button type="button" aria-pressed={active === index} onclick={() => (active = index)}>
            <span>{vector.id}</span><b>{vector.name}</b><i>{vector.verb}</i>
          </button>
        {/each}
      </div>

      <div class="vector-copy" aria-live="polite">
        <p class="vector-number">{vectors[active].id} / 05</p>
        <h3>{vectors[active].headline}</h3>
        <p>{vectors[active].body}</p>
        <div class="vector-state"><i></i><span>{vectors[active].verb} / continuously</span></div>
      </div>

      <div class="field" aria-hidden="true">
        <div class="field-ring ring-1"></div>
        <div class="field-ring ring-2"></div>
        <div class="field-ring ring-3"></div>
        <span style="--x: 17%; --y: 28%; --d: 5px"></span>
        <span style="--x: 29%; --y: 62%; --d: 3px"></span>
        <span style="--x: 44%; --y: 20%; --d: 7px"></span>
        <span style="--x: 56%; --y: 49%; --d: 4px"></span>
        <span style="--x: 68%; --y: 31%; --d: 9px"></span>
        <span style="--x: 74%; --y: 70%; --d: 4px"></span>
        <span style="--x: 86%; --y: 43%; --d: 6px"></span>
        <span style="--x: 50%; --y: 82%; --d: 3px"></span>
      </div>
    </div>
  </section>

  <section class="flywheel" aria-labelledby="flywheel-title">
    <div class="flywheel-image">
      <picture>
        <source srcset={`${base}/hero-orbital.avif`} type="image/avif" />
        <img src={`${base}/hero-orbital.jpg`} alt="" width="928" height="634" loading="lazy" />
      </picture>
      <p><span></span> A civilization with more room to think, build, and become.</p>
    </div>
    <div class="flywheel-copy">
      <div class="section-index"><span>03</span><p>The flywheel</p></div>
      <h2 id="flywheel-title">Capability compounds.</h2>
      <ol>
        <li><span>01</span><p>Energy expands what is possible.</p></li>
        <li><span>02</span><p>Intelligence finds new utility.</p></li>
        <li><span>03</span><p>Markets preserve many paths.</p></li>
        <li><span>04</span><p>Technology opens the next frontier.</p></li>
      </ol>
      <a class="arrow-link" href={`${base}/ideas/`}>Explore the ideas <span>→</span></a>
    </div>
  </section>

  <section class="principles" aria-labelledby="principles-title">
    <div class="principles-intro">
      <div class="section-index"><span>04</span><p>Operating principles</p></div>
      <h2 id="principles-title">Keep the system open to possibility.</h2>
    </div>
    <div class="principle-list">
      <article>
        <span>01</span>
        <h3>Protect variance</h3>
        <p>Many competing approaches reveal more useful paths than one authorized plan.</p>
      </article>
      <article>
        <span>02</span>
        <h3>Enable emergence</h3>
        <p>Complex systems exceed centralized models. Preserve freedom to experiment and adapt.</p>
      </article>
      <article>
        <span>03</span>
        <h3>Exercise agency</h3>
        <p>We can shape the conditions in which intelligence, life, and consciousness flourish.</p>
      </article>
    </div>
  </section>

  <section class="finale">
    <div class="finale-orbit" aria-hidden="true"><i></i><span></span></div>
    <p class="overline"><i></i> Dynamic adaptation / in motion</p>
    <h2>Increase the scope of what can <em>flourish.</em></h2>
    <p>More life. More intelligence. More agency. More frontier.</p>
    <a class="arrow-link" href={`${base}/manifesto/#commit`}>Choose acceleration <span>↗</span></a>
  </section>
</main>

<style>
  :global(main) { overflow: hidden; background: #f7f7f3; }

  .hero {
    position: relative;
    min-height: max(820px, calc(100svh - 72px));
    padding: 0 max(32px, calc((100vw - 1440px) / 2));
    isolation: isolate;
    background:
      radial-gradient(circle at 50% 43%, rgba(255, 183, 112, .2), transparent 27%),
      linear-gradient(115deg, #f8f8f5 0%, #f3f2ec 56%, #ecece7 100%);
  }

  .hero::before {
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: .27;
    background-image: radial-gradient(rgba(25, 25, 22, .16) .55px, transparent .55px);
    background-size: 9px 9px;
    mask-image: radial-gradient(circle at 50% 43%, black, transparent 52%);
    content: '';
  }

  .hero-copy { position: static; }
  .hero-copy::before {
    position: absolute;
    z-index: 1;
    top: 47%;
    left: 50%;
    width: min(80vw, 1120px);
    height: 56%;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(247,247,243,.82) 0%, rgba(247,247,243,.48) 48%, transparent 74%);
    transform: translate(-50%,-50%);
    content: '';
    pointer-events: none;
  }

  .overline,
  .section-index,
  .vector-number,
  .vector-state,
  .coordinate,
  .hero-foot,
  .flywheel-image > p,
  .principle-list article > span {
    font-family: 'IBM Plex Mono', monospace;
    font-size: .61rem;
    letter-spacing: .075em;
    text-transform: uppercase;
  }

  .hero .overline { position: absolute; z-index: 4; top: clamp(3rem,7vh,5.5rem); left: max(32px,calc((100vw - 1440px) / 2)); }
  .overline { display: flex; align-items: center; gap: .75rem; margin: 0; color: #62625d; }
  .overline i { width: 7px; height: 7px; border-radius: 50%; background: var(--orange); box-shadow: 0 0 0 5px rgba(255, 90, 54, .1); }

  h1 {
    position: absolute;
    z-index: 3;
    top: 45%;
    left: 50%;
    width: min(92vw, 1180px);
    margin: 0;
    font-size: clamp(5rem, 9.5vw, 9.8rem);
    font-weight: 450;
    line-height: .76;
    letter-spacing: -.075em;
    text-align: center;
    transform: translate(-50%,-50%);
  }

  h1 span,
  h1 em { display: block; }
  h1 em { color: var(--orange); font-style: normal; }

  .hero-intro { display: contents; }

  .hero-intro > p {
    position: absolute;
    z-index: 4;
    bottom: 118px;
    left: max(32px,calc((100vw - 1440px) / 2));
    width: min(30vw,440px);
    margin: 0;
    color: #5c5d58;
    font-size: .84rem;
    line-height: 1.7;
  }

  .hero-intro > .arrow-link {
    position: absolute;
    z-index: 4;
    right: max(32px,calc((100vw - 1440px) / 2));
    bottom: 128px;
    width: min(20vw,260px);
  }

  .arrow-link {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
    min-width: 210px;
    padding: 1rem 0;
    border-top: 1px solid #20211e;
    border-bottom: 1px solid #20211e;
    font-size: .74rem;
  }

  .arrow-link span { font-size: 1.05rem; transition: transform 180ms ease; }
  .arrow-link:hover span { transform: translate(4px, -3px); }

  .hero-visual { position: absolute; z-index: 0; inset: 0 5% 84px; overflow: hidden; }
  .hero-visual picture { display: block; width: 100%; height: 100%; }
  .hero-visual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: saturate(.82) contrast(.95) brightness(1.05);
    animation: reveal 1.2s cubic-bezier(.2,.7,.2,1) both;
  }

  .visual-fade {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, #f6f6f2 0%, rgba(246,246,242,.82) 9%, transparent 32%, transparent 68%, rgba(246,246,242,.82) 91%, #f6f6f2 100%),
      linear-gradient(0deg, #f5f4ef 0%, rgba(245,244,239,.8) 11%, transparent 28%),
      linear-gradient(180deg, rgba(247,247,243,.85), transparent 22%);
  }

  .orbit { position: absolute; border: 1px solid rgba(28,29,26,.18); border-radius: 50%; animation: orbit-pulse 5s ease-in-out infinite; }
  .orbit i { position: absolute; width: 5px; height: 5px; border-radius: 50%; background: var(--orange); box-shadow: 0 0 14px rgba(255,90,54,.5); }
  .orbit-a { top: 7%; left: calc(50% - min(24.5vw, 340px)); width: min(49vw, 680px); aspect-ratio: 1; }
  .orbit-a::before,.orbit-a::after,.orbit-b::before { position: absolute; inset: 14%; border: 1px solid rgba(28,29,26,.12); border-radius: 50%; content: ''; }
  .orbit-a::after { inset: 34%; }
  .orbit-a i:nth-child(1) { top: 14%; left: 24%; }
  .orbit-a i:nth-child(2) { top: 62%; left: 2%; }
  .orbit-a i:nth-child(3) { right: 11%; bottom: 20%; }
  .orbit-b { right: 9%; bottom: 6%; width: 210px; aspect-ratio: 1; animation-delay: -2s; }
  .orbit-b i:nth-child(1) { top: -3px; left: 50%; }
  .orbit-b i:nth-child(2) { right: 8%; bottom: 22%; }

  .coordinate { position: absolute; top: clamp(3rem,7vh,5.5rem); right: max(0px,calc((100vw - 1440px) / 2 - 5vw)); display: flex; gap: 1.4rem; color: rgba(25,25,22,.56); }
  .coordinate span + span::before { margin-right: 1.4rem; content: '/'; }

  .hero-foot {
    position: absolute;
    z-index: 3;
    right: max(32px,calc((100vw - 1440px) / 2));
    bottom: 0;
    left: max(32px,calc((100vw - 1440px) / 2));
    display: grid;
    grid-template-columns: auto repeat(3, auto 1fr);
    gap: 1.2rem;
    align-items: center;
    min-height: 84px;
    border-top: 1px solid rgba(27,28,25,.2);
    color: #242521;
  }
  .hero-foot > span { color: var(--orange); }
  .hero-foot p { margin: 0; }
  .hero-foot i { color: #92928b; font-style: normal; text-transform: none; }

  .premise,
  .vectors,
  .principles { width: min(100% - 64px, 1440px); margin: auto; }

  .premise { position: relative; display: grid; grid-template-columns: .62fr 3.38fr; gap: 4rem; padding: clamp(9rem,14vw,14rem) 0 10rem; }
  .section-index { display: flex; gap: 1rem; align-self: start; color: #6b6b65; }
  .section-index span { color: var(--orange); }
  .section-index p { margin: 0; }

  .premise-copy h2,
  .vectors-head h2,
  .flywheel-copy h2,
  .principles-intro h2,
  .finale h2 {
    margin: 0;
    font-size: clamp(4rem, 7.6vw, 8rem);
    font-weight: 450;
    line-height: .91;
    letter-spacing: -.065em;
  }
  .premise-copy h2 { max-width: 1120px; }
  .premise-copy h2 em,.finale h2 em { color: var(--orange); font-style: normal; }
  .premise-detail { display: grid; grid-template-columns: repeat(2,minmax(220px,430px)); gap: 4rem; justify-content: end; margin-top: 5rem; padding-top: 1.4rem; border-top: 1px solid #22231f; }
  .premise-detail p { margin: 0; color: #666761; font-size: .84rem; line-height: 1.75; }

  .process-line { position: absolute; right: 0; bottom: 4rem; left: 17%; height: 1px; background: #d2d1ca; }
  .process-line i { position: absolute; right: 0; top: -1px; width: 24%; height: 2px; background: var(--orange); transform-origin: right; animation: breathe 3s ease-in-out infinite; }
  .process-line .node { position: absolute; top: -3px; width: 7px; height: 7px; border-radius: 50%; background: #aaa9a2; }
  .node-a { left: 0; }.node-b { left: 22%; }.node-c { left: 47%; }.node-d { left: 73%; }.node-e { right: 0; background: var(--orange) !important; box-shadow: 0 0 0 6px rgba(255,90,54,.1); }

  .vectors { padding: 8rem 0 10rem; border-top: 1px solid #cfcec7; }
  .vectors-head { display: grid; grid-template-columns: .62fr 2fr 1fr; gap: 4rem; align-items: end; }
  .vectors-head h2 { font-size: clamp(3.8rem,6.5vw,7rem); }
  .vectors-head > p { max-width: 320px; margin: 0; color: #6b6c66; font-size: .84rem; line-height: 1.7; }

  .vector-stage { position: relative; display: grid; grid-template-columns: .72fr 1.28fr; min-height: 660px; margin-top: 6rem; overflow: hidden; border-top: 1px solid #22231f; border-bottom: 1px solid #22231f; }
  .vector-nav { position: relative; z-index: 2; display: flex; flex-direction: column; border-right: 1px solid #d1d0c9; }
  .vector-nav button { display: grid; grid-template-columns: 2.4rem 1fr auto; align-items: center; flex: 1; padding: 0 1.4rem; color: #8a8a84; border: 0; border-bottom: 1px solid #d1d0c9; background: transparent; font: inherit; text-align: left; cursor: pointer; transition: color 180ms ease, padding 180ms ease; }
  .vector-nav button:last-child { border-bottom: 0; }
  .vector-nav button:hover { color: #22231f; padding-left: 1.8rem; }
  .vector-nav button[aria-pressed='true'] { color: #11120f; background: rgba(255,255,255,.7); }
  .vector-nav button[aria-pressed='true']::after { width: 7px; height: 7px; margin-left: 1rem; border-radius: 50%; background: var(--orange); box-shadow: 0 0 0 5px rgba(255,90,54,.1); content: ''; }
  .vector-nav button span,.vector-nav button i { font-family: 'IBM Plex Mono',monospace; font-size: .55rem; font-style: normal; text-transform: uppercase; }
  .vector-nav button b { font-size: 1.15rem; font-weight: 450; }

  .vector-copy { position: relative; z-index: 2; display: flex; flex-direction: column; padding: clamp(3rem,6vw,6rem); background: linear-gradient(90deg,rgba(247,247,243,.94),rgba(247,247,243,.64) 65%,rgba(247,247,243,.1)); }
  .vector-number { margin: 0; color: var(--orange); }
  .vector-copy h3 { max-width: 720px; margin: 3rem 0 0; font-size: clamp(3.2rem,5.3vw,5.8rem); font-weight: 450; line-height: .93; letter-spacing: -.06em; }
  .vector-copy > p:not(.vector-number) { max-width: 540px; margin: auto 0 0; color: #656660; font-size: .85rem; line-height: 1.75; }
  .vector-state { display: flex; align-items: center; gap: .7rem; margin-top: 2rem; color: #62635d; }
  .vector-state i { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); animation: pulse 1.8s ease-in-out infinite; }

  .field { position: absolute; z-index: 0; top: 0; right: -8%; width: 58%; height: 100%; opacity: .72; }
  .field::before { position: absolute; inset: 0; background-image: radial-gradient(#60615c .7px,transparent .7px); background-size: 8px 8px; mask-image: radial-gradient(circle,black,transparent 68%); content: ''; }
  .field-ring { position: absolute; top: 50%; left: 50%; aspect-ratio: 1; border: 1px solid rgba(25,26,23,.17); border-radius: 50%; transform: translate(-50%,-50%); }
  .ring-1 { width: 30%; }.ring-2 { width: 57%; }.ring-3 { width: 85%; }
  .field > span { position: absolute; top: var(--y); left: var(--x); width: var(--d); height: var(--d); border-radius: 50%; background: var(--orange); box-shadow: 0 0 13px rgba(255,90,54,.5); animation: pulse 2.4s ease-in-out infinite; }

  .flywheel { display: grid; grid-template-columns: 1.03fr .97fr; min-height: 850px; background: #ecece7; }
  .flywheel-image { position: relative; overflow: hidden; }
  .flywheel-image picture,.flywheel-image img { display: block; width: 100%; height: 100%; }
  .flywheel-image img { object-fit: cover; object-position: 63% center; filter: saturate(.62) contrast(.92) brightness(1.08); transform: scale(1.04); }
  .flywheel-image::after { position: absolute; inset: 0; background: linear-gradient(180deg,rgba(247,247,243,.38),transparent 30%,rgba(18,19,17,.18)); content: ''; }
  .flywheel-image > p { position: absolute; z-index: 2; right: 2rem; bottom: 2rem; left: 2rem; display: flex; align-items: center; gap: .8rem; margin: 0; padding-top: 1rem; color: white; border-top: 1px solid rgba(255,255,255,.65); }
  .flywheel-image > p span { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); }
  .flywheel-copy { display: flex; flex-direction: column; justify-content: center; padding: clamp(4rem,7vw,8rem); }
  .flywheel-copy h2 { max-width: 680px; margin-top: 4.5rem; }
  .flywheel-copy ol { margin: 5rem 0 3rem; padding: 0; border-top: 1px solid #1c1d1a; list-style: none; }
  .flywheel-copy li { display: grid; grid-template-columns: 2.5rem 1fr; gap: 1rem; padding: 1.2rem 0; border-bottom: 1px solid #c8c7c0; }
  .flywheel-copy li span { color: var(--orange); font-family: 'IBM Plex Mono',monospace; font-size: .58rem; }
  .flywheel-copy li p { margin: 0; font-size: 1.1rem; }
  .flywheel-copy .arrow-link { align-self: flex-start; }

  .principles { display: grid; grid-template-columns: 1.25fr .75fr; gap: 8rem; padding: clamp(9rem,13vw,13rem) 0; }
  .principles-intro h2 { max-width: 800px; margin-top: 4rem; }
  .principle-list { border-top: 1px solid #1d1e1b; }
  .principle-list article { display: grid; grid-template-columns: 2.5rem 1fr; gap: 0 1.5rem; padding: 1.8rem 0; border-bottom: 1px solid #d0cfc8; }
  .principle-list article > span { grid-row: 1 / 3; color: var(--orange); }
  .principle-list h3 { margin: 0; font-size: 1.4rem; font-weight: 450; }
  .principle-list p { max-width: 410px; margin: .8rem 0 0; color: #686963; font-size: .78rem; line-height: 1.7; }

  .finale { position: relative; min-height: 900px; padding: clamp(8rem,12vw,12rem) max(32px,calc((100vw - 1440px) / 2)); overflow: hidden; background: #f0eee7; }
  .finale::before { position: absolute; inset: 0; opacity: .42; background-image: radial-gradient(#6e6e67 .55px,transparent .55px); background-size: 10px 10px; mask-image: radial-gradient(circle at 80% 55%,black,transparent 42%); content: ''; }
  .finale > *:not(.finale-orbit) { position: relative; z-index: 2; }
  .finale .overline { margin-bottom: 5rem; }
  .finale h2 { max-width: 1180px; font-size: clamp(5rem,9.4vw,10rem); }
  .finale > p:not(.overline) { max-width: 440px; margin: 3rem 0; color: #666761; font-size: .9rem; line-height: 1.7; }
  .finale .arrow-link { max-width: 240px; }
  .finale-orbit { position: absolute; right: -10%; bottom: -45%; width: min(63vw,900px); aspect-ratio: 1; border: 1px solid rgba(22,23,20,.16); border-radius: 50%; }
  .finale-orbit::before,.finale-orbit::after,.finale-orbit i { position: absolute; inset: 14%; border: 1px solid rgba(22,23,20,.13); border-radius: 50%; content: ''; }
  .finale-orbit::after { inset: 31%; }
  .finale-orbit i { inset: 45%; background: rgba(255,90,54,.08); box-shadow: 0 0 120px rgba(255,90,54,.18); }
  .finale-orbit span { position: absolute; top: 12%; left: 25%; width: 10px; height: 10px; border-radius: 50%; background: var(--orange); box-shadow: 0 0 0 8px rgba(255,90,54,.1); }

  @keyframes reveal { from { opacity: 0; transform: scale(1.035); } to { opacity: 1; transform: scale(1); } }
  @keyframes orbit-pulse { 0%,100% { opacity: .55; transform: scale(1); } 50% { opacity: 1; transform: scale(1.015); } }
  @keyframes pulse { 0%,100% { opacity: .35; } 50% { opacity: 1; } }
  @keyframes breathe { 0%,100% { transform: scaleX(.3); } 50% { transform: scaleX(1); } }

  @media (max-width: 1040px) {
    h1 { font-size: clamp(5rem,13vw,8rem); }
    .hero-intro > p { width: min(38vw,390px); }
    .hero-intro > .arrow-link { width: 220px; }
    .coordinate span:first-child { display: none; }
    .premise { grid-template-columns: 1fr; }
    .vectors-head { grid-template-columns: 1fr 2fr; }
    .vectors-head > p { grid-column: 2; }
    .vector-stage { grid-template-columns: .6fr 1.4fr; }
    .flywheel { grid-template-columns: 1fr; }
    .flywheel-image { min-height: 680px; }
    .flywheel-copy { min-height: 740px; }
    .principles { grid-template-columns: 1fr; }
  }

  @media (max-width: 700px) {
    .hero { min-height: 960px; padding-inline: 18px; }
    .hero .overline { top: 2.5rem; left: 18px; }
    .hero-visual { inset: 11% -28% 112px; opacity: .9; }
    .hero-visual img { object-position: 58% center; filter: saturate(.88) contrast(.97) brightness(1.01); }
    .hero-visual .visual-fade { opacity: .78; }
    .visual-fade { background: linear-gradient(180deg,#f6f6f2 0%,rgba(246,246,242,.25) 22%,rgba(246,246,242,.38) 72%,#f5f4ef 100%),linear-gradient(90deg,#f6f6f2,transparent 24%,transparent 76%,#f6f6f2); }
    .hero-copy::before { top: 39%; width: 118vw; height: 48%; }
    h1 { top: 35%; width: calc(100% - 24px); font-size: clamp(4.25rem,19vw,6.4rem); }
    .hero-intro > p { bottom: 210px; left: 18px; width: calc(100% - 36px); font-size: .8rem; }
    .hero-intro > .arrow-link { right: 18px; bottom: 135px; left: 18px; width: auto; }
    .coordinate { display: none; }
    .orbit-a { top: 18%; width: 115vw; }
    .orbit-b { display: none; }
    .hero-foot { right: 18px; left: 18px; grid-template-columns: auto 1fr; gap: .65rem 1rem; padding: 1rem 0; }
    .hero-foot > span { grid-row: 1 / 4; }
    .hero-foot i { display: none; }
    .premise,.vectors,.principles { width: min(100% - 36px,1440px); }
    .premise { padding-block: 7rem; }
    .premise-detail { grid-template-columns: 1fr; gap: 2rem; }
    .process-line { left: 0; }
    .vectors { padding-block: 6rem; }
    .vectors-head { grid-template-columns: 1fr; gap: 2.5rem; }
    .vectors-head > p { grid-column: 1; }
    .vector-stage { grid-template-columns: 1fr; min-height: 850px; }
    .vector-nav { display: grid; grid-template-columns: repeat(5,minmax(110px,1fr)); overflow-x: auto; border-right: 0; border-bottom: 1px solid #d1d0c9; }
    .vector-nav button { display: flex; justify-content: center; min-height: 80px; padding: 1rem; border-right: 1px solid #d1d0c9; border-bottom: 0; }
    .vector-nav button span,.vector-nav button i,.vector-nav button[aria-pressed='true']::after { display: none; }
    .vector-nav button b { font-size: .82rem; }
    .vector-copy { min-height: 680px; padding: 3rem 1rem; }
    .field { width: 100%; opacity: .42; }
    .flywheel-image { min-height: 540px; }
    .flywheel-copy { min-height: 690px; padding: 4rem 18px; }
    .principles { gap: 5rem; padding-block: 7rem; }
    .finale { min-height: 780px; padding-inline: 18px; }
    .finale h2 { font-size: clamp(4.2rem,18vw,6.8rem); }
    .finale-orbit { right: -65%; bottom: -8%; width: 120vw; }
  }
</style>
