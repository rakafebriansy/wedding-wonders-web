<template>
    <div class="relative font-manropeRegular">
        <div class="relative w-full min-h-screen overflow-scroll flex justify-center flex-col items-center gap-16">
            <img :src="weddingPhotoImg" alt="wedding-photo" class="slideshow absolute h-full left-0 -translate-x-[30%] max-w-max">
            <div class="w-full h-full bg-[rgba(255,255,255,0.5)] absolute"></div>
            <div class="text-4xl font-appleChancery z-10 flex items-center gap-2 flex-col">
                <h1 class="bg-gradient-to-b from-[#D19E49] to-black text-transparent bg-clip-text">Ben</h1>
                <h1 class="bg-gradient-to-b from-[#D19E49] to-black text-transparent bg-clip-text">&</h1>
                <h1 class="bg-gradient-to-b from-[#D19E49] to-black text-transparent bg-clip-text">Hannahq</h1>
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
        </div>
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