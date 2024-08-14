<template>
    <div class="relative font-manropeRegular">
        <section class="relative w-full min-h-screen overflow-scroll flex justify-center flex-col items-center gap-16">
            <img :src="weddingPhotoImg" alt="wedding-photo" class="slideshow absolute h-full left-0 -translate-x-[30%] max-w-max">
            <div class="w-full h-full bg-[rgba(255,255,255,0.5)] absolute"></div>
            <div class="text-4xl font-appleChancery z-10 flex items-center gap-2 flex-col">
                <h1 class="gold-to-bottom">Rafael</h1>
                <h1 class="gold-to-bottom">&</h1>
                <h1 class="gold-to-bottom">Hannah</h1>
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
                <h1 class="text-4xl gold-to-top font-appleChancery mb-5">Rafael</h1>
                <div class="font-parisienneRegular text-lg">
                    <p class="mb-2">Putra dari bapak Aristoteles S.Kom M.Kom</p>
                    <p>Putra dari Ibu Febrianti Nugraha M.Eng</p>
                </div>
            </div>
            <div class="w-[80%] flex flex-col items-center py-8">
                <h1 class="text-4xl gold-to-top font-appleChancery mb-5">Hannah</h1>
                <div class="font-parisienneRegular text-lg">
                    <p class="mb-2">Putra dari bapak Muhammad Juliari S.Pd</p>
                    <p>Putra dari Ibu Siti Aminah</p>
                </div>
            </div>
        </section>
        <section class="flex flex-col items-center">
            <div class="w-[80%] flex flex-col items-start py-8 gap-4">
                <h2 class="font-appleChancery text-3xl">Story</h2>
                <p class="w-full text-sm gold-to-bottom text-justify">Urna turpis nibh nulla ornare ut. Tristique et, et in enim ultrices convallis. Risus mi, tellus dapibus morbi neque id et purus. Mi tincidunt commodo mattis tortor, est. Eu tempus eget risus sed orci venenatis, nibh. Viverra pellentesque turpis donec ac augue viverra sollicitudin natoque vulputate. Elementum faucibus commodo sed placerat sollicitudin pellentesque cras ultricies suscipit. Sit vitae volutpat, odio pellentesque pharetra. Blandit neque fringilla mi arcu arcu in. Nunc quisque lobortis pharetra maecenas commodo malesuada sit tortor nunc. Tortor, pharetra, maecenas nec bibendum lorem egestas. Velit nisl a viverra diam, id blandit nisl, tempor. Iaculis et ipsum, dui venenatis. Mi ultricies gravida sit semper lobortis id laoreet. Lacus, scelerisque libero phasellus non egestas condimentum et nunc. Commodo diam sodales donec cras sed vel. Senectus in venenatis nisl lectus congue ultricies non.</p>
            </div>
        </section>
        <section class="flex flex-col items-center ">
            <div class="w-[90%] flex flex-col items-center gap-8 py-8">
                <h2 class="text-4xl font-parisienneRegular">Lokasi</h2>
                <div class="w-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31595.500634455668!2d113.72218910000001!3d-8.1585914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd694351d727e69%3A0xec33c34804a10832!2sUniversitas%20Jember!5e0!3m2!1sid!2sid!4v1723651116596!5m2!1sid!2sid" class="w-full min-h-[20rem]" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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