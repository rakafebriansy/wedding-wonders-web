<template>
    <div v-if="alertStore.isAlert" id="alert" class="w-full min-h-screen flex justify-center items-center absolute">
        <div class="w-full min-h-screen absolute bg-black opacity-35"></div>
        <div class="p-8 shadow-lg border relative border-[#7A9CA5] z-30 flex justify-start gap-3 bg-white items-center min-w-[16rem] max-w-[90%]">
            <div class="w-[20%] flex justify-center items-center">
                <div class="w-10 h-10 rounded-full bg-[#7A9CA5] flex justify-center items-center">
                <svg v-if="alertStore.success" class="w-[50%]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13.253 5.98 12 13.5l-1.253-7.52a1.27 1.27 0 1 1 2.506 0Z"/>
                    <circle cx="12" cy="19" r="1" stroke="#ffffff" stroke-width="2"/>
                </svg>
                <svg v-else class="w-[50%]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            </div>
            <p class="text-[#7A9CA5] w-[80%] font-manropeSemiBold">{{ alertStore.message }}</p>
            <svg @click="alertStore.hideAlert()" class="w-4 absolute cursor-pointer right-3 top-3" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#7A9CA5" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
        </div>
    </div>
</template>
<script>
    import { useAlertStore } from '../../stores/useAlertStore.mjs';
    export default {
        setup() {
            const alertStore = useAlertStore();
            return {alertStore};
        },
    }
</script>