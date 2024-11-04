/*************************************************************
 * This is the script for the homepage of Blue_Stuff
 * 
 * @name (Anyanwu_Benedict_Chukwuemeka)
 * @version (v0.01)
 *************************************************************/



// PAGE LOAD



        const searchBtn_HomePage = document.querySelector('.search_btn');
        const opnprofLinksBtn_HomePage = document.querySelector('.open_prof_links');
        const profLinksBox_HomePage = document.querySelector('.profile_links');
        const seeAllProducts = document.querySelector('.see_all_products');

        const profileWorld = document.querySelector('.profile_logo');
        const mainBodyContent = document.querySelector('.main_body_content');
        const welcomeBox = document.querySelector('.welcome_message');
        const welcomeBtnBox = document.querySelector('.join_now1');
        const finalSignBcg = document.querySelector('.final_sign_bcg');
        const finalSignBtnBox = document.querySelector('.final_sign_btn_box');
        const joinNow0Btn = document.createElement('div');
        const joinNow1Btn = document.createElement('div');
        const joinNow2Btn = document.createElement('div');
        const joinNow3Btn = document.createElement('div');
        const joinNow4Btn = document.createElement('div');
        
        const sampleProductCardLink = document.querySelectorAll(".sample_C a");
        const sampleProductMiniView = document.querySelectorAll(".mini_view_bdr");

        window.addEventListener('load' , () => {
            
            // searchBtn_HomePage.classList.add('atv_false');
            // opnprofLinksBtn_HomePage.classList.add('atv_false');
            // profLinksBox_HomePage.classList.add('atv_false');
            
            joinNow0Btn.classList.add('gen_btn');
            joinNow0Btn.innerText = "Sign Up";

            joinNow1Btn.classList.add('sign_up');
            joinNow1Btn.innerText = "Sign Up";
            
            joinNow2Btn.classList.add('sign_up');
            joinNow2Btn.innerText = "Log In";

            joinNow3Btn.classList.add('sign_up');
            joinNow3Btn.innerText = "Sign Up";
            
            joinNow4Btn.classList.add('sign_up');
            joinNow4Btn.innerText = "Log In";

            
            // profileWorld.appendChild(joinNow0Btn);

            welcomeBtnBox.appendChild(joinNow1Btn);
            welcomeBtnBox.appendChild(joinNow2Btn);

            finalSignBtnBox.appendChild(joinNow3Btn);
            finalSignBtnBox.appendChild(joinNow4Btn);

        });




// LOG IN / SIGN UP

        // Opens signup page and Clears all buttons when signup is done
        function deleteJoinBtns()
        {
            window.open(URL="../blue_Account_Signup/Signup.html" , '_blank');
            profileWorld.removeChild(joinNow0Btn);

            welcomeBtnBox.removeChild(joinNow1Btn);
            welcomeBtnBox.removeChild(joinNow2Btn);

            mainBodyContent.removeChild(finalSignBcg); 

            setTimeout(function(){
                searchBtn_HomePage.classList.remove('atv_false');
                opnprofLinksBtn_HomePage.classList.remove('atv_false');
                profLinksBox_HomePage.classList.remove('atv_false');
                seeAllProducts.classList.add('active');
            }, 2000);
        }

         // Opens Log in page in new tab
         joinNow0Btn.addEventListener("click" , deleteJoinBtns);
         joinNow1Btn.addEventListener("click" , deleteJoinBtns);
         joinNow2Btn.addEventListener("click" , deleteJoinBtns);
         joinNow3Btn.addEventListener("click" , deleteJoinBtns);
         joinNow4Btn.addEventListener("click" , deleteJoinBtns);



