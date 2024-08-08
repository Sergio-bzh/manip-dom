let span = document.querySelector('div span');
let images = document.querySelectorAll('img');
// span.addEventListener('click',ecrire);

function ecrire() {
    console.log('enfin cela a fonctionné');
}
let spans = document.querySelectorAll('div span')

// spans.forEach(span => span.addEventListener('click', ecrire));
for (let i = 0; i < spans.length; i++) {
    spans[i].addEventListener('click', cacherImage);
}


function cacherImage(){
    images.forEach(img => img.style.display = 'none');
    if
}
