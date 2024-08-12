<template>
    <div class="w-full flex flex-col text-xs">
        <img :src="image" class="w-full">
        <div class="py-2 w-full flex flex-col gap-1">
            <h2 class=" font-playfairDisplayBold text-lg">{{ title }}</h2>
            <p class="text-[#555555]"><slot></slot></p>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            title: String,
            image: String
        }
    }
</script>