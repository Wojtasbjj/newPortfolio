Vue.createApp({
    data() {
        return {
            mobileNav: false,
            showTel: false
        }
    },
    methods: {
        test() {
            this.mobileNav = !this.mobileNav;
        },
        sendEmail() {
            console.log('wyslano wiadomosc')
        }
    }
}).mount('body')