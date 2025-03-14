let testOne=document.getElementById('testSection');
let myinfoTest=[
    {
        tittle:`"`,
        sub:`The food at this restaurant is absolutely amazing! Every dish is packed with flavor, and the presentation is top-notch. I highly recommend the grilled salmon—it’s the best I’ve ever had!`,
        image: `homePageImage/review photo/b1.jpg`,
        name: `Abishek Thapa`,
        star: `****`
    },
    {
        tittle:`"`,
        sub:`I’ve been coming here for years, and the quality never disappoints. The staff is friendly, the ambiance is cozy, and the desserts are to die for. A must-visit for anyone who loves great food!`,
        image: `homePageImage/review photo/b1.jpg`,
        name: `Abishek Thapa`,
        star: `****`
    },
    {
        tittle:`"`,
        sub:`This place is a hidden gem! The portions are generous, and the flavors are incredible. I especially love their homemade pasta dishes. You can tell they use fresh, high-quality ingredients.`,
        image: `homePageImage/review photo/b1.jpg`,
        name: `Abishek Thapa`,
        star: `****`
    },
  
    {
        tittle:`"`,
        sub:`The best dining experience I’ve had in a long time! The menu is diverse, and everything we ordered was delicious. The service was impeccable, and the atmosphere was perfect for a night out.`,
        image: `homePageImage/review photo/b1.jpg`,
        name: `Abishek Thapa`,
        star: `****`
    },
    {
        tittle:`"`,
        sub:`I can’t get enough of this place! The food is always fresh, and the flavors are out of this world. Their signature cocktails are also a must-try. Highly recommend for any food lover!`,
        image: `homePageImage/review photo/b1.jpg`,
        name: `Abishek Thapa`,
        star: `****`
    },
    {
        tittle:`"`,
        sub:`This restaurant is a true gem! The flavors are incredible, and every dish feels like it’s made with love. The service is warm and welcoming, and the ambiance is perfect for a relaxing meal.`,
        image: `homePageImage/review photo/b1.jpg`,
        name: `Abishek Thapa`,
        star: `****`
    },
];
myinfoTest.map((val,index)=>{
   testOne.innerHTML +=`
         <div class=" flex flex-col gap-5  h-fit  shadow-md p-4 bg-gray-600 rounded-3xl">
        <div class="flex flex-col">
            <div class="text-5xl h-fit">${val.tittle}</div>
            <div class="text-justify"> ${val.sub}</div>
        </div>
        <div class="flex gap-5">
            <div><img class="object-cover rounded-full h-11 w-11" src="${val.image}"> </div>
            <div class=" flex flex-col">
                <div class="font-semibold text-2xl"> ${val.name}</div>
                <div class="text-yellow-500 text-2xl">${val.star}</div>
            </div>

        </div>
    </div>
             
 
 
    `
 })
//mappin for food items
let dataOne =document.getElementById('manuItemsROne');
let myinfoOne=[
    {
        image: `menuItemImage/Fr1.jpg`,
        tittle: `Fried Rice`,
        dis:`rice genger`,
        price: `Rs.200`,
        order: `add to cart`


    },
    {
        image: `menuItemImage/Fr1.jpg`,
        tittle: `Fried Rice`,
        dis:`rice genger`,
        price: `Rs.200`,
        order: `add to cart`


    },
    {
        image: `menuItemImage/Fr1.jpg`,
        tittle: `Fried Rice`,
        dis:`rice genger`,
        price: `Rs.200`,
        order: `add to cart`


    },
    {
        image: `menuItemImage/Fr1.jpg`,
        tittle: `Fried Rice`,
        dis:`rice genger`,
        price: `Rs.200`,
        order: `add to cart`


    },
    {
        image: `menuItemImage/Fr1.jpg`,
        tittle: `Fried Rice`,
        dis:`rice genger`,
        price: `Rs.200`,
        order: `add to cart`


    },
    {
        image: `menuItemImage/Fr1.jpg`,
        tittle: `Fried Rice`,
        dis:`rice genger`,
        price: `Rs.200`,
        order: `add to cart`


    },
    {
        image: `menuItemImage/Fr1.jpg`,
        tittle: `Fried Rice`,
        dis:`rice genger`,
        price: `Rs.200`,
        order: `add to cart`


    },
    
];

