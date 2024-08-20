<template>
    <div class="w-full h-full bg-[#EBF3F5] flex flex-col items-center justify-center font-manropeRegular min-h-screen gap-6">
        <div class="text-center flex flex-col items-center gap-2 w-[80%]">
            <p class="text-[#7A9CA5] text-xs">WEDDING WONDERS</p>
            <h1 class="text-3xl font-playfairDisplayBold lg:text-5xl">Registrasi</h1>
            <p class="text-sm">Silahkan daftar akun untuk melanjutkan</p>
        </div>
        <div class="w-[90%] bg-white flex flex-col items-center lg:max-w-[60%]">
            <form action="" method="POST" class="p-10 w-full lg:p-10 text-xs">
                <ul class="w-full flex flex-col gap-4">
                    <li>
                        <TextBox placeholder="Email" name="email" :icon="emailIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Kata Sandi" :isPassword="true" name="password" :icon="passwordIcon" />
                    </li>
                    <li>
                        <TextBox placeholder="Konfirmasi Kata Sandi" :isPassword="true" name="password_confirmation" :icon="passwordIcon" />
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
    import ElbowButton from '../components/elements/ElbowButton.vue';
    import TextBox from '../components/elements/TextBox.vue';
    import Email from '../components/icons/Email.vue';
    import Password from '../components/icons/Password.vue';

    import { useLoginStore } from '../stores/useLoginStore.mjs';
    import { markRaw } from 'vue';

    export default {
        setup() {
            const loginStore = useLoginStore();
            return {loginStore};
        },
        data() {
            return {
                emailIcon: markRaw(Email),
                passwordIcon: markRaw(Password),
            }
        },
        components: {
            ElbowButton,
            TextBox,
            Email,
            Password,
        },
        methods: {
            submitForm() {

            }
        }
    }
</script>