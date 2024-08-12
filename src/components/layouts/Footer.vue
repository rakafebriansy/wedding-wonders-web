<template>
    <footer class="w-full bg-[#1E2C30] flex flex-col gap-2 justify-center items-center  font-manropeRegular text-white">
        <div class="flex flex-col items-start justify-between gap-5 p-10 w-full lg:w-[70%] lg:gap-10">
            <div class="flex flex-col items-start gap-3 lg:flex-row justify-between w-full">
                <div class="flex gap-3">
                    <img :src="logoImg" alt="" class="w-8">
                    <h2 class=" font-playfairDisplayBold text-xl">Wedding Wonders</h2>
                </div>
                <ul class="flex gap-1">
                    <li class="flex justify-center w-8 h-8 items-center border-2 border-[#5C8692]">
                        <svg class="w-2" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.71875 9L9.15625 6.125H6.375V4.25C6.375 3.4375 6.75 2.6875 8 2.6875H9.28125V0.21875C9.28125 0.21875 8.125 0 7.03125 0C4.75 0 3.25 1.40625 3.25 3.90625V6.125H0.6875V9H3.25V16H6.375V9H8.71875Z" fill="#ffffff"/>
                        </svg>
                    </li>
                    <li class="flex justify-center w-8 h-8 items-center border-2 border-[#5C8692]">
                        <svg class="w-3" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.3438 3.75C14.9688 3.28125 15.5312 2.71875 15.9688 2.0625C15.4062 2.3125 14.75 2.5 14.0938 2.5625C14.7812 2.15625 15.2812 1.53125 15.5312 0.75C14.9062 1.125 14.1875 1.40625 13.4688 1.5625C12.8438 0.90625 12 0.53125 11.0625 0.53125C9.25 0.53125 7.78125 2 7.78125 3.8125C7.78125 4.0625 7.8125 4.3125 7.875 4.5625C5.15625 4.40625 2.71875 3.09375 1.09375 1.125C0.8125 1.59375 0.65625 2.15625 0.65625 2.78125C0.65625 3.90625 1.21875 4.90625 2.125 5.5C1.59375 5.46875 1.0625 5.34375 0.625 5.09375V5.125C0.625 6.71875 1.75 8.03125 3.25 8.34375C3 8.40625 2.6875 8.46875 2.40625 8.46875C2.1875 8.46875 2 8.4375 1.78125 8.40625C2.1875 9.71875 3.40625 10.6562 4.84375 10.6875C3.71875 11.5625 2.3125 12.0938 0.78125 12.0938C0.5 12.0938 0.25 12.0625 0 12.0312C1.4375 12.9688 3.15625 13.5 5.03125 13.5C11.0625 13.5 14.3438 8.53125 14.3438 4.1875C14.3438 4.03125 14.3438 3.90625 14.3438 3.75Z" fill="#ffffff"/>
                        </svg>
                    </li>
                    <li class="flex justify-center w-8 h-8 items-center border-2 border-[#5C8692]">
                        <svg class="w-3" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.125 14V4.65625H0.21875V14H3.125ZM1.65625 3.40625C2.59375 3.40625 3.34375 2.625 3.34375 1.6875C3.34375 0.78125 2.59375 0.03125 1.65625 0.03125C0.75 0.03125 0 0.78125 0 1.6875C0 2.625 0.75 3.40625 1.65625 3.40625ZM13.9688 14H14V8.875C14 6.375 13.4375 4.4375 10.5 4.4375C9.09375 4.4375 8.15625 5.21875 7.75 5.9375H7.71875V4.65625H4.9375V14H7.84375V9.375C7.84375 8.15625 8.0625 7 9.5625 7C11.0625 7 11.0938 8.375 11.0938 9.46875V14H13.9688Z" fill="#ffffff"/>
                        </svg>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col lg:flex-row gap-3 items-start text-sm lg:text-xs w-full justify-start lg:gap-24">
                <ul class="flex flex-col lg:gap-2">
                    <li class="text-lg lg:text-base font-playfairDisplayBold">Menu</li>
                    <li><a href="">Beranda</a></li>
                    <li><a href="">Layanan</a></li>
                    <li><a href="">Komentar</a></li>
                    <li><a href="">Ulasan</a></li>
                </ul>
                <ul class="flex flex-col lg:gap-2">
                    <li class="text-lg lg:text-base font-playfairDisplayBold">Media Sosial</li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">LinkedIn</a></li>
                </ul>
                <div class="flex flex-col lg:gap-2 items-start">
                    <h3 class="text-lg lg:text-base font-playfairDisplayBold">Hubungi Kami</h3>
                    <table>
                        <tbody>
                            <tr class=" align-top">
                                <td>Alamat</td>
                                <td>: 24A Kingston St, Los Vegas NC 28202, USA.</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>: wedding.wonders@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Telepon</td>
                                <td>: (+62) 123 - 4567 - 900</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="w-full py-4 flex justify-center bg-[#111E22] text-sm">
            <p>&copy; Copyright 2024. Wedding Wonders Team.</p>
        </div>
    </footer>
</template>
<script>
    import logoImg from '../../assets/images/Logo.png'

    export default {
        data() {
            return {
                logoImg
            }
        },
    }
</script>