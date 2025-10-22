let carouselArr = [];

class Carousel {

    constructor(img, texto, link){
        this.img = img;
        this.texto = texto;
        this.link = link;
    }

    static Start(arr){

        if(arr && arr.length > 0){
            Carousel._arr = arr;
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel._render();

            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            if(prevBtn) prevBtn.addEventListener('click', function(e){ Carousel.Prev(); });
            if(nextBtn) nextBtn.addEventListener('click', function(e){ Carousel.Next(); });
            if(Carousel._interval) clearInterval(Carousel._interval);
            Carousel._interval = setInterval(function(){ Carousel.Next(); },3000);
        }
    }

    static _render(){
        const carousel = document.getElementById('carousel');
        const carouselTitle = document.getElementById('carousel-title');
        if(!carousel || !carouselTitle || !Carousel._arr) return;

        const atual = Carousel._arr[Carousel._sequence];

        let imgEl = carousel.querySelector('img.carousel-image');
        if(!imgEl){
            imgEl = document.createElement('img');
            imgEl.className = 'carousel-image';
            imgEl.alt = '';
            const nextBtn = document.getElementById('nextBtn');
            if(nextBtn && nextBtn.parentElement === carousel) carousel.insertBefore(imgEl, nextBtn);
            else carousel.appendChild(imgEl);
        }
        imgEl.src = `img/${atual.img}`;

        carouselTitle.innerHTML = `<a href="${atual.link}">${atual.texto}</a>`;
    }

    static Next(){
        if(!Carousel._arr || Carousel._size === 0) return;
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        Carousel._render();
    }

    static Prev(){
        if(!Carousel._arr || Carousel._size === 0) return;
        Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
        Carousel._render();
    }
}
