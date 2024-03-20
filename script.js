document.addEventListener('DOMContentLoaded', function () {
    // Placeholder product array
    const products = [
        {id: 1, text: {title: "Executive Watch", subtitle: "Gold Luxury - Choose Us", description: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship.", price: "$499"}, productImg: "./assets/Image 1.png", ambientColor: "linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)"},
        {id: 2, text: {title: "Dainty Timepieces", subtitle: "Silver Luxury, Choose Us", description: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece", price: "$469"}, productImg: "./assets/Image 2.png", ambientColor: " linear-gradient(105.54deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)"},
        {id: 3, text: {title: "Elegant Timepieces", subtitle: "Choose Luxury, Choose Us", description: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch", price: "$299"}, productImg: "./assets/Image 3.png", ambientColor: "linear-gradient(105.54deg, #30A357 -2.93%, #75E39A 72.14%)"},
        {id: 4, text: {title: "Refined Timepieces", subtitle: "Choose Luxury, Choose Us", description: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece.", price: "$299"}, productImg: "./assets/Image 4.png", ambientColor: "linear-gradient(105.54deg, #F24F4F -2.93%, #FFA895 72.14%)"}
        // Add more products as needed
    ];
     
    const infoSection = document.getElementById('product-info-section');
    const imageList = document.querySelector('.splide__list');
    products.forEach((product, index) => {
        // Product Info
        const productInfoDiv = document.createElement('div');
        productInfoDiv.className = `product-info ${index === 0 ? "active" : ""}`; // Show first product info by default
        // productInfoDiv.style.background = product.ambientColor; // Set background color
        productInfoDiv.innerHTML = `
            <div class="product-title">${product.text.title}</div>
            <div class="product-subtitle">${product.text.subtitle}</div>
            <div class="product-description">${product.text.description}</div>
            <div class="product-price">${product.text.price}</div>
        `;
        infoSection.appendChild(productInfoDiv);
        // Product Image
        const listItem = document.createElement('li');
        listItem.className = 'splide__slide';
        listItem.innerHTML = `<img src="${product.productImg}" alt="${product.text.title}" style="width: 100%;">`; // Ensure image covers the slide
        imageList.appendChild(listItem);
    });
    // Set body background color to the ambient color of the first product
    document.body.style.background = products[0].ambientColor;
    document.querySelector(".left-section").background=products[0].ambientColor;
    // Initialize Splide
    const splide = new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        arrows: true,
        // Update when the slide changes
    }).mount();
    splide.on('moved', (newIndex) => {
        const infoDivs = document.querySelectorAll('.product-info');
        // Hide all product info
        infoDivs.forEach(div => div.classList.remove('active'));
        // Show the product info corresponding to the current slide
        infoDivs[newIndex].classList.add('active');
        // Change body background color to the ambient color of the current product
        document.body.style.background = products[newIndex].ambientColor;
    });
})