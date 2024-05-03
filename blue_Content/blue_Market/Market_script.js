

    const loremContainer = document.querySelector('.lorem-container');
    const lorem = document.querySelector('.lorem');
    const scrollbar = document.querySelector('.scrollbar');
    const thumb = document.querySelector('.thumb');

    let isDragging = false;
    let startY;
    let startScrollTop;
    let startThumbTop;

    // Calculate scrollbar height based on content height
    function updateScrollbar() {
        const contentHeight = lorem.scrollHeight;
        const containerHeight = loremContainer.clientHeight;
        const scrollbarHeight = containerHeight / contentHeight * containerHeight;
        thumb.style.height = scrollbarHeight + 'px';
    }

    // Update thumb position based on scroll position
    function updateThumbPosition() {
        const contentHeight = lorem.scrollHeight;
        const containerHeight = loremContainer.clientHeight;
        const scrollPosition = lorem.scrollTop;
        const maxScrollPosition = contentHeight - containerHeight;
        const thumbPosition = scrollPosition / maxScrollPosition * (containerHeight - parseFloat(thumb.style.height));
        thumb.style.top = thumbPosition + 'px';
    }

    // Update scrollbar when content is scrolled
    lorem.addEventListener('scroll', () =>
    {
        updateThumbPosition();
    });

    // Initialize the scrollbar
    window.addEventListener('load', () =>
    {
        updateScrollbar();
        updateThumbPosition();
    });

    // Update scrollbar when content size changes
    window.addEventListener('resize', () =>
    {
        updateScrollbar();
        updateThumbPosition();
    });
    window.addEventListener('change', () =>
    {
        updateScrollbar();
        updateThumbPosition();
    });
    

    // Drag and drop functionality for scrollbar thumb
    thumb.addEventListener('mousedown', (e) =>
    {
        isDragging = true;
        startY = e.clientY;
        startScrollTop = lorem.scrollTop;
        startThumbTop = parseFloat(thumb.style.top);
        e.preventDefault(); // Prevent text selection while dragging
    });

    window.addEventListener('mousemove', (e) =>
    {
        if (isDragging) {
            const deltaY = e.clientY - startY;
            const containerHeight = loremContainer.clientHeight;
            const contentHeight = lorem.scrollHeight;
            const maxScrollPosition = contentHeight - containerHeight;
            const thumbPosition = Math.min(containerHeight - parseFloat(thumb.style.height), Math.max(0, startThumbTop + deltaY));
            thumb.style.top = thumbPosition + 'px';
            lorem.scrollTop = thumbPosition / (containerHeight - parseFloat(thumb.style.height)) * maxScrollPosition;
        }
    });

    window.addEventListener('mouseup', () =>
    {
        isDragging = false;
    });

    // Click-to-scroll behavior for scrollbar track
    scrollbar.addEventListener('click', (e) =>
    {
        const containerHeight = loremContainer.clientHeight;
        const thumbHeight = parseFloat(thumb.style.height);
        const trackHeight = scrollbar.clientHeight;
        const thumbPosition = parseFloat(thumb.style.top);
        const clickY = e.clientY - scrollbar.getBoundingClientRect().top;

        if (clickY < thumbPosition)
        {
            // Clicked above the thumb, scroll up
            lorem.scrollTop -= containerHeight / trackHeight * (thumbPosition - clickY);
        }
        else if (clickY > thumbPosition + thumbHeight)
        {
            // Clicked below the thumb, scroll down
            lorem.scrollTop += containerHeight / trackHeight * (clickY - thumbPosition - thumbHeight);
        }
    });