myinfoOne.map((val,index)=>{
   dataOne.innerHTML +=`
        <div class="flex gap-2 w-full sm:w-[200px] md:w-[200px] lg:w-[300px] flex-shrink-0 bg-white p-4 shadow-lg h-fit flex-col">
            <div class="p-1 border-2 border-gray rounded-lg">
            <img class="h-[170px] object-cover w-full" src=${val.image} />
            </div>
            <div class="flex flex-col gap-2">
            <div class="flex flex-col ">
                <div class="font-semibold uppercase">${val.tittle} </div>
                <div class="p-[1px] bg-gradient-to-r from-blue-900 via-blue-700 to-pink-500 rounded-lg w-2/12"></div>
            </div>
            <div class="text-[12px] text-justify">
                ${val.dis} 
            </div>
            <div class="font-bold">${val.price} </div>
            <div class="p-2 uppercase text-[9px] font-bold w-fit bg-gradient-to-r from-blue-900 via-blue-700 to-pink-500 rounded-md cursor-pointer text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-opacity-75 hover:scale-110 hover:shadow-lg transition-all duration-300">
             ${val.order} 
            </div>
            </div>
      </div>
            


   `
})
//second row file

let dataTwo =document.getElementById('manuItemsRTwo');
let myinfoTwo=[
    {
        image: `menuItemImage/Fr1.jpg`,
        tittle: `Fried Rice`,
        dis:`rice genger`,
        price: `Rs.200`,
        order: `add to cart`


    },
    {
        image: `menuItemImage/Fr1.jpg`,
        tittle: `Fried Rice`,
        dis:`rice genger`,
        price: `Rs.200`,
        order: `add to cart`


    },
    {
        image: `menuItemImage/Fr1.jpg`,
        tittle: `Fried Rice`,
        dis:`rice genger`,
        price: `Rs.200`,
        order: `add to cart`


    },
    {
        image: `menuItemImage/Fr1.jpg`,
        tittle: `Fried Rice`,
        dis:`rice genger`,
        price: `Rs.200`,
        order: `add to cart`


    },
    {
        image: `menuItemImage/Fr1.jpg`,
        tittle: `Fried Rice`,
        dis:`rice genger`,
        price: `Rs.200`,
        order: `add to cart`


    },
    {
        image: `menuItemImage/Fr1.jpg`,
        tittle: `Fried Rice`,
        dis:`rice genger`,
        price: `Rs.200`,
        order: `add to cart`


    },
    {
        image: `menuItemImage/Fr1.jpg`,
        tittle: `Fried Rice`,
        dis:`rice genger`,
        price: `Rs.200`,
        order: `add to cart`


    },
   
];


myinfoTwo.map((val,index)=>{
   dataTwo.innerHTML +=`
        <div class=" w-full sm:w-[200px] md:w-[200px] lg:w-[300px] flex-shrink-0 bg-white p-4 shadow-lg h-fit flex-col ">
            <div class="p-1 border-2 border-gray rounded-lg">
            <img class="h-[170px] w-full object-cover" src="${val.image}"/>
            </div>
            <div class="flex flex-col gap-2">
            <div class="flex flex-col ">
                <div class="font-semibold uppercase">${val.tittle} </div>
                <div class=" p-[1px] bg-gradient-to-r from-blue-900 via-blue-700 to-pink-500 rounded-lg w-2/12"></div>
            </div>
            <div class="text-[12px] text-justify">
                ${val.dis} 
            </div>
            <div class="font-bold">${val.price} </div>
            <div class="p-2 text-[9px] font-bold  w-fit bg-gradient-to-r from-blue-900 via-blue-700 to-pink-500 rounded-md uppercase cursor-pointer text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-opacity-75 hover:scale-110 hover:shadow-lg transition-all duration-300">
             ${val.order} 
            </div>
            </div>
      </div>
   `
})


//navigation transparent
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    if (!navbar) return; // Prevent errors if navbar is missing

    const homeSection = document.getElementById("home");
    if (!homeSection) return;

    const homeHeight = homeSection.offsetHeight;

    if (window.scrollY > homeHeight - 100) {
        navbar.classList.add("bg-white",  "shadow-lg");
        navbar.classList.remove("bg-transparent");
    } else {
        navbar.classList.remove("bg-white","shadow-lg");
        navbar.classList.add("bg-transparent");
    }
});

