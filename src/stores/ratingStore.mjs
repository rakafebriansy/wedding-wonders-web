import { defineStore } from "pinia";

export const useRatingSore = defineStore('rating',{
    state: () => ({rating: 0}),
    getters: {
        getRating: (state) => state.rating
    },
    actions: {
        setRating(rating) {
            this.rating = rating;
        }
    }

});