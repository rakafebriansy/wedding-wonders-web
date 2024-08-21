<template>
    <div v-if="data" class="relative font-manropeRegular">
        <section class="relative w-full min-h-screen overflow-hidden flex justify-center flex-col items-center gap-16 lg:gap-28">
            <img :src="weddingPhotoImg" alt="wedding-photo" class="animation-slideshow lg:animate-none absolute h-full left-0 lg:w-screen max-w-max lg:max-w-none">
            <div class="w-full h-full bg-[rgba(255,255,255,0.7)] absolute"></div>
            <div class="text-4xl lg:text-6xl lg:gap-6 font-appleChancery z-10 flex items-center gap-2 flex-col">
                <h1 class="gold-to-bottom">{{ data.groom_name }}</h1>
                <h1 class="gold-to-bottom">&</h1>
                <h1 class="gold-to-bottom">{{ data.bride_name }}</h1>
            </div>
            <div class="z-10 flex flex-col gap-1 lg:gap-4 items-center">
                <h2 class="text-3xl lg:text-5xl font-parisienneRegular text-center">Akan segera melangsungkan pernikahan</h2>
                <h2 class="text-2xl lg:text-4xl font-oxygenMonoRegular">{{ this.parsedCeremonyDate }}</h2>
            </div>
            <h2 class="text-2xl lg:text-4xl font-oxygenMonoRegular z-10 text-center">
                <span class="text-[#6B5125]">{{ this.countdown.days }}</span> Hari 
                <span class="text-[#6B5125]">{{ this.countdown.hours }}</span> Jam 
                <span class="text-[#6B5125]">{{ this.countdown.minutes }}</span> Menit 
                <span class="text-[#6B5125]">{{ this.countdown.seconds }}</span> Detik
            </h2>
        </section>
        <section class="flex flex-col lg:flex-row items-center lg:py-4">
            <div class="w-[80%] flex flex-col items-center py-8">
                <h1 class="text-4xl lg:text-5xl gold-to-top font-appleChancery mb-5">{{ this.data.groom_name }}</h1>
                <div class="font-parisienneRegular text-lg lg:text-2xl">
                    <p class="mb-2">Putra dari Bapak {{ this.data.groom_father_name }}</p>
                    <p>Putra dari Ibu {{ this.data.groom_mother_name }}</p>
                </div>
            </div>
            <div class="w-[80%] flex flex-col items-center py-8">
                <h1 class="text-4xl lg:text-5xl gold-to-top font-appleChancery mb-5">{{ this.data.bride_name }}</h1>
                <div class="font-parisienneRegular text-lg lg:text-2xl">
                    <p class="mb-2">Putra dari Bapak {{ this.data.bride_father_name }}</p>
                    <p>Putra dari Ibu {{ this.data.bride_mother_name }}</p>
                </div>
            </div>
        </section>
        <section class="flex flex-col items-center">
            <div class="w-[80%] lg:w-[75%] flex flex-col items-start py-8 gap-4 lg:gap-6">
                <h2 class="font-appleChancery text-3xl lg:text-4xl">Story</h2>
                <div class="flex flex-col text-sm lg:text-base lg:flex-row lg:gap-10">
                    <p class="w-full gold-to-bottom text-justify">{{ data.story }}</p>
                </div>
            </div>
        </section>
        <section class="flex flex-col items-center ">
            <div class="w-[90%] flex flex-col items-center gap-8 py-8">
                <h2 class="text-4xl lg:text-5xl font-parisienneRegular">Lokasi</h2>
                <div class="w-full min-h-96 lg:min-h-[30rem] z-0" id="map">
                </div>
            </div>
        </section>
        <section class="flex flex-col items-center font-appleChancery relative">
            <div class="hidden lg:block absolute -left-1/4 -top-0">
                <svg class="w-[300%] h-[300%]" viewBox="0 0 1233  1259" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_116_544)">
                    <circle cx="629.5" cy="629.5" r="264.5" fill="#F9DAB5" fill-opacity="0.83"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_116_544" x="0" y="0" width="1259" height="1259" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="182.5" result="effect1_foregroundBlur_116_544"/>
                    </filter>
                    </defs>
                </svg>
            </div>
            <div class="w-[80%] py-8 lg:py-16 flex justify-center items-center">
                <div class="w-full flex flex-col text-2xl lg:text-3xl gap-8 lg:gap-16 lg:w-[70%]">
                    <div class="flex flex-col lg:flex-row-reverse lg:justify-between gap-8 ">
                        <div class="flex flex-col items-center text-center gap-3 lg:w-[40%]">
                            <h3 class="text-[#9A7436]">There is only one happiness in this life, to love and be loved</h3>
                            <img :src="flowerImg" class="w-[20%]" alt="Flower">
                        </div>
                        <div class="small-shadow p-8 flex flex-col items-center text-center gap-3 lg:min-w-96">
                            <h3 class="gold-to-bottom">Marriage</h3>
                            <div class="gold-to-bottom lg:items-center text-sm lg:text-base font-poppinsRegular flex flex-col gap-3">
                                <p>{{ parsedCeremonyTime.start }} to {{ parsedCeremonyTime.end }}</p>
                                <p class="lg:w-[60%]">{{ data.ceremony_location }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row lg:justify-between gap-8 ">
                        <div class="flex flex-col items-center text-center gap-3 lg:w-[40%]">
                            <h3 class="text-[#9A7436]">There is only one happiness in this life, to love and be loved</h3>
                            <img :src="flowerImg" class="w-[20%]" alt="Flower">
                        </div>
                        <div class="small-shadow p-8 flex flex-col items-center text-center gap-3 lg:min-w-96">
                            <h3 class="gold-to-bottom">Reception</h3>
                            <div class="gold-to-bottom lg:items-center text-sm lg:text-base font-poppinsRegular flex flex-col gap-3">
                                <p>{{ parsedReceptionTime.start }} to {{ parsedReceptionTime.end }}</p>
                                <p class="lg:w-[60%]">{{ data.reception_location }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="flex justify-center items-center p-8">
            <form @submit.prevent="submitForm" class="small-shadow p-6 flex flex-col items-center font-poppinsRegular text-sm lg:text-lg gap-6">
                <h2 class="text-3xl lg:text-4xl text-center font-playfairDisplaySemiBold">Kirim Doa Dan Ucapan</h2>
                <p class="text-base lg:text-lg text-center text-[#7E7E7E] lg:w-[80%]">Tuliskan sesuatu ucapan berupa harapan ataupun doa untuk kedua mempelai.</p>
                <div class="flex flex-col gap-2 lg:gap-3 w-full">
                    <TextBoxBw placeholder="Tuliskan nama lengkap anda" name="fullname"/>
                    <TextBoxBw placeholder="Tuliskan alamat email lengkap" name="email"/>
                    <TextBoxBw placeholder="Tuliskan nomor HP lengkap" name="phone_number"/>
                    <TextBoxBw placeholder="Tuliskan alamat lengkap anda (opsional)" name="address"/>
                    <TextareaBoxBw placeholder="Tuliskan pesan anda kepada kedua mempelai" name="content"/>
                    <div class="w-full flex flex-col items-start gap-1 text-[#7E7E7E]">
                        <p>Apakah anda akan hadir memenuhi undangan saya?</p>
                        <div class="flex gap-2">
                            <input type="radio" name="isAttending" value="1">
                            <p>Saya akan hadir</p>
                        </div>
                        <div class="flex gap-2">
                            <input type="radio" name="isAttending" value="0">
                            <p>Saya tidak akan hadir</p>
                        </div>
                    </div>
                </div>
                <RoundedButton btnType="submit" textSize="text-sm lg:text-lg" :full="true">KIRIM</RoundedButton>
            </form>
        </section>
        <section class="flex justify-center py-8">
            <h4 class="text-sm font-poppinsRegular gold-to-bottom">Kehadiran Anda kami Tunggu</h4>
        </section>
        <Alert/>
    </div>
    <div v-else class="w-full min-h-screen flex justify-center items-center">
        <p>Loading...</p>
    </div>
</template>

<script>
    import weddingPhotoImg from '../../assets/images/WeddingPhoto.png';
    import flowerImg from '../../assets/images/Flower.png';
    import TextBoxBw from '../../components/elements/TextBoxBw.vue';
    import TextareaBoxBw from '../../components/elements/TextareaBoxBw.vue';
    import RoundedButton from '../../components/elements/RoundedButton.vue';
    import { read } from '../../services/wedding.mjs';
    import L from "leaflet";
    import 'leaflet/dist/leaflet.css';
    import { useAlertStore } from '../../stores/useAlertStore.mjs';
    import { create } from '../../services/comment.mjs';
    import Alert from '../../components/elements/Alert.vue';

    export default {
        setup() {
            const alertStore = useAlertStore();
            return { alertStore };
        },
        data() {
            return {
            flowerImg,
            weddingPhotoImg,
            data: null,
            parsedCeremonyDate: '',
            parsedCeremonyTime: {},
            parsedReceptionDate: '',
            parsedReceptionTime: {},
            countdown: {},
            ceremonyCoordinates: {},
            receptionCoordinates: {},
            };
        },
        components: {
            TextBoxBw,
            TextareaBoxBw,
            RoundedButton,
            Alert
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
            },
            submitForm(e) {
                const queryParams = atob(this.$route.params.id);
                const formData = new FormData(e.target);
                create(formData, queryParams, (data) => {
                    this.alertStore.showAlert(data.message, true);
                }, (message) => {
                    this.alertStore.showAlert(message, false)
                });
            }
        }
    }
</script>