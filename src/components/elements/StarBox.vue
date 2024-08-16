<template>
    <div class="border border-[#5C8692] text-[#fbebeb] w-full flex justify-start px-2 py-3 h-12">
        <input type="hidden" :name="name" :value="rating">
        <div class="w-[10%] flex justify-center items-center">
            <component v-if="icon" :is="icon" classname="w-4 lg:w-5" color="#5C8692"></component>
        </div>
        <ul class="w-[90%] flex justify-center items-center gap-8 select-none">
            <li @click="()=>{starClicked(1)}">
                <Star2 classname="w-4 lg:w-5" :rated="firstStar" color="#5C8692"/>
            </li>
            <li @click="()=>{starClicked(2)}">
                <Star2 classname="w-4 lg:w-5" :rated="secondStar" color="#5C8692"/>
            </li>
            <li @click="()=>{starClicked(3)}">
                <Star2 classname="w-4 lg:w-5" :rated="thirdStar" color="#5C8692"/>
            </li>
            <li @click="()=>{starClicked(4)}">
                <Star2 classname="w-4 lg:w-5" :rated="fourthStar" color="#5C8692"/>
            </li>
            <li @click="()=>{starClicked(5)}">
                <Star2 classname="w-4 lg:w-5" :rated="fifthStar" color="#5C8692"/>
            </li>
        </ul>
    </div>
</template>


<script>
    import Star2 from '../icons/Star2.vue';

    export default {
        props: {
            icon: {
                type: Object,
                required: false
            },
            name:String
        },
        data() {
            return {
                rating: 0,
                firstStar: false,
                secondStar: false,
                thirdStar: false,
                fourthStar: false,
                fifthStar: false,
            }
        },
        components: {
            Star2
        },
        methods: {
            starClicked(rating) {
                this.rating = rating;
                switch (rating) {
                    case 5: 
                        this.fifthStar = true;
                        this.fourthStar = true;
                        this.thirdStar = true;
                        this.secondStar = true;
                        this.firstStar = true;
                        break;
                    case 4: 
                        this.fifthStar = false;
                        this.fourthStar = true;
                        this.thirdStar = true;
                        this.secondStar = true;
                        this.firstStar = true;
                        break;
                    case 3:
                        this.fifthStar = false;
                        this.fourthStar = false;
                        this.thirdStar = true;
                        this.secondStar = true;
                        this.firstStar = true;
                        break;
                    case 2:
                        this.fifthStar = false;
                        this.fourthStar = false;
                        this.thirdStar = false;
                        this.secondStar = true;
                        this.firstStar = true;
                        break;
                    case 1:
                        this.fifthStar = false;
                        this.fourthStar = false;
                        this.thirdStar = false;
                        this.secondStar = false;
                        this.firstStar = true;
                        break;
                }
            }
        },
    }
</script>