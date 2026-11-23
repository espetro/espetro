<script lang="ts">
  // Stroke icon from a path payload, or a monochrome brand SVG made theme-aware via currentColor.
  let { path = null, raw = null, size = 24, stroke = "currentColor" }:
    { path?: string | null; raw?: string | null; size?: number; stroke?: string } = $props();

  const tinted = $derived(
    raw ? raw.replace("<svg ", '<svg fill="currentColor" ') : null
  );
</script>

{#if path}
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    {@html path}
  </svg>
{:else if tinted}
  <span class="raw" style="width:{size}px;height:{size}px">{@html tinted}</span>
{/if}

<style>
  .raw {
    display: inline-flex;
  }
  .raw :global(svg) {
    width: 100%;
    height: 100%;
  }
</style>
