
Vue.component('rated-item', {
    props:['rated'],
    template: `
    <div class="rated_item " :class="[rated.class]">
        <div class="stars">
            <img src="images/icon-star.svg" alt="star" class="star">
            <img src="images/icon-star.svg" alt="star" class="star">
            <img src="images/icon-star.svg" alt="star" class="star">
            <img src="images/icon-star.svg" alt="star" class="star">
            <img src="images/icon-star.svg" alt="star" class="star">
        </div>
        <p class="rated_item_text">{{rated.text}}</p>
    </div>
    `
})

Vue.component('card-item',{
    props:['card'],
    template: `
    <div class="card" :class="[card.class]">
        <div class="card_header">
            <img :src="[card.img]" :alt="[card.name]">
            <div class="card_header_title">
                <p class="card_name">{{ card.name }}</p>
                <p class="card_profession">{{ card.job }}</p>
            </div>
        </div>
        <p class="card_body"> {{card.text }}</p>
    </div>
    `
})

const app = new Vue({
    el: "#app",
    data:{
        ratedStars: [
            {id: 0, text: "Rated 5 Stars in Reviews"},
            {id: 1, text: "Rated 5 Stars in Report Guru", class:"rated_item__2"},
            {id: 2, text: "Rated 5 Stars in BestTech", class:" rated_item__3"},
        ],
        cards: [
            {id: 0, name: "Colton Smith ", img: "images/image-colton.jpg", job: "Verified Buyer", text: " \"We needed the same printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time.Excellent!\" "},
            {id: 1, name: "Irene Roberts", img: "images/image-irene.jpg", job: "Verified Buyer", text: " \"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.\" ", class: "card__2"},
            {id: 2, name: "Anne Wallace", img: "images/image-anne.jpg", job: "Verified Buyer", text: " \"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!\"", class: "card__3"}
        ]
    }
})