
Vue.component('share', {
    template: `
        <div class="component">
            <span>Share</span>
            <a href="https://www.facebook.com">
                <img src="./images/icon-facebook.svg" alt="logo-facebook">
            </a>
            <a href="https://www.twitter.com">
                <img src="./images/icon-twitter.svg" alt="logo-twitter">
            </a>
            <a href="https://www.pinterest.com">
                <img src="./images/icon-pinterest.svg" alt="logo-pinterest">
            </a>
            <div class="path"></div>
        </div>
    `,
})


Vue.component('comp-item',{
    props: ['comppros'],
    template: `
        <div class="card">
            <div class="img"><img src="./images/drawers.jpg" alt="_blank"></div>
            <div class="section">
                <h2>{{ comppros.title }}</h2>
                <p>{{ comppros.text }}</p>
                <div class="card_footer">
                    <div class="person">
                        <img src="./images/avatar-michelle.jpg" alt="avatar-michelle">
                        <div>
                            <span>{{ comppros.name }}</span>
                            <p>{{ comppros.date }}</p>
                        </div>
                    </div>  
                    <div class="share">
                        <button class="share-cta">
                            <img src="./images/icon-share.svg" alt="share">
                        </button>
                        <share></share>
                    </div>
                </div>
            </div>
        </div>
    `
})

const app = new Vue({
    el: "#app",
    data:{
        components: [
            {
                id: 1,
                title: "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
                text: "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
                name: "Michelle Appleton",
                date: "28 Jun 2020"
            }
        ]
    }
})

const shareCTA = document.querySelector('.share-cta');
const component = document.querySelector('.component');
const person = document.querySelector('.person')

let windowWidth = window.innerWidth;
console.log(windowWidth)
shareCTA.addEventListener('click', function(){
    if(component.style.opacity == 0){
        component.style.opacity = 1;
        if(windowWidth <= 850){
            person.style.display = 'none';
            shareCTA.style.justifyContent = "end"
        }
    }else{
        component.style.opacity = 0;
        person.style.display = 'flex';
    }
    
})
