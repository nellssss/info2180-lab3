document.addEventListener('DOMContentLoaded', () => {
    //board layout
    const brd = document.querySelectorAll('#board div');
    brd.forEach(div => div.classList.add('square')); 

    //Adding X's and O's
    let mv = 'X';
    let plays = [];
    restartHelp = false;
    
    brd.forEach((div, player) => {
        div.addEventListener('click', () => {
            if (div.textContent === '' && !restartHelp) {
                div.textContent = mv;
                div.classList.add(mv === 'X' ? ('square','X'):('square','O'));
                
                plays[player] = mv; //record player moves

                //Checking for winner
                const winner = theWinner();
                if (winner) {
                    const newStatus = document.getElementById('status');
                    newStatus.textContent = `Congratulations! ${winner} is the Winner!`;
                    newStatus.classList.add('you-won');
                    restartHelp = true;
                } else {
                    mv = mv === 'X' ? 'O' : 'X'; 
                }
            }
        });
    });
            

    //Hovering
    brd.forEach(div => {
        div.addEventListener('mouseover', () => {
        div.classList.add('hover');
    });
        div.addEventListener('mouseout', () => {
        div.classList.remove('hover');
    });
    });

    //Status winner
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    function theWinner() {
        for (let [a,b,c] of wins) {
            if (plays[a] && plays[a] === plays[b] && plays[a] === plays[c]) {
                return plays[a];
            }
        }
        return null;
    }

    // Restarter
    const restart = document.querySelector('.controls');
    restart.addEventListener('click', () => {
        brd.forEach(div => {
            div.textContent = '';
            div.classList.remove(mv);
        });

        plays = [];
        mv = 'X';
        restartHelp = false;

        const newStatus = document.getElementById('status');
        newStatus.textContent = 'Move your mouse over a square and click to play an X or an O.';
        newStatus.classList.remove('you-won');
    });        
});
