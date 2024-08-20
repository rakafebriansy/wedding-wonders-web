<template>
    <div class="w-full h-full bg-[#EBF3F5] flex flex-col items-center justify-center font-manropeRegular min-h-screen gap-6">
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
            <form action="" method="POST" class="p-10 w-full lg:p-10 text-xs">
                <ul v-if="pageStore.pageNum == 1" class="w-full flex flex-col gap-4">
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
                <ul v-if="pageStore.pageNum == 2" class="w-full flex flex-col gap-4">
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
                <ul v-if="pageStore.pageNum == 3" class="w-full flex flex-col gap-4">
                    <li>
                        <TextBox placeholder="Waktu Akad Nikah" name="ceremony_time" :icon="clockIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Tanggal Akad Nikah" name="ceremony_date" :icon="dateIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Tempat Akad Nikah" name="ceremony_location" :icon="buildingIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Koordinat Lokasi Tempat Akad Nikah" name="ceremony_coordinates" :icon="locationIcon" />
                    </li>
                    <li>
                        <ElbowButton btnType="button" @click="movePage()" textSize="text-lg" :full="true">SELANJUTNYA</ElbowButton>
                    </li>
                </ul>
                <ul v-if="pageStore.pageNum == 4" class="w-full flex flex-col gap-4">
                    <li>
                        <TextBox placeholder="Waktu Resepsi Nikah" name="reception_time" :icon="clockIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Tanggal Resepsi Nikah" name="reception_date" :icon="dateIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Tempat Resepsi Nikah" name="reception_location" :icon="buildingIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Koordinat Lokasi Tempat Resepsi Nikah" name="reception_coordinates" :icon="locationIcon" />
                    </li>
                    <li>
                        <ElbowButton btnType="button" @click="movePage()" textSize="text-lg" :full="true">SELANJUTNYA</ElbowButton>
                    </li>
                </ul>
                <ul v-if="pageStore.pageNum == 5" class="w-full flex flex-col gap-4">
                    <li>
                        <TextareaBox placeholder="Cerita kalian..." name="story" :icon="loveIcon" />
                    </li>
                    <li class="flex flex-col gap-2 border border-[#5C8692] p-4">
                        <p class="text-[#555555] select-none opacity-60 lg: text-base">Pilih template undangan kalian...</p>
                        <div class="w-full flex gap-5">
                            <div :class="templatePicker1Clicked ? 'border-2 border-[#5C8692] box-border ' : ' opacity-50'" @click="templateClicked(true,false)">
                                <img :src="templatePicker1Img" alt="">
                            </div>
                            <div :class="templatePicker2Clicked ? 'border-2 border-[#5C8692] box-border ' : ' opacity-50'" @click="templateClicked(false,true)">
                                <img :src="templatePicker2Img" alt="">
                            </div>
                        </div>
                    </li>
                    <li>
                        <ElbowButton btnType="button" @click="submitForm" textSize="text-lg" :full="true">KIRIM</ElbowButton>
                    </li>
                </ul>
            </form>
        </div>
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

    export default {
        setup() {
            const pageStore = usePageStore();
            return {pageStore};
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
            Love
        },
        methods: {
            movePage(){
                this.pageStore.nextPage();
            },
            templateClicked(template1, template2) {
                this.templatePicker1Clicked = template1;
                this.templatePicker2Clicked = template2;
            },
            submitForm() {
                
            }
        }
    }
</script>