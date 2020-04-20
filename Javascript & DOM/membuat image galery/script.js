const container = document.querySelector('.container');
const imgJumbo = document.querySelector('.imgJumbo');
const imgThumbs = document.querySelectorAll('.imgThumb');

container.addEventListener('click',function(e){

    if(e.target.className == 'imgThumb'){
        imgJumbo.src = e.target.src;
        imgJumbo.classList.add('fade');
        setTimeout(function(){
            imgJumbo.classList.remove('fade');
        }, 500);

        imgThumbs.forEach(function(thumb){
            // if( thumb.classList.contains('active')){
            //     thumb.classList.remove('active');
            // }

            thumb.className = 'imgThumb';
        })

        e.target.classList.add('active');
    }
})

