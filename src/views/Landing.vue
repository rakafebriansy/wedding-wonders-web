<template>
    <div class="relative font-manropeRegular">
        <Navbar/>
        <section class="lg:flex lg:min-h-screen lg:pt-16">
            <div class="bg-[#EBF3F5] z-10 flex justify-center items-start flex-col gap-2 lg:gap-4 w-full px-10 pt-24 lg:pt-10 pb-10 lg:px-20">
                <div class="flex gap-1">
                    <svg class="w-3" viewBox="0 0 60 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M60 28.5273L53.3455 20.9455L54.2727 10.9091L44.4273 8.67273L39.2727 0L30 3.98182L20.7273 0L15.5727 8.67273L5.72727 10.8818L6.65455 20.9182L0 28.5273L6.65455 36.1091L5.72727 46.1727L15.5727 48.4091L20.7273 57.0818L30 53.0727L39.2727 57.0545L44.4273 48.3818L54.2727 46.1454L53.3455 36.1091L60 28.5273ZM32.7273 42.1636H27.2727V36.7091H32.7273V42.1636ZM32.7273 31.2545H27.2727V14.8909H32.7273V31.2545Z" fill="#5C8692"/>
                    </svg>
                    <p class="text-[#5C8692] text-xs lg:text-base">WELCOME TO <span class="font-manropeBold">WEDDING WONDERS!!!</span></p>
                </div>
                <div class="w-full">
                    <h1 class="font-playfairDisplayBold text-3xl lg:text-5xl">Undangan Impianmu Kini Hanya dengan Sekali Klik</h1>
                </div>
                <div class="w-full text-[#5C8692] text-xs lg:text-2xl">
                    <p>Buatlah Undangan Pernikahanmu Dengan Sederhana, Cepat, dan Elegan.</p>
                </div>
                <ElbowButton btnType="link" link="/picker" textSize="lg:text-lg">BUAT SEKARANG</ElbowButton>
            </div>
            <div class="bg-[#303E42] w-full justify-center items-center flex p-10 relative">
                <div class="w-[50%] h-[50%] border-white border-4 absolute top-1/2 -left-10 -translate-y-1/2 hidden lg:block"></div>
                <img :src="heroImg" class="lg:absolute lg:w-[40%] lg:top-1/2 lg:-left-10 lg:-translate-y-1/2 lg:z-20">
            </div>
        </section>
        <section class="w-full flex-col items-center flex gap-8 py-10">
            <div class="text-center w-[90%]">
                <p class="text-[#5C8692] font-manropeSemiBold text-xs lg:text-base">LAYANAN KAMI</p>
                <h1 class=" font-playfairDisplayBold text-2xl lg:text-5xl">Mengapa Harus Wedding Wonders?</h1>
            </div>
            <ul class="flex flex-col lg:flex-row items-start gap-10 w-[60%]">
                <li class="w-[80%] h-full">
                    <Card :image="card1Img" title="Mudah dan Cepat">Dengan berbagai template yang tersedia, pengguna dapat memilih desain yang sesuai dan menyesuaikannya dengan informasi acara hanya dalam beberapa menit.</Card>
                </li>
                <li class="w-[80%] h-full">
                    <Card :image="card2Img" title="Hemat Biaya">Menggunakan undangan digital menghilangkan kebutuhan untuk mencetak undangan fisik, sehingga menghemat biaya cetak dan pengiriman.</Card>
                </li>
                <li class="w-[80%] h-full">
                    <Card :image="card3Img" title="Ramah Lingkungan">Undangan digital lebih ramah lingkungan karena mengurangi penggunaan kertas dan tinta, serta mengurangi jejak karbon yang dihasilkan dari undangan fisik.</Card>
                </li>
            </ul>
        </section>
        <section class="bg-[#EDF5F7] flex flex-col items-center gap-6 lg:gap-10 py-10 lg:py-20">
            <h1 class="text-2xl font-playfairDisplayBold lg:text-5xl">Apa pendapat mereka...</h1>
            <ul class="w-[70%] flex flex-col gap-6 lg:flex-row lg:w-[60%]">
                <li>
                    <CommentBox name="Syahrul Yasin Limpo" from="Jakarta Pusat">“Website ini sangat efisien dan praktis untuk digunakan. Saya bisa membuat undangan pernikahan saya dalam waktu kurang dari satu jam dengan berbagai template cantik yang tersedia. Sangat memudahkan!“</CommentBox>
                </li>
                <li>
                    <CommentBox name="Budi Arie Setiadi" from="Jakarta Pusat">“Website ini sangat efisien dan praktis untuk digunakan. Saya bisa membuat undangan pernikahan saya dalam waktu kurang dari satu jam dengan berbagai template cantik yang tersedia. Sangat memudahkan!“</CommentBox>
                </li>
            </ul>
        </section>
        <section class="flex justify-center items-center py-10 lg:py-20">
            <div class="flex flex-col justify-center gap-8 items-center lg:flex-row lg:w-[70%]">
                <div class="flex gap-3 flex-col items-center w-[80%] lg:w-[70%] lg:gap-6">
                    <h1 class="text-2xl font-playfairDisplayBold lg:text-4xl">Berikan komentar dan bagikan pengalaman Anda menggunakan layanan kami.</h1>
                    <p class="text-[#5C8692] text-xs lg:text-lg">Apakah Anda telah mencoba membuat undangan digital dengan kami? Kami sangat menghargai masukan Anda!</p>
                </div>
                <form action="" method="POST" class="w-[80%] lg:p-10 small-shadow">
                    <ul class="w-full flex flex-col gap-3">
                        <li>
                            <TextBox placeholder="Nama" name="nama" :icon="userIcon" />
                        </li>
                        <li>
                            <TextBox placeholder="Email" name="email" :icon="emailIcon" />
                        </li>
                        <li>
                            <TextBox placeholder="Alamat" name="alamat" :icon="phoneIcon" />
                        </li>
                        <li>
                            <StarBox :icon="bookOpenIcon" />
                        </li>
                        <li>
                            <TextareaBox placeholder="Komentar" name="komentar" :icon="editIcon" />
                        </li>
                        <li>
                            <ElbowButton btnType="submit" textSize="text-xl" :full="true">KIRIM</ElbowButton>
                        </li>
                    </ul>
                </form>
            </div>
        </section>
        <section>
            <Footer/>
        </section>
    </div>
