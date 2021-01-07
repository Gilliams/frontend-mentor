

const app = new Vue({
    el: "#app",
    data:{
        active: false,
        index: 1,
        sliders:[
            {
                id: 1,
                title: `Discover innovative <br>ways to decorate`,
                text: `We provide unmatched quality, comfort, and style for property owners across the country. 
                Our experts combine form and function in bringing your vision to life. Create a room in your 
                own style with our collection and make your property a reflection of you and what you love.`,
                imgD: "./images/desktop-image-hero-1.jpg",
                imgM: "./images/mobile-image-hero-1.jpg",
                alt: "Picture hero 1"
            },
            {
                id: 2,
                title: `We are available <br>all across the globe`,
                text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                store locator. Any questions? Don't hesitate to contact us today.`,
                imgD: "./images/desktop-image-hero-2.jpg",
                imgM: "./images/mobile-image-hero-2.jpg",
                alt: "Picture hero 2"
            },
            {
                id: 3,
                title: `Manufactured with <br> the best materials`,
                text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                experience in this industry, we understand what customers want for their home and office.`,
                imgD: "./images/desktop-image-hero-3.jpg",
                imgM: "./images/mobile-image-hero-3.jpg",
                alt: "Picture hero 3"
            }
        ]
    },
    methods:{
        sliderUp: function(){
            this.index++;
            if(this.index > 3 ){
                this.index = 1;
            }
        },
        sliderDown: function(){
            this.index--;
            if(this.index < 1 ){
                this.index = 3;
            }
        }
    }
    
})