// BODY


    // // SEARCH    
    //     const searchBtn = document.querySelector('.search_btn');
    //     searchBtn.addEventListener("click" , () => {
    //         initiantiateSearch("../blue_Search/blue_Search.html");
    //     });

    // PRODUCT SLIDER
    
        // const slideBtns = document.querySelectorAll('.sample_slide_box .slide_btn');
        const wrappers = document.querySelectorAll(".sample_A");
       
        wrappers.forEach(wrapper => {
            const carousel = wrapper.querySelector(".sample_C");
            const firstCard = carousel.querySelector(".sample_D");
            const firstCardWidth = firstCard.offsetWidth
            const arrowBtns = wrapper.querySelectorAll(".sample_slide_box .slide_btn");
            const carouselChildrens = [...carousel.children];
    
            let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
    
            // Get the number of cards that can fit in the carousel at once
            let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
    
            // Insert copies of the last few cards to beginning of carousel for infinite scrolling
            carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
                carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
            });
    
            // Insert copies of the first few cards to end of carousel for infinite scrolling
            carouselChildrens.slice(0, cardPerView).forEach(card => {
                carousel.insertAdjacentHTML("beforeend", card.outerHTML);
            });
    
            // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
            carousel.classList.add("slide_atv_off_transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("slide_atv_off_transition");
    
            // Add event listeners for the arrow buttons to scroll the carousel left and right
            arrowBtns.forEach(btn => {
                btn.addEventListener("click", () => {
                    carousel.scrollLeft += btn.id == "pleft" ? -firstCardWidth : firstCardWidth;
                });
            });
    
            const dragStart = (e) => {
                isDragging = true;
                carousel.classList.add("slide_active");
                // Records the initial cursor and scroll position of the carousel
                startX = e.pageX;
                startScrollLeft = carousel.scrollLeft;
            }
    
            const dragging = (e) => {
                if(!isDragging) return; // if isDragging is false return from here
                // Updates the scroll position of the carousel based on the cursor movement
                carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
            }
    
            const dragStop = () => {
                isDragging = false;
                carousel.classList.remove("slide_active");
            }
    
            const infiniteScroll = () => {
                // If the carousel is at the beginning, scroll to the end
                if(carousel.scrollLeft === 0) {
                    carousel.classList.add("slide_atv_off_transition");
                    carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                    carousel.classList.remove("slide_atv_off_transition");
                }
                // If the carousel is at the end, scroll to the beginning
                else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                    carousel.classList.add("slide_atv_off_transition");
                    carousel.scrollLeft = carousel.offsetWidth;
                    carousel.classList.remove("slide_atv_off_transition");
                }
    
                // Clear existing timeout & start autoplay if mouse is not hovering over carousel
                clearTimeout(timeoutId);
                if(!wrapper.matches(":hover")) autoPlay();
            }
    
            const autoPlay = () => {
                if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
                // Autoplay the carousel after every 2500 ms
                timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 7500);
            }
            autoPlay();
    
            carousel.addEventListener("mousedown", dragStart);
            carousel.addEventListener("mousemove", dragging);
            document.addEventListener("mouseup", dragStop);
            carousel.addEventListener("scroll", infiniteScroll);
            wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
            wrapper.addEventListener("mouseleave", autoPlay);
        });


     
    // PRODUCT VIEW

        // Full View
            // Clicking the card will open the link to the product

        // Mini View

        // Opens the mini tab
        sampleProductCardLink.forEach(ProductCard => {
            let currProductLink = ProductCard.href;
            const saveProduct = ProductCard.querySelector(".product_quick_actions .save_product");
            const saveProductAfter = ProductCard.querySelector(".product_quick_actions .save_product span");
            const saveProductIcon = ProductCard.querySelector(".product_quick_actions .save_product .fa-bookmark");
            const quickProductViewBtn = ProductCard.querySelector(".quick_view");
            const productTitleName = ProductCard.querySelector(".product_title_box .product_title_name");
            const productTitlePrice = ProductCard.querySelector(".product_title_box .product_title_price");
            const productTitleSerialNo = ProductCard.querySelector(".product_title_box .product_serial_no");
            const productImg1 = ProductCard.querySelector(".product_img_box .product_img");
            const productImg2 = ProductCard.querySelector(".product_img_box .product_img_hover");
            let saveProductTimer;

            // Prevents dragging to avoid conflict with slide dragging
            ProductCard.draggable = false;

            // Sets title of the product
            ProductCard.title = "Product Name: " + productTitleName.textContent + "\nPrice: " + productTitlePrice.textContent;

            ProductCard.addEventListener("click" , e => {
                    // ProductCard.setAttribute("target" , "_blank");
                //
                if(window.innerWidth > 500 && window.innerHeight > 500)
                {
                    // Saves item
                    if(saveProduct.matches(":hover"))
                    {
                        e.preventDefault();
                        if(!(saveProductIcon.classList.contains("fa-solid")))
                        {
                            saveProductAfter.textContent = "Saved";
                            saveProductTimer = setTimeout(() => saveProductAfter.textContent = "Unsave", 2000);
                            saveProductIcon.classList.replace("fa-regular", "fa-solid");
                            return;
                        }
                        clearTimeout(saveProductTimer);
                        saveProductIcon.classList.replace("fa-solid", "fa-regular");
                        saveProductAfter.textContent = "Save";
                    }
                    // If the mouse pointer is over the quick view button, it opens 
                    else if(quickProductViewBtn.matches(":hover"))
                    {
                        offBodyFlow();
                        e.preventDefault();
                        sampleProductMiniView.forEach(MiniView => {
                            const closeMiniView_Bcg = MiniView.querySelector(".mini_view_bcg");
                            const closeMiniView_Xmk = MiniView.querySelector(".close_mini_view");
                            const imgBdr = MiniView.querySelector(".mini_img_bdr");
                            const imgRads = imgBdr.querySelectorAll("input");
                            const imgRad1 = imgBdr.querySelector("#rad1");
                            const imgBox = imgBdr.querySelector(".mini_img_box");
                            const img1 = imgBox.querySelector(".img1");
                            const img2 = imgBox.querySelector(".img2");
                            const imgCtnt = MiniView.querySelector(".mini_product_ctnt");
                            const prodName = imgCtnt.querySelector(".mini_name");
                            const prodPrice = imgCtnt.querySelector(".mini_price");
                            const prodSerialNo = imgCtnt.querySelector(".mini_serialNo");
                            const prodQtyInput = imgCtnt.querySelector("#mini_qty_input");
                            const reduceQty = imgCtnt.querySelector(".mini_qty_UpArr");
                            const increaseQty = imgCtnt.querySelector(".mini_qty_DownArr");
                            const prodViewMoreDet = imgCtnt.querySelector(".mini_viewmore");

                            // Sets title info about the product  (Nmae, Price, Serial No.)
                            prodName.textContent = productTitleName.textContent;
                            prodPrice.textContent = productTitlePrice.textContent;
                            prodSerialNo.textContent = productTitleSerialNo.textContent;
                            
                            // Sets the img of quick view to that of the box which was clicked
                            img1.src = productImg1.getAttribute("src");
                            img2.src = productImg2.getAttribute("src");

                            // Sets restriction on quuantity box (cannot be less than 1)
                            prodQtyInput.addEventListener("input" , (e) => {
                                if(prodQtyInput.value <= 1)
                                {
                                    prodQtyInput.value = 1;
                                }
                            });

                            // Sets link of quick view to product selected
                            prodViewMoreDet.href = currProductLink;
                            
                            // Opens the Quick View
                            MiniView.classList.add("active");

                            // Function to close Quick view
                            function closeMiniView (){
                                imgRads.forEach(radio => {
                                    radio.checked = false;
                                    imgRad1.checked = true;
                                });
                                img1.src = "";
                                img2.src = "";
                                MiniView.classList.remove("active");
                                onBodyFlow();
                            }
                    
                            // Elements that closes the mini view via on click
                            closeMiniView_Bcg.addEventListener("click" , closeMiniView);
                            closeMiniView_Xmk.addEventListener("click" , closeMiniView);

                            // An attempt to detect mobile as "hover" is not possible
                            // Checks width and closes if necessary
                            window.addEventListener("resize" , () => {
                                if(window.innerWidth <= 500 || window.innerHeight <= 500)
                                {
                                    closeMiniView();
                                }
                            });

                        });
                    }
                    // If mouse pointer is on any other area, the product page is opened
                }
                
            });

            // Returns link if mouse leaves card
            ProductCard.addEventListener("mouseleave" , () => {
                ProductCard.href = currProductLink;
            });
        });



    // SCROLL REVEAL - Un comment for scroll reveal effect
    
    // ScrollReveal({ 
    //     reset: true,
    //     distance: '100px',
    //     duration: 2500,
    //     delay: 400
    // });

    // ScrollReveal().reveal('.navbar_bdr');
    // ScrollReveal().reveal('.welcome_message h1', { delay: 100 , origin: 'left' });
    // ScrollReveal().reveal('.welcome_message p', { delay: 200, origin: 'right' });
    // ScrollReveal().reveal('.welcome_message .join_now1', { delay: 500, origin: 'bottom' });
    // ScrollReveal().reveal('.sample_head .content', { delay: 200 , origin: 'left' });
    // ScrollReveal().reveal('.sample_head .sub_content', { delay: 250, origin: 'right' });
    // ScrollReveal().reveal('.sample_slide_content', { delay: 300, origin: 'right'});
    // ScrollReveal().reveal('.manager_note_box .title', { delay: 200 , origin: 'left' });
    // ScrollReveal().reveal('.manager_note_box .sub_title', { delay: 250, origin: 'right' });
    // ScrollReveal().reveal('.manager_note_box .note_paragraph', { delay: 800, origin: 'bottom' });
    // ScrollReveal().reveal('.inspire_bcg', { delay: 200, origin: 'left' });
    // ScrollReveal().reveal('.inspire_quote', { delay: 200, origin: 'right' });
    // ScrollReveal().reveal('.quote_author', { delay: 200, origin: 'right' });
    // ScrollReveal().reveal('.phrase_title', { delay: 150, origin: 'right' });
    // ScrollReveal().reveal('.phrase_sub_title', { delay: 250, origin: 'right' });
    // ScrollReveal().reveal('.phrase_message', { delay: 300, origin: 'right' });
    // ScrollReveal().reveal('.phrase_img_box', { delay: 100, origin: 'top', interval: 50 });
    // ScrollReveal().reveal('.see_all_products h3', { delay: 150, origin: 'left' });
    // ScrollReveal().reveal('.see_all_products a', { delay: 350, origin: 'right' });
    // ScrollReveal().reveal('.great_perk_box .perk_box', { delay: 100, origin: 'left', interval: 50 });
    // ScrollReveal().reveal('.final_sign_title', { delay: 180 , origin: 'left' });
    // ScrollReveal().reveal('.final_sign_sub_title', { delay: 200, origin: 'right' });
    // ScrollReveal().reveal('.final_sign_btn_box', { delay: 220, origin: 'bottom' });




    // Sliding the box

        //Not in use as it affects other code But can be used as an optional SLIDING feature

        // slides the products by width of the Product " => BOX <=" on "dblClick"
            // const slideLeft = [...document.querySelectorAll('#slide_left')];
            // const slideRight = [...document.querySelectorAll('#slide_right')];
            // const slideBox = [...document.querySelectorAll('.sample_slide')];

            // slideBox.forEach((item, i) => {
            //     let boxDimension = item.getBoundingClientRect();
            //     let boxWidth = boxDimension.width;

            //     slideRight[i].addEventListener('dblclick' , () => {
            //         item.scrollLeft += boxWidth;
            //     });

            //     slideLeft[i].addEventListener('dblclick' , () => {
            //         item.scrollLeft -= boxWidth;
            //     });

            // });