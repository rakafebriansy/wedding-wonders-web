<template>
    <div class="w-full h-full bg-[#EBF3F5] flex flex-col items-center justify-center font-manropeRegular min-h-screen gap-6">
        <div class="text-center flex flex-col items-center gap-2 w-[80%]">
            <p class="text-[#7A9CA5] text-xs">WEDDING WONDERS</p>
            <h1 class="text-3xl font-playfairDisplayBold lg:text-5xl">Registrasi</h1>
            <p class="text-sm">Silahkan daftar akun untuk melanjutkan</p>
        </div>
        <div class="w-[90%] bg-white flex flex-col items-center lg:max-w-[60%] p-10">
            <form @submit.prevent="doRegister" method="POST" class="w-full  text-xs flex flex-col justify-center items-center gap-4">
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
                        <ElbowButton btnType="submit" textSize="text-lg" :full="true">KIRIM</ElbowButton>
                    </li>
                </ul>
                <p class="text-sm text-[#7A9CA5] select-none">Sudah memiliki akun? <RouterLink to="/login" class="font-manropeSemiBold hover:underline cursor-pointer">Login</RouterLink></p>
            </form>
        </div>
        <Alert/>
    </div>
</template>

<script>
    import { RouterLink } from 'vue-router';
    import ElbowButton from '../components/elements/ElbowButton.vue';
    import TextBox from '../components/elements/TextBox.vue';
    import Email from '../components/icons/Email.vue';
    import Password from '../components/icons/Password.vue';
    import Alert from '../components/elements/Alert.vue'
    import { useLoginStore } from '../stores/useLoginStore.mjs';
    import { markRaw } from 'vue';
    import { register } from '../services/auth.mjs';
    import { useAlertStore } from '../stores/useAlertStore.mjs';

    export default {
        setup() {
            const loginStore = useLoginStore();
            const alertStore = useAlertStore();
            return {loginStore, alertStore};
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
            Alert
        },
        methods: {
            doRegister(e) {
                const formData = new FormData(e.target);
                register(formData, (data) => {
                    setTimeout(() => {
                        this.alertStore.hideAlert();
                        this.$router.push('/login');
                    }, 2000);
                    this.alertStore.showAlert(data.message, true);
                }, (message) => {
                    this.alertStore.showAlert(message, false)
                });
            }
        }
    }
</script>