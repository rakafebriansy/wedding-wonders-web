<template>
    <label :for="id" class="border border-[rgba(172,172,172,0.5)] text-[#fbebeb] w-full flex justify-start px-2 py-1 h-10 rounded-lg">
        <input type="text" :id="id" :name="name" class="h-full w-[90%] outline-none text-[#555555] px-1" :placeholder="placeholder">
    </label>
</template>


<script>
    export default {
        props: {
            placeholder: String,
            name: String
        },
        computed: {
            id() {
                return `id${this.name}`
            }
        }
    }
</script>