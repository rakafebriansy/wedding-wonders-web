<template>
    <div class="relative font-poppinsRegular">
        <section class="relative w-full min-h-screen overflow-hidden flex justify-center flex-col items-center text-white gap-16 lg:gap-28">
            <img :src="weddingPhotoImg" alt="wedding-photo" class="animation-slideshow lg:animate-none absolute h-full left-0 lg:w-screen max-w-max lg:max-w-none">
            <div class="w-full h-full bg-[rgba(0,0,0,0.7)] absolute"></div>
            <div class="flex flex-col items-center gap-4 z-10">
                <h4 class="text-sm">Kepada Bapak/Ibu/Saudara/i,</h4>
                <h1 class=" font-sacramentoRegular text-5xl text-center">Anton & Michelle</h1>
                <p class="text-xs">Akan melangsungkan pernikahan dalam:</p>
                <div class="flex gap-4 text-sm">
                    <div class="w-20 h-20 rounded-full bg-pink-600 flex flex-col items-center justify-center gap-1">
                        <p>0</p>
                        <p>hari</p>
                    </div>
                    <div class="w-20 h-20 rounded-full bg-pink-600 flex flex-col items-center justify-center gap-1">
                        <p>0</p>
                        <p>jam</p>
                    </div>
                    <div class="w-20 h-20 rounded-full bg-pink-600 flex flex-col items-center justify-center gap-1">
                        <p>0</p>
                        <p>menit</p>
                    </div>
                    <div class="w-20 h-20 rounded-full bg-pink-600 flex flex-col items-center justify-center gap-1">
                        <p>0</p>
                        <p>detik</p>
                    </div>
                </div>
                <SmoothButton btnType="link" :shadow="true">Lihat Undangan</SmoothButton>
            </div>
        </section>
        <section class="bg-[url('/src/assets/images/BgBlackRose.png')] w-full min-h-screen">
            <!-- <img src="../../assets/images/BgBlackRose.png" alt=""> -->
        </section>
    </div>
</template>
<script>
    import weddingPhotoImg from '../../assets/images/WeddingPhoto.png';
    import SmoothButton from '../../components/elements/SmoothButton.vue';
    export default {
        data() {
            return {
                weddingPhotoImg
            }
        },
        components: {
            SmoothButton
        },
        methods: {
            
        }
    }
</script>