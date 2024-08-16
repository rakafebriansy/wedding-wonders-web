<template>
    <label :for="id" class="border border-[#5C8692] text-[#fbebeb] w-full flex items-start justify-start px-2 py-3 h-24">
        <div class="w-[10%] flex justify-center items-center py-1">
            <component :is="icon" classname="w-4 lg:w-5" color="#5C8692"></component>
        </div>
        <textarea maxlength="200" :id="id" :placeholder="placeholder" :name="name" id="" class="h-full w-[90%] outline-none text-[#555555] px-1"></textarea>
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