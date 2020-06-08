const IMAGE = document.querySelectorAll("img");

function get
for (let i = 0; IMAGE.length; i++) {
    let imgSrc = IMAGE[i].getAttribute("src");
    imgSrc = imgSrc.slice(0, -8);
    
    console.log(imgSrc);

    let type = IMAGE[i].getAttribute("data-type");
    console.log(type);  
}