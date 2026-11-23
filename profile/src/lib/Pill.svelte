<script lang="ts">
  import Icon from "./Icon.svelte";
  import { ARROW } from "../data";
  let { label, primary = false, w }: { label: string; primary?: boolean; w: number } = $props();
</script>

<div
  class="pill"
  class:primary
  style="width:{w}px"
>
  {label}<Icon path={ARROW} size={30} />
</div>

<style>
  .pill {
    height: 96px;
    border-radius: 48px;
    background: var(--btn2-bg);
    color: var(--btn2-fg);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 26px;
    font-size: 32px;
    font-weight: 500;
    letter-spacing: -0.3px;
  }
  .pill.primary {
    background: var(--btn1-bg);
    color: var(--btn1-fg);
  }
</style>
