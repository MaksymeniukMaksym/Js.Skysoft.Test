document.querySelector(".block").addEventListener('click', function() {

    let work = document.querySelector('.collorOn');
    
    if (work) 
    {
        work.classList.remove('collorOn') 
    }

    event.target.classList.add('collorOn'); });
