/**
 * ceramic technology
 */
document.addEventListener('DOMContentLoaded', function() {
    const slides = [
        {
            url: "#",
            title: "Preparing the Clay",
            imgPath: "images/9f404845d8d01eceedf6f4d72237b72.jpg",
            text: "Kneading the clay to remove air bubbles and ensure even consistency. This step prevents cracking or warping during shaping. Letting the wedged clay sit for a period to become more pliable."
        },
        {
            url: "#",
            title: "Shaping the Form",
            imgPath: "images/3641fb251936a66fa0a05bfac5d852f.jpg",
            text: "Forming the clay requires skill and patience. Whether using a wheel, hand-building techniques, or molds, the goal is to create a balanced and stable form."
        },
        {
            url: "#",
            title: "Firing the Clay",
            imgPath: "images/4c0554f0dd8060247735c75419bade0.jpg",
            text: "The firing process transforms clay into ceramics through high temperatures. This critical step hardens the clay and makes it waterproof."
        },
        {
            url: "#",
            title: "Glazing Process",
            imgPath: "images/ea5a50f5cbb86d9362288c52d91bdf4.png",
            text: "Glazing adds color, texture, and waterproofing to ceramic pieces. Many potters create their own unique glaze recipes."
        },
        {
            url: "#",
            title: "Finishing Touches",
            imgPath: "images/a9b00b3882286427b709afe35685cf4.png",
            text: "After firing, pieces may need additional work like sanding rough edges or adding non-ceramic components."
        }
    ];
    
    new Swiper({
        imgArr: slides,
        aniTIme: 800,
        intervalTime: 3000,
        autoplay: true
    }).init();
    new Swiper({
        imgArr: slides,
        imgWidth: 280,
        aniTime: 1000,
        intervalTime: 2000,
        scale: 0.8,
        autoplay: false,
        gap: 20,
        clsSuffix: '-card'
    }).init();
    
    // left and right arrows
    createArrowImages();
});

function createArrowImages() {
    const leftArrow = document.querySelector('#prev-card');
    const rightArrow = document.querySelector('#next-card');
    
    if (!leftArrow.src || !rightArrow.src) {
        if (leftArrow) {
            leftArrow.onerror = function() {
                this.style.display = 'none';
                const parent = this.parentElement;
                const newLeftBtn = document.createElement('div');
                newLeftBtn.id = 'prev-card';
                newLeftBtn.className = 'btn leftBtn';
                parent.appendChild(newLeftBtn);
            };
        }
        
        if (rightArrow) {
            rightArrow.onerror = function() {
                this.style.display = 'none';
                const parent = this.parentElement;
                const newRightBtn = document.createElement('div');
                newRightBtn.id = 'next-card';
                newRightBtn.className = 'btn rightBtn';
                parent.appendChild(newRightBtn);
            };
        }
    }
} 