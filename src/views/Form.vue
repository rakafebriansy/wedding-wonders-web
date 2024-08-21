<template>
    <div class="w-full h-full bg-[#EBF3F5] flex flex-col items-center justify-center font-manropeRegular min-h-screen gap-6 relative">
        <div class="text-center flex flex-col items-center gap-2 w-[80%]">
            <p class="text-[#7A9CA5] text-xs">WEDDING WONDERS</p>
            <h1 class="text-3xl font-playfairDisplayBold lg:text-5xl">Identitas Pengantin</h1>
            <p class="text-sm">Silahkan isi data di bawah ini dengan sebenar-benarnya dan penuh tanggung jawab</p>
        </div>
        <div class="w-[90%] bg-white flex flex-col items-center lg:max-w-[60%]">
            <ul class="flex gap-5 w-full p-10 pb-0 justify-between">
                <li class="flex gap-2 items-center select-none cursor-pointer" @click="pageStore.changeCurrentPage(1)">
                    <NumberBox size="w-10 h-10" :colored="pageStore.pageNum == 1 ? true : false">1</NumberBox>
                    <p class="hidden lg:block">Pria</p>
                </li>
                <li class="flex gap-2 items-center select-none cursor-pointer" @click="pageStore.changeCurrentPage(2)">
                    <NumberBox size="w-10 h-10" :colored="pageStore.pageNum == 2 ? true : false">2</NumberBox>
                    <p class="hidden lg:block">Wanita</p>
                </li>
                <li class="flex gap-2 items-center select-none cursor-pointer" @click="pageStore.changeCurrentPage(3)">
                    <NumberBox size="w-10 h-10" :colored="pageStore.pageNum == 3 ? true : false">3</NumberBox>
                    <p class="hidden lg:block">Akad</p>
                </li>
                <li class="flex gap-2 items-center select-none cursor-pointer" @click="pageStore.changeCurrentPage(4)">
                    <NumberBox size="w-10 h-10" :colored="pageStore.pageNum == 4 ? true : false">4</NumberBox>
                    <p class="hidden lg:block">Resepsi</p>
                </li>
                <li class="flex gap-2 items-center select-none cursor-pointer" @click="pageStore.changeCurrentPage(5)">
                    <NumberBox size="w-10 h-10" :colored="pageStore.pageNum == 5 ? true : false">5</NumberBox>
                    <p class="hidden lg:block">Undangan</p>
                </li>
            </ul>
            <form @submit.prevent="submitForm" method="POST" class="p-10 w-full lg:p-10 text-xs">
                <ul :class="`w-full ${pageStore.pageNum == 1 ? 'flex' : 'hidden'} flex-col gap-4`">
                    <li>
                        <TextBox placeholder="Nama Pengantin Pria" name="groom_name" :icon="maleIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Nama Ayah Pengantin Pria" name="groom_father_name" :icon="manIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Nama Ibu Pengantin Pria" name="groom_mother_name" :icon="womanIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Nama Keluarga Besar Pria" name="groom_family_name" :icon="groupIcon" />
                    </li>
                    <li>
                        <ElbowButton btnType="button" @click="movePage()" textSize="text-lg" :full="true">SELANJUTNYA</ElbowButton>
                    </li>
                </ul>
                <ul :class="`w-full ${pageStore.pageNum == 2 ? 'flex' : 'hidden'} flex-col gap-4`">
                    <li>
                        <TextBox placeholder="Nama Pengantin Wanita" name="bride_name" :icon="maleIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Nama Ayah Pengantin Wanita" name="bride_father_name" :icon="manIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Nama Ibu Pengantin Wanita" name="bride_mother_name" :icon="womanIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Nama Keluarga Besar Wanita" name="bride_family_name" :icon="groupIcon" />
                    </li>
                    <li>
                        <ElbowButton btnType="button" @click="movePage()" textSize="text-lg" :full="true">SELANJUTNYA</ElbowButton>
                    </li>
                </ul>
                <ul :class="`w-full ${pageStore.pageNum == 3 ? 'flex' : 'hidden'} flex-col gap-4`">
                    <li>
                        <TextBox placeholder="Waktu Akad Nikah" name="ceremony_time" :icon="clockIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Tanggal Akad Nikah (YYYY-MM-DD)" name="ceremony_date" :icon="dateIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Tempat Akad Nikah" name="ceremony_location" :icon="buildingIcon" />
                    </li>
                    <li class="relative">
                        <input type="hidden" name="ceremony_coordinates" :value="ceremonyCoordinates">
                        <TextBox :isReadonly="true" :placeholder="ceremonyCoordinates.length > 0 ? 'Sudah Terisi' : 'Koordinat Lokasi Tempat Akad Nikah'" :icon="locationIcon" />
                        <div @click="ceremonyMapModal = true" class=" absolute right-5 top-1/2 -translate-y-1/2"><p class="font-manropeSemiBold select-none text-[#5C8692] hover:underline cursor-pointer">pilih</p></div>
                    </li>
                    <li>
                        <ElbowButton btnType="button" @click="movePage()" textSize="text-lg" :full="true">SELANJUTNYA</ElbowButton>
                    </li>
                </ul>
                <ul :class="`w-full ${pageStore.pageNum == 4 ? 'flex' : 'hidden'} flex-col gap-4`">
                    <li>
                        <TextBox placeholder="Waktu Resepsi Nikah" name="reception_time" :icon="clockIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Tanggal Resepsi Nikah (YYYY-MM-DD)" name="reception_date" :icon="dateIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Tempat Resepsi Nikah" name="reception_location" :icon="buildingIcon" />
                    </li>
                    <li class="relative">
                        <input type="hidden" name="reception_coordinates" :value="receptionCoordinates">
                        <TextBox :isReadonly="true" :placeholder="receptionCoordinates.length > 0? 'Sudah Terisi' : 'Koordinat Lokasi Tempat Resepsi Nikah'" :icon="locationIcon" />
                        <div @click="receptionMapModal = true" class=" absolute right-5 top-1/2 -translate-y-1/2"><p class="font-manropeSemiBold select-none text-[#5C8692] hover:underline cursor-pointer">pilih</p></div>
                    </li>
                    <li >
                        <ElbowButton btnType="button" @click="movePage()" textSize="text-lg" :full="true">SELANJUTNYA</ElbowButton>
                    </li>
                </ul>
                <ul :class="`w-full ${pageStore.pageNum == 5 ? 'flex' : 'hidden'} flex-col gap-4`">
                    <li>
                        <TextareaBox placeholder="Cerita kalian..." name="story" :icon="loveIcon" />
                    </li>
                    <li class="flex flex-col gap-2 border border-[#5C8692] p-4">
                        <p class="text-[#555555] select-none opacity-60 lg: text-base">Pilih template undangan kalian...</p>
                        <div class="w-full flex gap-5">
                            <input type="hidden" name="template" :value="templatePickerValue">
                            <div :class="templatePicker1Clicked ? 'border-2 border-[#5C8692] box-border ' : ' opacity-50'" @click="templateClicked(true,false,'beautiful-in-white')">
                                <img :src="templatePicker1Img" alt="">
                            </div>
                            <div :class="templatePicker2Clicked ? 'border-2 border-[#5C8692] box-border ' : ' opacity-50'" @click="templateClicked(false,true,'black-rose')">
                                <img :src="templatePicker2Img" alt="">
                            </div>
                        </div>
                    </li>
                    <li>
                        <ElbowButton btnType="submit" textSize="text-lg" :full="true">KIRIM</ElbowButton>
                    </li>
                </ul>
            </form>
        </div>
        <div :class="`w-full min-h-screen absolute left-0 top-0 ${ceremonyMapModal ? 'block' : 'hidden'}`">
            <div class="w-full h-full absolute bg-black opacity-60"></div>
            <div class="absolute z-30 flex flex-col gap-4 left-1/2 top-1/2 -translate-y-1/2 w-96 h-96 lg:h-[30rem] lg:w-[50rem] -translate-x-1/2 bg-white p-4">
                <div id="map1" class="w-full h-[80%]"></div>
                <ElbowButton btnType="button" @click="ceremonyMapModal = false" textSize="text-lg" :full="true">PILIH</ElbowButton>
            </div>
        </div>
        <div :class="`w-full min-h-screen absolute left-0 top-0 ${receptionMapModal ? 'block' : 'hidden'}`">
            <div class="w-full h-full absolute bg-black opacity-60"></div>
            <div class="absolute z-30 flex flex-col gap-4 left-1/2 top-1/2 -translate-y-1/2 w-96 h-96 lg:h-[30rem] lg:w-[50rem] -translate-x-1/2 bg-white p-4">
                <div id="map2" class="w-full h-[80%]"></div>
                <ElbowButton btnType="button" @click="receptionMapModal = false" textSize="text-lg" :full="true">PILIH</ElbowButton>
            </div>
        </div>
        <Alert/>
    </div>
