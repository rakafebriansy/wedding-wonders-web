<template>
    <button class="bg-[#7A9CA5] flex p-2 text-xs font-semibold text-white items-center gap-3">
        <component :is="icon" classname="w-3"></component>
        <slot></slot>
    </button>
</template>


<script>
    export default {
        props: {
            icon: {
                type: Object,
                required: true
            }
        }
    }
</script>