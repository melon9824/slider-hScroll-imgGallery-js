let scrollContainer = document.querySelector('.gallary-imgBox');
let gallaryBackBtn = document.getElementById('gallary-backBtn');
let gallaryNextBtn = document.getElementById('gallary-nextBtn');

scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
})

gallaryNextBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 900;
})

gallaryBackBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 900;
})