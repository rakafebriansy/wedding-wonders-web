<template>
    <button class="bg-[#7A9CA5] flex py-2 px-4 text-xs font-semibold text-white items-center gap-3">
        <component v-if="icon" :is="icon" classname="w-3"></component>
        <slot></slot>
    </button>
</template>


<script>
    export default {
        props: {
            icon: {
                type: Object,
                required: false
            }
        }
    }
</script>