<template>
    <label :for="id" class="border text-[#fbebeb] w-full flex justify-start px-2 py-3 bg-white h-24 rounded-lg">
        <textarea maxlength="200" :id="id" :placeholder="placeholder" :name="name" id="" class="h-full w-[90%] outline-none text-[#555555] px-1"></textarea>
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