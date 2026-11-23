<script lang="ts">
  import { stack } from "../data";
  import { iconRaw } from "../icons";
  import Icon from "./Icon.svelte";
</script>

<div class="wrap">
  {#each stack as s}
    <div class="pill">
      {#if s.icon && iconRaw(s.icon)}<Icon raw={iconRaw(s.icon)} size={38} />{/if}
      {s.label}
    </div>
  {/each}
</div>

<style>
  .wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 1760px;
  }
  .pill {
    height: 80px;
    border-radius: 40px;
    background: var(--pill);
    padding: 0 32px;
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 34px;
    font-weight: 500;
    letter-spacing: -0.4px;
    white-space: nowrap;
    color: var(--fg);
  }
</style>
