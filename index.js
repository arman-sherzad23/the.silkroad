
/*=============== LOGIN ===============*/

const loginButton = document.getElementById("login-button"),
    loginClose = document.getElementById("login-close"),
    loginContent = document.getElementById("login-wrapper")

if(loginButton){
    loginButton.addEventListener('click', ()=>{
        loginContent.classList.add('show-login')
    })
}

if(loginClose){
    loginClose.addEventListener('click', ()=>{
        loginContent.classList.remove('show-login')
    })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/

let swiperHome = new Swiper('.home-swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView:'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
  });

/*=============== FEATURED SWIPER ===============*/

let swiperFeatured = new Swiper('.featured-swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView:'auto',
    centeredSlides: 'auto',

     navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
  });

/*=============== NEW SWIPER ===============*/

let swiperNew = new Swiper('.new-swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView:'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }
  });

/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
   
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const searchAction = document.getElementById('search-action');
    const featuredCard = document.getElementById('featured-card');
    const featuredTitle = resultsList.getElementsByClassName('featured-title');

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();

        Array.from(items).forEach(item => {
            const text = item.textContent || item.innerText;
            if (text.toLowerCase().includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

/*=============== text animation ===============*/


let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("sapn");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});


let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex +1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex == maxWordIndex ? 0: currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)

/*=============== text animation ===============*/

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Founder";
    }, 0);
    setTimeout(() => {
        text.textContent = "Arman";
    }, 4000);
}

textLoad();
setInterval(textLoad, 12000);