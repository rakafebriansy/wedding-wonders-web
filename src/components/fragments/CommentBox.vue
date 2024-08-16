<template>
    <div class="w-full text-xs lg:text-base flex flex-col font-manropeRegular bg-white">
        <div class="p-5 w-full">
            <p><slot></slot></p>
        </div>
        <div class="w-full py-5 bg-[#1E2C30] flex justify-center text-white">
            <div class="w-[80%] flex justify-between items-center">
                <div class="flex gap-6">
                    <img :src="profileImg" class="w-10">
                    <div class="flex flex-col">
                        <ul class="flex gap-1">
                            <li>
                                <starIcon classname="w-3"/>
                            </li>
                            <li>
                                <starIcon classname="w-3"/>
                            </li>
                            <li>
                                <starIcon classname="w-3"/>
                            </li>
                            <li>
                                <starIcon classname="w-3"/>
                            </li>
                            <li>
                                <starIcon classname="w-3"/>
                            </li>
                        </ul>
                        <h3 class=" font-playfairDisplaySemiBold text-xs lg:text-base">{{ name }}</h3>
                        <p class="text-[0.5rem] lg:text-xs">{{ from }}</p>
                    </div>
                </div>
                <svg class="w-6" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7.99996L12.1053 15.8947V0.105225H20V7.99996Z" fill="white"/>
                    <path d="M7.89474 7.99996L0 15.8947V0.105225H7.89474V7.99996Z" fill="white"/>
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
    import profileImg from '../../assets/images/Profile.png';
    import starIcon from '../icons/Star.vue';

    export default {
        data() {
            return {
                profileImg,
            }
        },
        props: {
            name: String,
            from: String,
        },
        components: {
            starIcon
        }
    }
</script>