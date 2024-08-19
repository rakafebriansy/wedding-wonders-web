<template>
    <a v-if="btnType == 'link'" :href="link" :class="fixedClass">
        <p><slot></slot></p>
    </a>
    <button v-else :type="btnType" :class="fixedClass">
        <p><slot></slot></p>
    </button>
</template>


<script>
    export default {
        props: {
            btnType: {
                type: String,
                required: true
            },
            link:{
                type: String,
                required: false
            },
            additionClass: {
                type: String,
                required: false
            },
            full: {
                type: Boolean,
                required: false
            },
            shadow: {
                type: Boolean,
                required: false
            },
        },
        computed: {
            fixedClass() {
                return `bg-white inline-flex py-2 px-3 text-pink-500 justify-center items-center gap-3 font-poppinsRegular rounded-md ${this.shadow ? 'shadow-md' : 'shadow-none'} ${this.additionClass ?? 'text-xs'} ${this.full ? 'w-full' : 'w-fit'}`
            }
        }
    }
</script>