</template>

<script>
    import NumberBox from '../components/elements/NumberBox.vue';
    import ElbowButton from '../components/elements/ElbowButton.vue';
    import TextareaBox from '../components/elements/TextareaBox.vue';
    import TextBox from '../components/elements/TextBox.vue';
    import Male from '../components/icons/Male.vue';
    import Female from '../components/icons/Female.vue';
    import Group from '../components/icons/Group.vue';
    import Man from '../components/icons/Man.vue';
    import Woman from '../components/icons/Woman.vue';
    import Location from '../components/icons/Location.vue';
    import Date from '../components/icons/Date.vue';
    import Clock from '../components/icons/Clock.vue';
    import Building from '../components/icons/Building.vue';
    import { usePageStore } from '../stores/usePageStore.mjs';
    import { markRaw } from 'vue';
    import templatePicker1Img from '../assets/images/TemplatePicker1.png';
    import templatePicker2Img from '../assets/images/TemplatePicker2.png';
    import Love from '../components/icons/Love.vue';
    import L from "leaflet";
    import 'leaflet/dist/leaflet.css';
    import * as weddingService from '../services/wedding.mjs'
    import { getCookie } from '../helper/helper.mjs';
    import Alert from '../components/elements/Alert.vue';
    import { useAlertStore } from '../stores/useAlertStore.mjs';

    export default {
        setup() {
            const pageStore = usePageStore();
            const alertStore = useAlertStore();
            return {pageStore, alertStore};
        },
        data() {
            return {
                maleIcon: markRaw(Male),
                femaleIcon: markRaw(Female),
                groupIcon: markRaw(Group),
                manIcon: markRaw(Man),
                womanIcon: markRaw(Woman),
                locationIcon: markRaw(Location),
                dateIcon: markRaw(Date),
                clockIcon: markRaw(Clock),
                buildingIcon: markRaw(Building),
                loveIcon: markRaw(Love),
                templatePicker1Img,
                templatePicker2Img,
                templatePicker1Clicked: true,
                templatePicker2Clicked: false,
                templatePickerValue: 'beautiful-in-white',
                ceremonyMapModal: false,
                receptionMapModal: false,
                ceremonyCoordinates: '',
                receptionCoordinates: '',
            }
        },
        components: {
            NumberBox,
            ElbowButton,
            TextareaBox,
            TextBox,
            Male,
            Female,
            Group,
            Man,
            Woman,
            Location,
            Date,
            Clock,
            Building,
            Love,
            Alert
        },
        methods: {
            movePage(){
                this.pageStore.nextPage();
            },
            templateClicked(template1, template2, templateName) {
                this.templatePicker1Clicked = template1;
                this.templatePicker2Clicked = template2;
                this.templatePickerValue = templateName;
            },
            submitForm(e) {
                const formData = new FormData(e.target);
                const token = getCookie();
                weddingService.create(formData,token, (data) => {
                    this.alertStore.showAlert(data.message, true);
                }, (message) => {
                    this.alertStore.showAlert(message, false)
                });
            }
        },
        mounted() {
            function MapCreate(mapId) {
                var map;
                if (!(typeof map == "object")) {
                    map = L.map(mapId, {
                        center: [40, 0],
                        zoom: 16
                    });
                }
                else {
                    map.setZoom(16).panTo([40, 0]);
                }
                L.tileLayer(tilesURL, {
                    attribution: mapAttrib,
                    maxZoom: 19
                }).addTo(map);
                return map;
            }

            var tilesURL = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
            var mapAttrib = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>';

            let pin1;
            let pin2;
            let map1 = MapCreate('map1');
            let map2 = MapCreate('map2');

            map1.on('click', (e) => {
                
                this.ceremonyCoordinates = {
                    latitude: e.latlng.lat,
                    longitude: e.latlng.lng
                };
                if (typeof pin1 == "object") {
                    pin1.setLatLng(e.latlng);
                }
                else {
                    pin1 = L.marker(e.latlng, { riseOnHover: true, draggable: true });
                    pin1.addTo(map1);
                    pin1.on('drag', (e) => {
                        this.ceremonyCoordinates = JSON.stringify({
                        latitude: e.latlng.lat,
                        longitude: e.latlng.lng
                    });
                    });
                }
                console.log(this.ceremonyCoordinates)
            });
            map2.on('click', (e) => {
                this.receptionCoordinates = JSON.stringify({
                    latitude: e.latlng.lat,
                    longitude: e.latlng.lng
                });
                if (typeof pin2 == "object") {
                    pin2.setLatLng(e.latlng);
                }
                else {
                    pin2 = L.marker(e.latlng, { riseOnHover: true, draggable: true });
                    pin2.addTo(map2);
                    pin2.on('drag', (e) => {
                        this.receptionCoordinates = JSON.stringify({
                            latitude: e.latlng.lat,
                            longitude: e.latlng.lng
                        });
                    });
                }
            });
        },
    }
</script>