Vue.createApp({
    data() {
        return {
            mobileNav: false,
        }
    },
    methods: {
        test() {
            this.mobileNav = !this.mobileNav;
        }
    }
}).mount('.navbar')