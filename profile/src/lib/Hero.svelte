<script lang="ts">
  import { hero } from "../data";
</script>

<img class="avatar" src="/media/logos/avatar.png" alt="" />
<div class="name">{hero.name}</div>
<div class="status"><span class="dot"></span>{hero.status}</div>
<div class="headline">
  {hero.line1}<br /><span class="muted">{hero.line2}</span>
</div>

<style>
  .avatar {
    position: absolute;
    left: 0;
    top: 16px;
    width: 112px;
    height: 112px;
    border-radius: 30px;
    object-fit: cover;
  }
  .name {
    position: absolute;
    left: 145px;
    top: 26px;
    font-size: 37px;
    font-weight: 600;
    letter-spacing: -0.5px;
    color: var(--fg);
  }
  .status {
    position: absolute;
    left: 145px;
    top: 80px;
    font-size: 32px;
    color: var(--mut);
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--accent);
  }
  .headline {
    position: absolute;
    left: 0;
    top: 196px;
    font-size: 124px;
    font-weight: 700;
    letter-spacing: -5.6px;
    line-height: 1;
    white-space: nowrap;
    color: var(--fg);
  }
  .muted {
    color: var(--mut);
  }
</style>