</template>

<script>
    import Navbar from '../components/layouts/Navbar.vue';
    import heroImg from '../assets/images/Hero.png';
    import card1Img from '../assets/images/Card1.png';
    import card2Img from '../assets/images/Card2.png';
    import card3Img from '../assets/images/Card3.png';
    import ElbowButton from '../components/elements/ElbowButton.vue';
    import TextareaBox from '../components/elements/TextareaBox.vue';
    import TextBox from '../components/elements/TextBox.vue';
    import Card from '../components/fragments/Card.vue';
    import CommentBox from '../components/fragments/CommentBox.vue';
    import StarBox from '../components/elements/StarBox.vue';
    import { markRaw } from 'vue';
    import User from '../components/icons/User.vue';
    import Email from '../components/icons/Email.vue';
    import Phone from '../components/icons/Phone.vue';
    import BookOpen from '../components/icons/BookOpen.vue';
    import Edit from '../components/icons/Edit.vue';
    import Footer from '../components/layouts/Footer.vue';

    export default {
        data() {
            return {
                heroImg,
                card1Img,
                card2Img,
                card3Img,
                userIcon: markRaw(User),
                emailIcon: markRaw(Email),
                phoneIcon: markRaw(Phone),
                bookOpenIcon: markRaw(BookOpen),
                editIcon: markRaw(Edit),
            }
        },
        components: {
            Navbar,
            ElbowButton,
            Card,
            CommentBox,
            StarBox,
            TextBox,
            User,
            BookOpen,
            Email,
            Phone,
            TextareaBox,
            Edit,
            Footer
        }
    }
</script>