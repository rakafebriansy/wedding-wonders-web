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
            textSize: {
                type: String,
                required: false
            },
            full: {
                type: Boolean,
                required: false
            }
        },
        computed: {
            fixedClass() {
                return `bg-[#705527] inline-flex p-2 text-white justify-center items-center gap-3 font-poppinsRegular rounded-full ${this.textSize ?? 'text-xs'} ${this.full ? 'w-full' : 'w-fit'}`
            }
        }
    }
</script>