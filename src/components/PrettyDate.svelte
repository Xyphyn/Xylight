<script>
    export let unformattedDate = '1970-1-1'

    const formattedDate = (date) => {
        const dateString = new Date(date.replace(/-/g, '/').replace(/T.+/, ''))
        const conciseDate = dateString.toLocaleDateString()
        return conciseDate
    }
</script>

{formattedDate(unformattedDate)}
