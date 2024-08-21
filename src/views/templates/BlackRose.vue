<template>
    <div v-if="data" class="relative font-poppinsRegular">
        <section class="relative w-full min-h-screen overflow-hidden flex justify-center flex-col items-center text-white gap-16 lg:gap-28">
            <img :src="weddingPhotoImg" alt="wedding-photo" class="animation-slideshow lg:animate-none absolute h-full left-0 lg:w-screen max-w-max lg:max-w-none">
            <div class="w-full h-full bg-[rgba(0,0,0,0.7)] absolute"></div>
            <div class="flex flex-col items-center gap-6 lg:gap-8 z-10">
                <h4 class="text-sm lg:text-xl">Kepada Bapak/Ibu/Saudara/i,</h4>
                <h1 class=" font-sacramentoRegular text-5xl text-center font-bold lg:text-8xl flex flex-col justify-center items-center">
                    <span>{{ data.groom_name }}</span>
                    <span>&</span>
                     <span>{{ data.bride_name }}</span>
                </h1>
                <p class="text-xs lg:text-lg">Akan melangsungkan pernikahan dalam:</p>
                <div class="flex gap-4 lg:gap-6 text-sm lg:text-xl">
                    <div class="w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-pink-600 flex flex-col items-center justify-center gap-1">
                        <p>{{ countdown.days }}</p>
                        <p>hari</p>
                    </div>
                    <div class="w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-pink-600 flex flex-col items-center justify-center gap-1">
                        <p>{{ countdown.hours }}</p>
                        <p>jam</p>
                    </div>
                    <div class="w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-pink-600 flex flex-col items-center justify-center gap-1">
                        <p>{{ countdown.minutes }}</p>
                        <p>menit</p>
                    </div>
                    <div class="w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-pink-600 flex flex-col items-center justify-center gap-1">
                        <p>{{ countdown.seconds }}</p>
                        <p>detik</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-[url('/src/assets/images/BgBlackRose.png')] w-full flex flex-col items-center py-10 lg:py-20 gap-12">
            <div class="w-[90%] flex flex-col items-center text-center gap-2 lg:gap-4 lg:w-[70%]">
                <h1 class="text-5xl font-sacramentoRegular text-pink-500 font-bold lg:text-7xl">Acara Pernikahan</h1>
                <p class="text-sm lg:text-lg">Diselenggarakan mulai {{ parsedCeremonyDate }}.</p>
                <p class="text-xs lg:text-base">Oleh karena itu, dengan segala hormat, kami bermaksud untuk mengundang Bapak/Ibu, Saudara/i, untuk hadir pada acara pernikahan kami. </p>
            </div>
            <div class="flex flex-col lg:flex-row gap-4 items-center w-[90%] lg:w-[70%] text-xs">
                <div class="w-full flex-col flex items-start">
                    <div class="w-[70%] gap-3 flex flex-col">
                        <h4 class="font-sacramentoRegular text-pink-500 text-3xl">{{ data.groom_name }}</h4>
                        <p class="flex flex-col items-start">
                            <span>Putra dari Bapak {{ data.groom_father_name }}</span>
                            <span>dan</span>
                            <span>Ibu {{ data.groom_mother_name }}</span>
                        </p>
                    </div>
                </div>
                <div class="w-full flex-col flex items-end text-end">
                    <div class="w-[70%] gap-3 flex flex-col">
                        <h4 class="font-sacramentoRegular text-pink-500 text-3xl">{{ data.bride_name }}</h4>
                        <p class="flex flex-col items-end">
                            <span>Putra dari Bapak {{ data.bride_father_name }}</span>
                            <span>dan</span>
                            <span>Ibu {{ data.bride_mother_name }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-black p-10 lg:p-20 flex flex-col items-center gap-8 lg:gap-12 text-white text-xs">
            <h1 class="text-pink-500 font-sacramentoRegular text-center text-5xl lg:text-7xl font-bold">Informasi Acara</h1>
            <div class="w-full min-h-96 lg:min-h-[30rem]" id="map"></div>
            <p class="text-center lg:text-lg w-[90%] lg:w-[70%]">Diharapkan untuk tidak salah alamat dan tanggal. Manakala tiba di tujuan namun tidak ada tanda-tanda sedang dilangsungkan pernikahan, boleh jadi Anda salah jadwal, atau salah tempat.</p>
            <div class="flex flex-col gap-8 lg:gap-12 lg:flex-row lg:w-[80%]">
                <div class="w-full border-white border bg-[#3A3A3A] rounded-lg">
                <div class="text-center p-2">AKAD NIKAH</div>
                <div class="text-center p-2 flex flex-col gap-1 items-center border-t-[1px] border-b-[1px]">
                    <svg class="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>{{ parsedCeremonyTime.start }} - {{ parsedCeremonyTime.end }}</p>
                    <svg class="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <p>{{ parsedCeremonyDate }}</p>
                    <svg class="w-4" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#ffffff" stroke-width="12" d="M96 22a51.88 51.88 0 0 0-36.77 15.303A52.368 52.368 0 0 0 44 74.246c0 16.596 4.296 28.669 20.811 48.898a163.733 163.733 0 0 1 20.053 28.38C90.852 163.721 90.146 172 96 172c5.854 0 5.148-8.279 11.136-20.476a163.723 163.723 0 0 1 20.053-28.38C143.704 102.915 148 90.841 148 74.246a52.37 52.37 0 0 0-15.23-36.943A51.88 51.88 0 0 0 96 22Z"/><circle cx="96" cy="74" r="20" stroke="#ffffff" stroke-width="12"/></svg>
                    <p>{{ data.ceremony_location }}</p>
                </div>
                <div class="text-center p-2">Saat acara akad diharapkan untuk kondusif menjaga kekhidmatan dan kekhusyuan seluruh prosesi.</div>
            </div>
            <div class="w-full border-white border bg-[#3A3A3A] rounded-lg">
                <div class="text-center p-2">RESEPSI NIKAH</div>
                <div class="text-center p-2 flex flex-col gap-1 items-center border-t-[1px] border-b-[1px]">
                    <svg class="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>{{ parsedReceptionTime.start }} - {{ parsedReceptionTime.end }}</p>
                    <svg class="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <p>{{ parsedReceptionDate }}</p>
                    <svg class="w-4" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#ffffff" stroke-width="12" d="M96 22a51.88 51.88 0 0 0-36.77 15.303A52.368 52.368 0 0 0 44 74.246c0 16.596 4.296 28.669 20.811 48.898a163.733 163.733 0 0 1 20.053 28.38C90.852 163.721 90.146 172 96 172c5.854 0 5.148-8.279 11.136-20.476a163.723 163.723 0 0 1 20.053-28.38C143.704 102.915 148 90.841 148 74.246a52.37 52.37 0 0 0-15.23-36.943A51.88 51.88 0 0 0 96 22Z"/><circle cx="96" cy="74" r="20" stroke="#ffffff" stroke-width="12"/></svg>
                    <p>{{ data.reception_location }}</p>
                </div>
                <div class="text-center p-2">Saat acara akad diharapkan untuk kondusif menjaga kekhidmatan dan kekhusyuan seluruh prosesi.</div>
            </div>
            </div>
        </section>
        <section class="p-10 lg:p-20 flex flex-col items-center gap-8 text-xs">
            <div class="flex flex-col items-center text-center gap-1">
                <h1 class="text-5xl font-sacramentoRegular text-pink-500 font-bold lg:text-7xl">Cerita Kami</h1>
            </div>
            <div class="relative text-justify w-[90%]">
                <svg class="absolute w-8 lg:w-12 top-0 left-0 z-10 -translate-x-3/4 -translate-y-3/4" fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>quote</title>
                    <path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>
                </svg>
                <p class="lg:text-lg">{{ data.story }}</p>
                <svg class="absolute w-8 lg:w-12 bottom-0 right-0 z-10 translate-x-3/4 translate-y-3/4 rotate-180 " fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>quote</title>
                    <path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>
                </svg>
            </div>
        </section>
        <section class="flex justify-center items-center p-8 lg:p-16 bg-black">
            <div class="small-shadow p-6 flex flex-col items-center font-poppinsRegular text-sm lg:text-lg gap-6">
                <h2 class="text-5xl lg:text-7xl lg:flex-row text-pink-500 font-bold text-center font-sacramentoRegular flex flex-col items-center gap-2"><span>Kirim Doa</span> <span>Dan Ucapan</span></h2>
                <p class="text-xs lg:text-base text-center text-white lg:w-[80%]">Tuliskan sesuatu ucapan berupa harapan ataupun doa untuk kedua mempelai.</p>
                <div class="flex flex-col gap-4 w-full text-xs lg:text-sm">
                    <TextBoxBr placeholder="Tuliskan nama lengkap anda" name="name"/>
                    <TextBoxBr placeholder="Tuliskan alamat email lengkap" name="email"/>
                    <TextBoxBr placeholder="Tuliskan nomor HP lengkap" name="phoneNumber"/>
                    <TextBoxBr placeholder="Tuliskan alamat lengkap anda (opsional)" name="address"/>
                    <TextareaBoxBr placeholder="Tuliskan alamat lengkap anda (opsional)" name="address"/>
                    <div class="w-full flex flex-col items-start text-white gap-2">
                        <p>Apakah anda akan hadir memenuhi undangan saya?</p>
                        <div class="flex gap-2">
                            <input type="radio" name="attend">
                            <p>Saya akan hadir</p>
                        </div>
                        <div class="flex gap-2">
                            <input type="radio" name="attend">
                            <p>Saya tidak akan hadir</p>
                        </div>
                    </div>
                </div>
                <SmoothButton btnType="submit" additionClass="text-sm lg:text-lg" :full="true">KIRIM</SmoothButton>
            </div>
        </section>
    </div>
    <div v-else class="w-full min-h-screen flex justify-center items-center">
        <p>Loading...</p>
    </div>
</template>
<script>
    import weddingPhotoImg from '../../assets/images/WeddingPhoto.png';
    import SmoothButton from '../../components/elements/SmoothButton.vue';
    import TextBoxBr from '../../components/elements/TextBoxBr.vue';
    import TextareaBoxBr from '../../components/elements/TextareaBoxBr.vue';
    import { read } from '../../services/wedding.mjs';
    import L from "leaflet";
    import 'leaflet/dist/leaflet.css';
    
    export default {
        data() {
            return {
                weddingPhotoImg,
                data: null,
                parsedCeremonyDate: '',
                parsedCeremonyTime: {},
                parsedReceptionDate: '',
                parsedReceptionTime: {},
                countdown: {},
                ceremonyCoordinates: {},
                receptionCoordinates: {},
            }
        },
        components: {
            SmoothButton,
            TextareaBoxBr,
            TextBoxBr,
        },
        async mounted() {
            const queryParams = atob(this.$route.params.id);
            await this.fetchData(queryParams);

            if (this.ceremonyCoordinates && this.ceremonyCoordinates) {
                this.initMap();
            }

            this.startCountdown();
        },
        methods: {
            async fetchData(queryParams) {
            try {
                const response = await read(queryParams);
                this.data = response.data.data;

                const date = new Date(this.data.ceremony_date);
                const options = { day: '2-digit', month: 'long', year: 'numeric' };
                this.parsedCeremonyDate = date.toLocaleDateString('id-ID', options);

                let time = this.data.ceremony_time.split(',');
                this.parsedCeremonyTime = {
                    start: time[0],
                    end: time[1]
                };
                
                time = this.data.reception_time.split(',');
                this.parsedReceptionTime = {
                    start: time[0],
                    end: time[1]
                };

                this.ceremonyCoordinates = JSON.parse(this.data.ceremony_coordinates);
                this.receptionCoordinates = JSON.parse(this.data.reception_coordinates);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            },
            initMap() {
                const map = L.map('map').setView([this.ceremonyCoordinates.latitude, this.ceremonyCoordinates.longitude], 16);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                L.marker([this.ceremonyCoordinates.latitude, this.ceremonyCoordinates.longitude])
                    .addTo(map)
                    .bindPopup("Tempat Akad Nikah")
                    .openPopup();
            },
            startCountdown() {
                const targetDate = new Date(`${this.data.ceremony_date} ${this.parsedCeremonyTime.start}`).getTime();
                const countdown = setInterval(() => {
                    const now = new Date().getTime();
                    const timeDifference = targetDate - now;
                    this.countdown = {
                    days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((timeDifference % (1000 * 60)) / 1000)
                    };

                    if (timeDifference < 0) {
                        clearInterval(countdown);
                        this.countdown = { days: 0, hours: 0, minutes}
                    }
                });
            }
        }
    }
</script>