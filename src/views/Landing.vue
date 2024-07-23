<template>
    <h1>Landing views</h1>
    <Button :icon="currentIcon">CUSTOMER SERVICE</Button>
</template>

<script>
    import { markRaw } from 'vue';
import Button from '../components/Button.vue';
    import Headphone from '../components/icons/Headphone.vue';

    export default {
        data() {
            return {
                currentIcon: markRaw(Headphone)
            }
        },
        components: {
            Button,
            Headphone
        },
        methods: {
            
        }
    }
</script>