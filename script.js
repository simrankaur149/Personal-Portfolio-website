const projects = [
    {
        id : 1,
        catogory : "html&css",
        img : "./img/1.png",
        text : "HTML & CSS websites",
        same : "HTML",
        again : "CSS",
        link : "./html&css/mymeal/index.html",
        hii : "hello",

    },
    {
        id : 2,
        catogory : "html&css",
        img : "./img/1.png",
        text : "HTML & CSS websites",
        same : "Bootstrap",
        again : "CSS",
        link : "./html&css/mymeal/index.html",
        hii : "hello",

    },
    {
        id : 3,
        catogory : "Bootstrap",
        img : "./img/1.png",
        text : "Bootstrap websites",
        same : "HTML",
        again : "Bootstrap",
        

    },
    {
        id : 4,
        catogory : "react",
        img : "./img/1.png",
        text : "Websites using React",
        same : "HTML",
        again : "CSS",
        hii : "hello",

    },
    {
        id : 5,
        catogory : "html&css",
        img : "./img/1.png",
        text : "HTML & CSS websites",
        same : "HTML",
        again : "CSS",
        link : "./html&css/mymeal/index.html",
        hii : "hello",

    },
    {
        id : 6,
        catogory : "html&css",
        img : "./img/1.png",
        text : "HTML & CSS websites",
        same : "HTML",
        again : "CSS",
        link : "./html&css/mymeal/index.html",
        hii : "hello",

    },


];
const sectionCenter = document.querySelector('.grid');
const btns = document.querySelectorAll('.button-fil');

window.addEventListener('DOMContentLoaded',function(){
    displayMenuItems(projects);
    
});

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const category = e.currentTarget.dataset.id;
        const menuCatogory = projects.filter(function(menuItem){
            
            //console.log(menuItem.catogory);
            if(menuItem.catogory === category){
                return menuItem;
            }
        });      
            if(category === 'all'){
                displayMenuItems(projects);
            }else{
                displayMenuItems(menuCatogory);
                

            }     
    });
    
});

function displayMenuItems(menuItems){
    let displayProjects = menuItems.map(function(item){
        //console.log(item);
        return `<div class="grid">
        <div class="container-grid">
            <div class="grid-items">
                <div class="site-img">
                    <img class="img-card" src="${item.img}" alt="">
                </div>
                <div class="site-text">
                    <h5 class="text-para">${item.text}</h5>
                    <div class="span">
                        <span class="same-1">${item.same}</span>
                        <span class="same-2">${item.again}</span>
                    </div>
                    <a class="show" href="${item.link}">CLICK</a>
                </div>
            </div>

        </div>
        
    </div>`;

    });
    displayProjects = displayProjects.join("");
    sectionCenter.innerHTML = displayProjects;

}