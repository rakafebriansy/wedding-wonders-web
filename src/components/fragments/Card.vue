<template>
    <div class="w-full flex flex-col text-sm">
        <img :src="image" class="w-full">
        <div class="py-2 w-full">
            <h2 class=" font-playfairDisplayBold text-xl">{{ title }}</h2>
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