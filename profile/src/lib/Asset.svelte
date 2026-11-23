<script lang="ts">
  import type { Snippet } from "svelte";
  let { name, w, h, children }: { name: string; w: number; h: number; children: Snippet } = $props();
</script>

<div class="asset" data-name={name} style="width:{w}px;height:{h}px">
  {@render children()}
</div>

<style>
  .asset {
    position: relative;
    overflow: hidden;
  }
</style>
