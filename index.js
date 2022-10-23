const navSlide=()=>
{
    const line = document.querySelector('.line');
    const nav= document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');
    console.log('waster');
    line.addEventListener('click',()=>
    {
        
        nav.classList.toggle('nav-active');
        navlinks.forEach((links,index)=>
        {
            if(links.style.animation)
            {
                links.style.animation='';
            }
            else
            {
                links.style.animation= `navLinkFade 0.5s ease forwards ${index/7+.5}s`;
            }

            
        });

        line.classList.toggle('toggle');

    })
}

navSlide();