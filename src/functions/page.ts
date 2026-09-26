export function page() {
    const nextpage = document.getElementById('nextpage')!;
    const previouspage = document.getElementById('previouspage')!;
    const page = document.getElementById('rectangle')!;
    const footer = document.getElementById('footer')!;

    const next = () => {
        if (page.classList.contains('page1')) {
            page.classList.replace('page1', 'page2');
            previouspage.style.display = "block";
            footer.style.justifyContent = "space-between";
        }
        else if (page.classList.contains('page2')) {
            page.classList.replace('page2', 'page3');
        }
        else if (page.classList.contains('page3')) {
            page.classList.replace('page3', 'page4');
        }
        else if (page.classList.contains('page4')) {
            page.classList.replace('page4', 'page5');
            nextpage.style.display = "none";
        }
    };

    const previous = () => {
        if (page.classList.contains('page2')) {
            page.classList.replace('page2', 'page1');
            previouspage.style.display = "none";
            footer.style.justifyContent = "flex-end";
        }
        else if (page.classList.contains('page3')) {
            page.classList.replace('page3', 'page2');
        }
        else if (page.classList.contains('page4')) {
            page.classList.replace('page4', 'page3');
        }
        else if (page.classList.contains('page5')) {
            page.classList.replace('page5', 'page4');
            nextpage.style.display = "block";
        }
    };

    nextpage.addEventListener('click', next);
    previouspage.addEventListener('click', previous);

    return () => {
        nextpage.removeEventListener('click', next);
        previouspage.removeEventListener('click', previous);
    };
}
