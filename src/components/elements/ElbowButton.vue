<template>
    <a v-if="btnType == 'link'" :href="link" :class="fixedClass">
        <component v-if="icon" :is="icon" classname="w-3"></component>
        <p><slot></slot></p>
    </a>
    <button v-else-if="btnType == 'button'" :type="btnType" :class="fixedClass">
        <component v-if="icon" :is="icon" classname="w-3"></component>
        <p><slot></slot></p>
    </button>
    <button v-else :type="btnType" :class="fixedClass">
        <component v-if="icon" :is="icon" classname="w-3"></component>
        <p><slot></slot></p>
    </button>
</template>


<script>
    export default {
        props: {
            icon: {
                type: Object,
                required: false
            },
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
            },
        },
        computed: {
            fixedClass() {
                return `bg-[#7A9CA5] inline-flex py-2 px-3 text-white justify-center items-center gap-3 font-manropeBold ${this.textSize ?? 'text-xs'} ${this.full ? 'w-full' : 'w-fit'}`
            }
        }
    }
</script>