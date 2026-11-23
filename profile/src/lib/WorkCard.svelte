<script lang="ts">
  import Icon from "./Icon.svelte";
  import { ARROW, CATS, SIZES, type WorkCard } from "../data";
  import IconOss from "virtual:icons/simple-icons/opensourceinitiative";
  import IconDesktop from "virtual:icons/tabler/device-desktop";
  import IconWeb from "virtual:icons/tabler/world";
  import IconCloud from "virtual:icons/tabler/cloud";
  import IconRevenue from "virtual:icons/tabler/chart-line";

  let { card }: { card: WorkCard } = $props();

  const CAT_ICONS = {
    oss: IconOss,
    desktop: IconDesktop,
    web: IconWeb,
    cloud: IconCloud,
    revenue: IconRevenue,
  };

  const [W, H] = $derived(SIZES[card.size]);
  const scale = $derived(card.size === "third" ? 0.82 : card.size === "tall" ? 1.05 : 1);
  const inset = 12;
  const metaH = $derived(scale >= 1 ? 148 : 128);
  const shH = $derived(H - inset * 2 - metaH);
  const rOut = $derived(Math.round(W * 0.055));
  const ls = $derived(Math.round(72 * scale));
  const fsT = $derived(Math.round(33 * scale));
  const fsS = $derived(Math.round(26 * scale));
  const chipFs = $derived(Math.round(21 * scale));
  const chipH = $derived(Math.round(48 * scale));
  const chipIco = $derived(Math.round(22 * scale));
  const y = $derived(inset + shH);
</script>

<div
  class="card"
  style="width:{W}px;height:{H}px;border-radius:{rOut}px"
>
  <div
    class="shot"
    style="left:{inset}px;top:{inset}px;width:{W - inset * 2}px;height:{shH}px;border-radius:{rOut - 10}px;background-image:url('/media/shots/{card.shot}');background-position:{card.shotPos ?? 'top center'}"
  ></div>
  <img
    class="logo"
    class:tile={card.logoTile}
    src="/media/logos/{card.logo}"
    alt=""
    style="left:28px;top:{y + 26}px;width:{ls}px;height:{ls}px;border-radius:{Math.round(ls * 0.26)}px"
  />
  <div class="title" style="left:{28 + ls + 24}px;top:{y + 22}px;font-size:{fsT}px">{card.title}</div>
  <div class="sub" style="left:{28 + ls + 24}px;top:{y + 22 + Math.round(fsT * 1.45)}px;font-size:{fsS}px">{card.sub}</div>
  <div class="chips" style="right:{card.arrow ? 104 : 28}px;top:{y + 22}px;max-width:{W - (28 + ls + 24) - (card.arrow ? 104 : 28) - 48}px">
    {#each card.cats as cat}
      {@const CatIcon = CAT_ICONS[cat]}
      <div class="chip" style="font-size:{chipFs}px;min-height:{chipH}px">
        <span class="catico" style="color:{CATS[cat].color === 'plain' ? 'var(--mut)' : CATS[cat].color}"><CatIcon width={chipIco} height={chipIco} /></span>
        {CATS[cat].label}
      </div>
    {/each}
    {#if card.tag}
      <div class="chip tag" style="font-size:{chipFs}px;min-height:{chipH}px">{card.tag}</div>
    {/if}
  </div>
  {#if card.arrow}
    <div class="arrow" style="right:28px;top:{y + 26}px"><Icon path={ARROW} size={26} stroke="var(--fg)" /></div>
  {/if}
</div>

<style>
  .card {
    position: relative;
    background: var(--card);
    overflow: hidden;
  }
  .shot {
    position: absolute;
    overflow: hidden;
    background-color: #fff;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .logo {
    position: absolute;
  }
  .logo.tile {
    background: #fff;
    padding: 8px;
    border: 1px solid #e3e3df;
    box-sizing: content-box;
  }
  .title {
    position: absolute;
    font-weight: 600;
    letter-spacing: -0.4px;
    white-space: nowrap;
    color: var(--fg);
  }
  .sub {
    position: absolute;
    color: var(--mut);
    letter-spacing: -0.2px;
    white-space: nowrap;
  }
  .chips {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: flex-end;
  }
  .chip {
    padding: 8px 16px 8px 12px;
    border-radius: 999px;
    background: var(--chip);
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    color: var(--mut);
    line-height: 1.15;
  }
  .chip.tag {
    padding: 8px 16px;
    color: var(--fg);
    font-weight: 600;
    background: transparent;
    border: 2px solid var(--chip);
  }
  .catico {
    display: inline-flex;
  }
  .arrow {
    position: absolute;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: var(--chip);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
