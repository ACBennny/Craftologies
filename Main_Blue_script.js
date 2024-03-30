/*************************************************************
 * This is the script for the homepage of Blue_Stuff
 * 
 * @name (Anyanwu_Benedict_Chukwuemeka)
 * @version (v0.01)
 *************************************************************/



// PRELOADER

    const preloader = document.querySelector('.preloader_class');

    window.addEventListener('load' , () => {
        preloader.style.display = "none";
        onBodyFlow();
    });



// BODY

    const base = document.querySelector('body');

    function offBodyFlow()
    {
        document.body.classList.add('off_Flow');
        document.body.classList.remove('on_Flow');
    }

    function onBodyFlow()
    {
        document.body.classList.remove('off_Flow');
        document.body.classList.add('on_Flow');
    }

    
    // Back - To - Top - Button
        const backToTopBtn = document.querySelector('.back_to_top_btn');

        // Prevents dragging
        backToTopBtn.draggable = false;

        // If vertical scroll is greater than zero (0) then it appears
        window.addEventListener("scroll" , () => {

            if(window.scrollY > 0)
            {
                backToTopBtn.classList.add('active');
            }
            else
            {
                backToTopBtn.classList.remove('active');
            }
        });
    




// NAVBAR

    // Float
        // Makes the navbar to float and responds to mouse mouvement (scroll up or scroll down)
            const main = document.querySelector('.main_body_content');
            const navvbarr = document.querySelector('.navbar');

            let lastScroll = 0;

            window.addEventListener('scroll' , () => {
                navvbarr.classList.toggle("float", window.scrollY > 0);

                const currentScroll = window.scrollY;

                if(currentScroll <= 0)
                {
                    navvbarr.classList.remove('scroll_up');
                }

                if(currentScroll > lastScroll && !navvbarr.classList.contains('scroll_down'))
                {
                    navvbarr.classList.remove('scroll_up');
                    navvbarr.classList.add('scroll_down');
                }

                if(currentScroll < lastScroll && navvbarr.classList.contains('scroll_down'))
                {
                    navvbarr.classList.remove('scroll_down');
                    navvbarr.classList.add('scroll_up');
                }

                lastScroll = currentScroll;
            });


    // SEARCH
        const searchStruct = 
        `
            <i class="fa-solid fa-xmark-circle close_search_frame"></i>
            <div class="search_box_bcg"></div>
            <div class="search_frame_box"></div>
        `;
        const searchBox = document.querySelector('.search_box');
        let searchFrame;

        // SEARCH    
        const searchBtn = document.querySelector('.search_btn');
        searchBtn.addEventListener("click" , () => {
            initiantiateSearch("/blue_Content/blue_Search/blue_Search.html");
        });


        function initiantiateSearch(searchLink) 
        {
            const searchBox = document.createElement("div");
            searchBox.classList.add("search_box");

            searchBox.innerHTML = searchStruct;
            main.appendChild(searchBox);


            const searchBcg = document.querySelector('.search_box_bcg');
            const searchFrameBox = document.querySelector('.search_frame_box');
            const closeSearchFrame = document.querySelector('.close_search_frame');
                
                if(window.innerWidth > 1000)
                {
                    offBodyFlow();
                }

                searchBox.classList.add('active');
                searchFrameBox.classList.add('active');
                
                // creates the iframe to the search page
                searchFrame = document.createElement('iframe');
                searchFrame.classList.add('search_frame');
                searchFrame.src = searchLink;
                searchFrameBox.appendChild(searchFrame);

                closeSearchFrame.addEventListener("click" , () => {
                if(window.innerWidth > 1000)
                    {
                        onBodyFlow();
                    }
                    main.removeChild(searchBox);
                });

                searchBcg.addEventListener("click" , () => {
                    if(window.innerWidth > 1000)
                    {
                        onBodyFlow();
                    }
                    main.removeChild(searchBox);
                });
        }

        
    

    
    // Opens menu to access nav links
        const opnNavBtn = document.querySelector('.open_nav_sets');
        const navBCg = document.querySelector('.nav_ctnt_bcg');
        const navSets = document.querySelector('.nav_sets');
        const navLinks = document.querySelectorAll('.nav_sets a');

        opnNavBtn.addEventListener("click" , () => {
            if(navBCg.classList.contains('active') || navSets.classList.contains('active'))
            {
                if(opnProfLinks.classList.contains('fa-solid'))
                {
                    opnProfLinks.classList.add('fa-regular');
                    opnProfLinks.classList.remove('fa-solid');
                    profLinksBox.classList.remove('active');
                    profLinks.classList.remove('active');
                }
                opnNavBtn.classList.add('fa-layer-group');
                opnNavBtn.classList.remove('fa-xmark');
                navBCg.classList.remove('active');
                navSets.classList.remove('active');
                onBodyFlow();
            }
            else
            {
                opnNavBtn.classList.remove('fa-layer-group');
                opnNavBtn.classList.add('fa-xmark');
                navBCg.classList.add('active');
                navSets.classList.add('active');
                offBodyFlow();
            }
        });


        // Also closes the nav links menu
        navBCg.addEventListener("click" , () => {
            if(opnProfLinks.classList.contains('fa-solid'))
            {
                opnProfLinks.classList.add('fa-regular');
                opnProfLinks.classList.remove('fa-solid');
                profLinksBox.classList.remove('active');
                profLinks.classList.remove('active');
            }
            opnNavBtn.classList.add('fa-layer-group');
            opnNavBtn.classList.remove('fa-xmark');
            navBCg.classList.remove('active');
            navSets.classList.remove('active');
            onBodyFlow();
        });


    // Opens menu for profile Action
    
        const opnProfLinks = document.querySelector('.open_prof_links');
        const profLinksBox = document.querySelector('.profile_links_box');
        const profLinks = document.querySelector('.profile_links');

        opnProfLinks.addEventListener("click" , () => {
            if(opnProfLinks.classList.contains('fa-solid'))
            {
                // navSets.classList.remove('flow');
                opnProfLinks.classList.add('fa-regular');
                opnProfLinks.classList.remove('fa-solid');
                profLinksBox.classList.remove('active');
                profLinks.classList.remove('active');
                if(!navBCg.classList.contains('active') || !navSets.classList.contains('active'))
                {
                    onBodyFlow();
                }
            }
            else
            {
                opnProfLinks.classList.remove('fa-regular');
                opnProfLinks.classList.add('fa-solid');
                profLinksBox.classList.add('active');
                profLinks.classList.add('active');
                if(!(document.body.classList.contains('off_Flow')))
                {
                    offBodyFlow();
                }
            }
        });

        profLinksBox.addEventListener("click" , () => {
            opnProfLinks.classList.add('fa-regular');
            opnProfLinks.classList.remove('fa-solid');
            profLinksBox.classList.remove('active');
            profLinks.classList.remove('active');
            onBodyFlow();
        });




// IMAGES 

        const getAllImages = document.querySelectorAll('img');

        getAllImages.forEach(img => {
            // Prevents them from being dragged
            img.style.userSelect = "none";
            img.draggable = false;

            // Gives the default value of "alt" to be "=> image <==" if it contains no value
            if(img.alt.valueOf() == "")
            {
                img.alt = "image";
            }
            
            // Prevents them from being downloaded
            img.addEventListener("mouseover" , () => {
                document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
            });
            img.addEventListener("mouseleave" , () => {
                document.oncontextmenu = document.body.oncontextmenu = function() {return true;}
            });
        });

        






    