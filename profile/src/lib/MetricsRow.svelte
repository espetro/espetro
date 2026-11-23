<script lang="ts">
  import { metrics } from "../data";
  const bw = 440;
</script>

<div class="row">
  {#each metrics as m, i}
    <div class="col" class:divider={i > 0}>
      <div class="role">{m.role}</div>
      <div class="big">{m.big}</div>
      <div class="lab">{m.label}</div>
      <div class="bar">
        <div class="fill muted" style="width:{(m.before / 100) * bw}px"></div>
        <span class="val">{m.bl}</span>
      </div>
      <div class="bar">
        <div class="fill" style="width:{(m.after / 100) * bw}px"></div>
        <span class="val strong">{m.al}</span>
      </div>
    </div>
  {/each}
</div>

<style>
  .row {
    display: flex;
    width: 1760px;
    padding-top: 8px;
  }
  .col {
    flex: 1;
    padding: 8px 56px 8px 0;
  }
  .col.divider {
    border-left: 2px solid var(--grid);
    padding-left: 56px;
  }
  .role {
    font-size: 22px;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    color: var(--mut);
    font-weight: 600;
  }
  .big {
    font-size: 176px;
    font-weight: 600;
    letter-spacing: -9px;
    line-height: 1;
    margin: 34px 0 8px -6px;
    color: var(--fg);
  }
  .lab {
    font-size: 34px;
    font-weight: 500;
    letter-spacing: -0.4px;
    margin-bottom: 44px;
    color: var(--fg);
  }
  .bar {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 12px;
  }
  .fill {
    height: 14px;
    border-radius: 7px;
    background: var(--fg);
  }
  .fill.muted {
    background: var(--bar0);
  }
  .val {
    font-size: 22px;
    color: var(--mut);
    white-space: nowrap;
  }
  .val.strong {
    color: var(--fg);
    font-weight: 600;
  }
</style>
