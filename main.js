let shop =document.getElementById('shop')
/* product data and image */
let shopItamsData = [{
    id:"headphones",
    name:"headphones",
    price: 22,
    desc:"this is boat headphones",
    img:"/storage/emulated/0/Download/images (2).jpeg"
},{
    id:"goggles",
    name:"goggles",
    price: 9,
    desc:"stylish goggles new year",
    img:"/storage/emulated/0/Download/images (8).jpeg"
},{
    id:"short",
    name:"short",
    price:25,
    desc:"stylish short for man",
    img:"/storage/emulated/0/Download/images (9).jpeg"
},{
    id:"jeans",
    name:"jeans",
    price: 30,
    desc:"boy jeans so prime",
    img:"/storage/emulated/0/Download/shopping.jpeg"
},{
    
    id:"cup",
    name:"cup",
    price: 9,
    desc:"this is stylish cup",
    img:"/storage/emulated/0/Download/images (10).jpeg"
},{
    id:"iPhone",
    name:"mobile",
    price: 999,
    desc:"iPhone 15 pro max",
    img:"/storage/emulated/0/Download/iPhone 15 Pro Max 256GB Blue Titanium2.jpg"
}]
/* show data to display */
let generateShop =()=>{
    return (shop.innerHTML= shopItamsData.map((x)=>{
        let { id, name, price, desc, img } =x;
        return  `
        <div class="box light_color" id="${id}">
            <div class="itam_name">
                <h3>${name}</h3>
            </div>
            <div class="itam_img" style="background-image:url('${img}')">
            </div>
            <div class="itam_detelas">
                <div class="itam_price">
                    $ ${price}
                </div>
                <div class="desc">
                    ${desc}
                </div>
            </div>
            <div class="shop_box" >
                <div class="add_cart light_color" >
                <b>ADD CART</b></div>
                <div class="buy light_color" ><b>BUY</b></div>
            </div>
        </div>`
    }).join(""));
};

generateShop();
