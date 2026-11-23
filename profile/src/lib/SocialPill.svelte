<script lang="ts">
  import Icon from "./Icon.svelte";
  import { iconRaw } from "../icons";

  let { label, icon, w }: { label: string; icon: string | null; w: number } = $props();

  const paths: Record<string, string> = {
    mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 8 8 6 8-6"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  };
</script>

<div class="pill" style="width:{w}px">
  {#if icon && paths[icon]}
    <Icon path={paths[icon]} size={38} />
  {:else if icon && iconRaw(icon)}
    <Icon raw={iconRaw(icon)} size={38} />
  {/if}
  {label}
</div>

<style>
  .pill {
    height: 80px;
    border-radius: 40px;
    background: var(--pill);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: -0.3px;
    padding: 0 26px;
    color: var(--fg);
  }
</style>
