document.addEventListener('DOMContentLoaded', () => {
    //board layout
    const brd = document.querySelectorAll('#board div');
    brd.forEach(div => div.classList.add('square')); 

    //Adding X's and O's
    let mv = 'X';
    let plays = [];
    
    brd.forEach((div, player) => {
        div.addEventListener('click', () => {
            if (div.textContent === '') {
                div.textContent = mv;
                div.classList.add(mv === 'X' ? ('square','X'):('square','O'));
                
                plays[player] = mv; //record player moves
                mv = mv === 'X' ? 'O':'X';

                //console.log(plays);
            }
        })
    })

});

