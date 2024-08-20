<template>
    <div :class="fixedClass">
        <p><slot></slot></p>
    </div>
</template>
<script>
    export default {
        props: {
            colored: {
                type: Boolean,
                required: true
            },
            size: {
                type: String,
                required: true
            },
        },
        computed: {
            fixedClass() {
                return `shadow-md flex justify-center items-center font-manropeRegular ${this.colored ? 'text-white bg-[#7A9CA5]' : ''} ${this.size}`
            }
        }
    }
</script>