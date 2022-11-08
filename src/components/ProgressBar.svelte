<script>
    /** @type {Number} */
    export let progress = 1
</script>

<div class="progressbar-bg">
    <div class="progressbar-fg" style="width: {progress}%;" />
</div>

<style>
    .progressbar-bg {
        background-color: rgba(0, 0, 0, 0.25);
        height: 4px;
        border-radius: 4px;
        max-width: 8rem;
        width: 100%;
    }

    .progressbar-fg {
        background-color: rgba(1, 1, 1, 0.25);
        border-radius: 4px;
        height: 4px;
    }
</style>
