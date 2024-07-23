<template>
    <button class="bg-[#7A9CA5] flex p-2 text-xs font-semibold text-white items-center gap-3">
        <component :is="icon" size="w-3"></component>
        <slot></slot>
    </button>
</template>


<script>
import Headphone from './icons/Headphone.vue';
    export default {
        props: {
            icon: {
                type: Object,
                required: true
            }
        }
    }
</script>