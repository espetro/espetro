<script lang="ts">
  import WorkCard from "./WorkCard.svelte";
  import { SIZES, type WorkCard as Card } from "../data";

  let { cards, gap = 24 }: { cards: Card[]; gap?: number } = $props();

  const W = $derived(Math.max(...cards.map((c) => SIZES[c.size][0])));
  const H = $derived(cards.reduce((s, c) => s + SIZES[c.size][1], 0) + gap * (cards.length - 1));
</script>

<div class="col" style="width:{W}px;height:{H}px;display:flex;flex-direction:column;gap:{gap}px">
  {#each cards as card}
    <WorkCard {card} />
  {/each}
</div>
