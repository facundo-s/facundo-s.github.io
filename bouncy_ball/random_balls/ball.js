var Xmin = 0;
var Xmax = window.innerWidth;
var Ymin = 0;
var Ymax = window.innerHeight;

function createBall(id){
    
    id = id.toString(10)
    var ball = {}
    create(id)
    ball.id=id
    ball.element = document.getElementById(id)
    let size = ball.element.size
    let speed = 10-Math.floor(size*10/200)
    let speedX = Math.random()
    let speedY = Math.sqrt(1-speedX)
    ball.velocityX = speedX*speed //Math.floor(Math.random()*10)
    ball.velocityY = speedY*speed //Math.floor(Math.random()*10)
    ball.positionX=Math.floor(Math.random()*Xmax);
    ball.reverseX = Math.random()>=0.5
    ball.positionY=Math.floor(Math.random()*Ymax);
    ball.reverseY = Math.random()>=0.5
    return ball
}

function updateEngulfedBall(ball, new_size){
    ball.element.style.width=new_size+"px"
    ball.element.style.height=new_size+"px"
    ball.element.size = new_size
}

function checkDisjoint(ball1, ball2){
    c1c2=Math.sqrt((ball1.positionX-ball2.positionX)**2+(ball1.positionY-ball2.positionY)**2)
    r1r2=(ball1.element.size/2+ball2.element.size/2)
    if (c1c2==r1r2){
        return false
    }else if (c1c2>r1r2){
        return true
    }else{
        return false
    }
    // return (ball1.positionX-ball2.positionX)**2+(ball1.positionY-ball2.positionY)**2<(ball1.size/2+ball2.size/2)**2
}

function engulf(ball1, ball2){
    //must remove ball1 and ball2 from the global list of balls before calling this function
    if (ball1.element.size<ball2.element.size){
        buffer = ball1
        ball1=ball2
        ball2=buffer
    }
    new_size = ball1.element.size + ball2.element.size;
    updateEngulfedBall(ball1, new_size)
    return ball1
}






//Set global variable that would contain the position, velocity and the html element "ball"
// var ball = {}
// ball.e = document.getElementById("ball");
// ball.velocity = 100
// ball.positionX=0
// ball.reverseX = false
// ball.positionY=0
// ball.reverseY = false
//write a function that can change the position of the html element "ball"
function moveBall(ball) {
  // two fixed x-axis coordinates (you will use these variable in step 3)
//   var Xmin = 0;
//   var Xmax = 300;
//   var Ymin = 0;
//   var Ymax = 400;
  if (ball.reverseX){
    ball.positionX=ball.positionX-ball.velocityX
    if (ball.positionX<=Xmin){
      ball.reverseX=false
      if (ball.positionX<Xmin){
        ball.positionX=ball.positionX*(-1)
      }
    }
  }else{
    ball.positionX=ball.positionX+ball.velocityX
    if (ball.positionX>=Xmax){
      ball.reverseX=true
      if (ball.positionX<Xmax){
        ball.positionX=2*Xmax-ball.positionX
      }
    }
  }
  ball.element.style.left=ball.positionX+"px"

  if (ball.reverseY){
    ball.positionY=ball.positionY-ball.velocityY
    if (ball.positionY<=Ymin){
      ball.reverseY=false
      if (ball.positionY<Ymin){
        ball.positionY=ball.positionY*(-1)
      }
    }
  }else{
    ball.positionY=ball.positionY+ball.velocityY
    if (ball.positionY>=Ymax){
      ball.reverseY=true
      if (ball.positionY<Ymax){
        ball.positionY=2*Ymax-ball.positionY
      }
    }
  }
  ball.element.style.top=ball.positionY+"px"
  
}

// This call the moveBall function every 100ms

