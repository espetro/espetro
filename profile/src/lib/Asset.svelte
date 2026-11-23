<script lang="ts">
  import type { Snippet } from "svelte";
  let { name, w, h, px = 0, py = 0, children }:
    { name: string; w: number; h: number; px?: number; py?: number; children: Snippet } = $props();
</script>

<div class="asset" data-name={name} style="width:{w + 2 * px}px;height:{h + 2 * py}px;padding:{py}px {px}px">
  {@render children()}
</div>

<style>
  .asset {
    position: relative;
    overflow: hidden;
  }
</style>
