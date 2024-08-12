<template>
    <label :for="id" class="border border-[#5C8692] text-[#fbebeb] w-full flex justify-start px-2 py-3 h-12">
        <div class="w-[10%] flex justify-center items-center">
            <component :is="icon" classname="w-4" color="#5C8692"></component>
        </div>
        <input type="text" :id="id" :name="name" class="h-full w-[90%] outline-none text-[#555555] px-1" :placeholder="placeholder">
    </label>
</template>


<script>
    export default {
        props: {
            icon: {
                type: Object,
                required: false
            },
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