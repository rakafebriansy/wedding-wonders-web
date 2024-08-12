<template>
    <svg v-bind:class="classname" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.86523 5.7565L5.94838 6.99984L5.39557 4.6565L7.23602 3.07984L4.81242 2.8765L3.86523 0.666504L2.91804 2.8765L0.494446 3.07984L2.3349 4.6565L1.78209 6.99984L3.86523 5.7565Z" fill="white"/>
    </svg>
</template>

<script>
    export default {
        props: {
            classname: String
        },
        name: 'Star'
    }
</script>