<script>
    /** @type {Number} */
    export let progress = 1
</script>


<div class="progressbar-bg">
    <div class="progressbar-fg" style="width: {progress}%;" />
	
</div>
<style>
    .progressbar-bg {
        background-color: rgba(var(--text-color), 0.35);
        height: 4px;
        border-radius: 4px;
        max-width: 8rem;
        width: 100%;
        margin-right: 1rem;
        display: inherit;
        align-items: inherit;
        justify-content: inherit;
        
	}

    .percentage {
    	
    }

    .progressbar-fg {
        background-color: rgba(var(--text-color), 0.75);
        border-radius: 4px;
        height: 4px;
    }
</style>
