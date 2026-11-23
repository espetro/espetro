<script lang="ts">
  let { bold, rest }: { bold: string; rest: string } = $props();
</script>

<div class="h">{bold} <span class="rest">{rest}</span></div>

<style>
  .h {
    font-size: 50px;
    font-weight: 700;
    letter-spacing: -1.2px;
    white-space: nowrap;
    padding-top: 10px;
    color: var(--fg);
  }
  .rest {
    font-weight: 400;
    color: var(--mut);
    letter-spacing: -0.6px;
  }
</style>
