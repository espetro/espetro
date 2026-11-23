<script lang="ts">
  import "./tokens.css";
  import Asset from "./lib/Asset.svelte";
  import Hero from "./lib/Hero.svelte";
  import Pill from "./lib/Pill.svelte";
  import SectionHeader from "./lib/SectionHeader.svelte";
  import WorkCard from "./lib/WorkCard.svelte";
  import MetricsRow from "./lib/MetricsRow.svelte";
  import StackPills from "./lib/StackPills.svelte";
  import SocialPill from "./lib/SocialPill.svelte";
  import { buttons, headers, work, socials, SIZES } from "./data";

  const theme = new URLSearchParams(location.search).get("theme") ?? "light";
</script>

<div class="root" data-theme={theme}>
  <Asset name="hero" w={1760} h={452}><Hero /></Asset>

  {#each buttons as b}
    <Asset name="btn-{b.key}" w={b.w} h={96}><Pill label={b.label} primary={b.primary} w={b.w} /></Asset>
  {/each}

  {#each Object.entries(headers) as [key, h]}
    <Asset name="h-{key}" w={1760} h={84}><SectionHeader bold={h.bold} rest={h.rest} /></Asset>
  {/each}

  {#each work as c}
    {@const [w, h] = SIZES[c.size]}
    <Asset name="card-{c.key}" {w} {h} px={16} py={10}><WorkCard card={c} /></Asset>
  {/each}

  <Asset name="metrics-a" w={1760} h={470}><MetricsRow /></Asset>
  <Asset name="stack" w={1760} h={280}><StackPills /></Asset>

  {#each socials as s}
    <Asset name="s-{s.key}" w={s.w} h={80}><SocialPill label={s.label} icon={s.icon} w={s.w} /></Asset>
  {/each}
</div>

<style>
  .root {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
</style>
