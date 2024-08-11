<template>
    <div class="relative font-manropeRegular">
        <Navbar/>
        <section>
            <div class="bg-[#EBF3F5] flex justify-center items-start flex-col gap-2 w-full px-10 pt-24 pb-10">
                <div class="flex gap-1">
                    <svg class="w-3" viewBox="0 0 60 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M60 28.5273L53.3455 20.9455L54.2727 10.9091L44.4273 8.67273L39.2727 0L30 3.98182L20.7273 0L15.5727 8.67273L5.72727 10.8818L6.65455 20.9182L0 28.5273L6.65455 36.1091L5.72727 46.1727L15.5727 48.4091L20.7273 57.0818L30 53.0727L39.2727 57.0545L44.4273 48.3818L54.2727 46.1454L53.3455 36.1091L60 28.5273ZM32.7273 42.1636H27.2727V36.7091H32.7273V42.1636ZM32.7273 31.2545H27.2727V14.8909H32.7273V31.2545Z" fill="#5C8692"/>
                    </svg>
                    <p class="text-[#5C8692] text-xs">WELCOME TO <span class="font-manropeBold">WEDDING WONDERS!!!</span></p>
                </div>
                <div class="w-full">
                    <h1 class="font-playfairDisplayBold text-3xl">Undangan Impianmu Kini Hanya dengan Sekali Klik</h1>
                </div>
                <div class="w-full text-[#5C8692] text-xs">
                    <p>Buatlah Undangan Pernikahanmu Dengan Sederhana, Cepat, dan Elegan.</p>
                </div>
                <Button>BUAT SEKARANG</Button>
            </div>
            <div class="bg-[#303E42] w-full justify-center items-center flex p-10">
                <img :src="heroImg">
            </div>
        </section>
        <section class="w-full flex-col items-center flex gap-8 p-10">
            <div class="text-center w-[90%]">
                <p class="text-[#5C8692] font-manropeSemiBold text-xs">LAYANAN KAMI</p>
                <h1 class=" font-playfairDisplayBold text-2xl">Mengapa Harus Wedding Wonders?</h1>
            </div>
            <ul class="flex flex-col gap-10 w-[75%]">
                <li>
                    <Card :image="card1Img" title="Mudah dan Cepat">Dengan berbagai template yang tersedia, pengguna dapat memilih desain yang sesuai dan menyesuaikannya dengan informasi acara hanya dalam beberapa menit.</Card>
                </li>
                <li>
                    <Card :image="card2Img" title="Hemat Biaya">Menggunakan undangan digital menghilangkan kebutuhan untuk mencetak undangan fisik, sehingga menghemat biaya cetak dan pengiriman.</Card>
                </li>
                <li>
                    <Card :image="card3Img" title="Ramah Lingkungan">Undangan digital lebih ramah lingkungan karena mengurangi penggunaan kertas dan tinta, serta mengurangi jejak karbon yang dihasilkan dari undangan fisik.</Card>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import Navbar from '../components/layouts/Navbar.vue';
    import heroImg from '../assets/images/Hero.png';
    import card1Img from '../assets/images/Card1.png';
    import card2Img from '../assets/images/Card2.png';
    import card3Img from '../assets/images/Card3.png';
    import Button from '../components/elements/Button.vue';
    import Card from '../components/fragments/Card.vue';

    export default {
        data() {
            return {
                heroImg,
                card1Img,
                card2Img,
                card3Img,
            }
        },
        components: {
            Navbar,
            Button,
            Card
        },
        methods: {
            
        }
    }
</script>