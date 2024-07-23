<template>
    <button class="bg-[#7A9CA5] flex p-2 text-xs font-semibold text-white items-center gap-3">
        <Headphone size="w-3"></Headphone>
        <slot></slot>
    </button>
</template>


<script>
    import Headphone from './icons/Headphone.vue';

    export default {
        components: {
            Headphone
        },
        props: {
            withIcon: {
                default: false,
                type: Boolean
            }
        }
    }
</script>