// Smooth Scroll Effect
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
                //first page left right to center animation 
                 window.onload = () =>{
                    documnet.getElementById('left-box').classList.add('animate-left');
                    documnet.getElementById('right-box').classList.add('animate-right');
                    documnet.getElementById('right-contact').classList.add('animate-contact');
               
                    

                } 
                //footer down to up animation
                window.addEventListener('scroll', function() {
                    const fadeDiv = document.getElementById('footer');
                    const windowHeight = window.innerHeight;
                    const divPosition = fadeDiv.getBoundingClientRect().top;

                    
                    if (divPosition < windowHeight) {
                    fadeDiv.classList.add('opacity-100', 'translate-y-0');
                    }
                });
// univercity down to up scroll animation
                window.addEventListener('scroll', function() {
                    const fadeDiv = document.getElementById('one');
                    const windowHeight = window.innerHeight;
                    const divPosition = fadeDiv.getBoundingClientRect().top;

                    
                    if (divPosition < windowHeight) {
                    fadeDiv.classList.add('opacity-100', 'translate-y-0');
                    }
                });
                window.addEventListener('scroll', function() {
                    const fadeDiv = document.getElementById('two');
                    const windowHeight = window.innerHeight;
                    const divPosition = fadeDiv.getBoundingClientRect().top;

                    
                    if (divPosition < windowHeight) {
                    fadeDiv.classList.add('opacity-100', 'translate-y-0');
                    }
                });
                window.addEventListener('scroll', function() {
                    const fadeDiv = document.getElementById('three');
                    const windowHeight = window.innerHeight;
                    const divPosition = fadeDiv.getBoundingClientRect().top;

                    
                    if (divPosition < windowHeight) {
                    fadeDiv.classList.add('opacity-100', 'translate-y-0');
                    }
                });
                window.addEventListener('scroll', function() {
                    const fadeDiv = document.getElementById('four');
                    const windowHeight = window.innerHeight;
                    const divPosition = fadeDiv.getBoundingClientRect().top;

                    
                    if (divPosition < windowHeight) {
                    fadeDiv.classList.add('opacity-100', 'translate-y-0');
                    }
                });
                window.addEventListener('scroll', function() {
                    const fadeDiv = document.getElementById('five');
                    const windowHeight = window.innerHeight;
                    const divPosition = fadeDiv.getBoundingClientRect().top;

                    
                    if (divPosition < windowHeight) {
                    fadeDiv.classList.add('opacity-100', 'translate-y-0');
                    }
                });
                window.addEventListener('scroll', function() {
                    const fadeDiv = document.getElementById('six');
                    const windowHeight = window.innerHeight;
                    const divPosition = fadeDiv.getBoundingClientRect().top;

                    
                    if (divPosition < windowHeight) {
                    fadeDiv.classList.add('opacity-100', 'translate-y-0');
                    }
                });
                window.addEventListener('scroll', function() {
                    const fadeDiv = document.getElementById('seven');
                    const windowHeight = window.innerHeight;
                    const divPosition = fadeDiv.getBoundingClientRect().top;

                    
                    if (divPosition < windowHeight) {
                    fadeDiv.classList.add('opacity-100', 'translate-y-0');
                    }
                });
                window.addEventListener('scroll', function() {
                    const fadeDiv = document.getElementById('eight');
                    const windowHeight = window.innerHeight;
                    const divPosition = fadeDiv.getBoundingClientRect().top;

                    
                    if (divPosition < windowHeight) {
                    fadeDiv.classList.add('opacity-100', 'translate-y-0');
                    }
                });
               
//animation of counting number second page
                 function animateCounter(id, start, end, duration) {
                    const element = document.getElementById(id);
                    const range = end - start;
                    const increment = end > start ? 4 : -4;
                    const stepTime = Math.abs(Math.floor(duration / range));
                    let current = start;
                    const timer = setInterval(() => {
                        current += increment;
                        element.textContent = current;
                        if (current === end) {
                        clearInterval(timer);
                        }
                    }, stepTime);
                }
                

// Usage
animateCounter("counter", 0, 1500, 2000)
animateCounter("counterStudent", 0, 460,2000)
animateCounter("counterUni", 0, 12,2000)


                