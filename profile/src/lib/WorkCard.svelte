<script lang="ts">
  import Icon from "./Icon.svelte";
  import { ICON_PATHS, ARROW, SIZES, type WorkCard } from "../data";

  let { card }: { card: WorkCard } = $props();

  const [W, H] = $derived(SIZES[card.size]);
  const scale = $derived(card.size === "third" ? 0.82 : card.size === "tall" ? 1.05 : 1);
  const inset = 12;
  const metaH = $derived(scale >= 1 ? 148 : 128);
  const shH = $derived(H - inset * 2 - metaH);
  const rOut = $derived(Math.round(W * 0.055));
  const ls = $derived(Math.round(72 * scale));
  const fsT = $derived(Math.round(33 * scale));
  const fsS = $derived(Math.round(26 * scale));
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
  <div class="chip" style="right:{card.arrow ? 110 : 28}px;top:{y + 28}px">
    <Icon path={ICON_PATHS[card.icon]} size={24} />{card.chip}
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
  .chip {
    position: absolute;
    height: 48px;
    padding: 0 18px 0 12px;
    border-radius: 24px;
    background: var(--chip);
    display: flex;
    align-items: center;
    gap: 9px;
    font-size: 22px;
    font-weight: 500;
    color: var(--mut);
    white-space: nowrap;
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
