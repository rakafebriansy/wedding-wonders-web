<template>
    <label :for="id" class="border border-[#5C8692] text-[#fbebeb] w-full flex justify-start px-2 py-3 h-12 lg:text-base relative">
        <div class="w-[10%] flex justify-center items-center">
            <component :is="icon" classname="w-4 lg:w-5" color="#5C8692"></component>
        </div>
        <input :type="hidden ? 'password' : 'text'" :id="id" :name="name" class="h-full w-[90%] outline-none text-[#555555] px-1" :placeholder="placeholder">
        <div v-if="isPassword" @click="toggleHidden" class="absolute right-5 top-1/2 -translate-y-1/2 select-none cursor-pointer">
            <SlashedEye v-if="hidden" classname="w-4 lg:w-5" color="#5C8692"></SlashedEye>
            <Eye v-else classname="w-4 lg:w-5" color="#5C8692"></Eye>
        </div>
    </label>
</template>


<script>
    import Eye from '../icons/Eye.vue';
    import SlashedEye from '../icons/SlashedEye.vue';
    export default {
        data() {
            return {
                hidden: true,
            }
        },
        props: {
            icon: {
                type: Object,
                required: false
            },
            placeholder: String,
            name: String,
            isPassword:{
                type: String,
                required: false
            }
        },
        components: {
            Eye,
            SlashedEye
        },
        computed: {
            id() {
                return `id${this.name}`;
            },
            toggleHidden() {
                this.hidden = !this.hidden;
            }
        }
    }
</script>