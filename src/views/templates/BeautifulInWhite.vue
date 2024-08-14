<template>
    <div class="relative font-manropeRegular">
        <section class="relative w-full min-h-screen overflow-scroll flex justify-center flex-col items-center gap-16">
            <img :src="weddingPhotoImg" alt="wedding-photo" class="slideshow absolute h-full left-0 -translate-x-[30%] max-w-max">
            <div class="w-full h-full bg-[rgba(255,255,255,0.5)] absolute"></div>
            <div class="text-4xl font-appleChancery z-10 flex items-center gap-2 flex-col">
                <h1 class="goldToBottom">Rafael</h1>
                <h1 class="goldToBottom">&</h1>
                <h1 class="goldToBottom">Hannah</h1>
            </div>
            <div class="z-10 flex flex-col gap-1 items-center">
                <h2 class="text-3xl font-parisienneRegular text-center">Akan segera melangsungkan pernikahan</h2>
                <h2 class="text-2xl font-oxygenMonoRegular">Sabtu, 17 Agustus 2024</h2>
            </div>
            <h2 class="text-2xl font-oxygenMonoRegular z-10 text-center">
                <span class="text-[#6B5125]">3</span> Hari 
                <span class="text-[#6B5125]">20</span> Jam 
                <span class="text-[#6B5125]">16</span> Menit 
                <span class="text-[#6B5125]">30</span> Detik
            </h2>
        </section>
        <section class="flex flex-col items-center">
            <div class="w-[80%] flex flex-col items-center py-8">
                <h1 class="text-4xl goldToTop font-appleChancery mb-5">Rafael</h1>
                <div class="font-parisienneRegular text-lg">
                    <p class="mb-2">Putra dari bapak Aristoteles S.Kom M.Kom</p>
                    <p>Putra dari Ibu Febrianti Nugraha M.Eng</p>
                </div>
            </div>
            <div class="w-[80%] flex flex-col items-center py-8">
                <h1 class="text-4xl goldToTop font-appleChancery mb-5">Hannah</h1>
                <div class="font-parisienneRegular text-lg">
                    <p class="mb-2">Putra dari bapak Muhammad Juliari S.Pd</p>
                    <p>Putra dari Ibu Siti Aminah</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import weddingPhotoImg from '../../assets/images/WeddingPhoto.png';
    export default {
        data() {
            return {
                weddingPhotoImg
            }
        },
        components: {
            
        },
        methods: {
            
        }
    }
</script>