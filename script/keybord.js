const duckEl= document.querySelector("img");

document.addEventListener('keydown', move)
        let positionTop=0;
        
        let positionRight=0;
        
        function move(event) {
            // input/gather
            console.log(event.key);
            // logic
            if (event.key == "ArrowDown") {
                positionTop = positionTop + 10;
            }
            if (event.key == "ArrowUp") {
                positionTop = positionTop - 10;
                //positionDown = positionDown + 10;
            }
            if (event.key == "ArrowRight") {
                positionRight = positionRight + 10;
            }
            if (event.key == "ArrowLeft") {
                positionRight = positionRight - 10;
            }

            //limits
            if (positionTop > 90) {
                positionTop = 0;
            }
            if (positionTop < 0) {
                positionTop = 90;
            }
            if (positionRight > 90) {
                positionRight = 0;
            }
            if (positionRight <0) {
                positionRight = 90;
            }

            // output
            duckEl.style.top = positionTop + "%"; // CSS expect "10%" not "10"
            duckEl.style.bottom=positionTop+"%";
            duckEl.style.left=positionRight+"%";
            duckEl.style.right=positionRight+"%";
            
        }
        let timer =setTimeout(keyWin, 30000);
        let keyPoint=0;
        function keyWin(){
            duckEl.classList.add("green");
            alert("KeyPlayer wins"); 
            keyPoint +=1;
            alert("GAME OVER");
            clearTimeout(timer);
            document.removeEventListener("keydown", keyMove);
            duckElement.removeEventListener("click",shoot);
            
        }
        
        /*function timeCheck(){
            alert("KeyPlayer wins"); 
            duckEl.classList.add("green");
            gameOver();
    }*/


        const playGround = document.querySelector('div');



/*document.addEventListener("keydown", keyMove);

function keyMove(event){
    let x = event.keyCode;
    let positionTop=0;
    let positionDown=0;
    let positionRight=0;
    let positionLeft=0;
    
    if(x =='37'){
        positionLeft= positionLeft +10;


    }else if( x=='38'){
        positionTop=positionTop +10;
        

    }else if(x=='39'){
    
        positionRight=positionRight +10;

    }else if (x=='40'){
        
        positionDown=positionDown +10;
        
    }
    cube.style.top = positionTop + '%';
    cube.style.right= positionRight +"%";
    cube.style.bottom= positionDown +"%";
    cube.style.left= positionleft +"%";
    //setTimeout(timeCheck, 30000);
}
    function timeCheck(){
        cube.classList.add("green");
        alert("KeyPlayer wins"); 
        document.removeEventListener("keydown", keyMove);
        DUCK.removeEventListener("click",touched);
}*/

    