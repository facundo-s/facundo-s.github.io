var balls = []

function advanceGame(){
    var i;
    for (i=0; i<balls.length; i++){
        if (balls[i]==99){
            continue
        }
        moveBall(balls[i])
    }
    // var j;
    // for (i=0; i<balls.length; i++){
    //     for (j=0; j<balls.length; j++){
    //         if (i==j){
    //             continue;
    //         }else if ((balls[i]==99) || (balls[j]==99)){
    //             continue
    //         }
    //         if (checkDisjoint(balls[i], balls[j])){
    //             continue
    //         }else{
    //             var balls1=balls[i]
    //             var balls2=balls[j]
    //             balls[i]=99
    //             balls[j]=99
    //             var new_ball = engulf(balls1, balls2)
    //             if (new_ball.id==balls1.id){
    //                 var element = document.getElementById(balls2.id);
    //                 element.parentNode.removeChild(element);
    //             }else{
    //                 var element = document.getElementById(balls1.id);
    //                 element.parentNode.removeChild(element);
    //             }
    //             balls[new_ball.id]=new_ball
    //         }
    //     }
    // }
}

function setGame(n){
    var i;
    for (i=0; i<n; i++){
        new_ball = createBall(i);
        balls[i]=new_ball
    }
}

setGame(35);
setInterval(advanceGame, 100);