// Functions
function setBattleScore(button, battleScore) {
    if (button!=0 && battleScore===0) {
        alert("Set Battle Score ...");
    }
}

let userScore = 0, compScore = 0;

function compPlayer(user) { // Player computer
    let comp=Math.floor(Math.random()*3)+1;
    document.querySelectorAll("img")[1].setAttribute("src", "images/"+comp+".jpg");
    if (user==comp) {
        resultUser="Draw";
        resultComp="Draw";
    } else if (user==1 && comp==3) {
        resultUser="Winnner 🚩🚩";
        resultComp="Defeat 💀";
        userScore++;
    } else if (user==2 && comp==1) {
        resultUser="Winnner 🚩🚩";
        resultComp="Defeat 💀";
        userScore++;
    } else if (user==3 && comp==2) {
        resultUser="Winnner 🚩🚩";
        resultComp="Defeat 💀";
        userScore++;
    } else {
        resultComp="Winnner 🚩🚩";
        resultUser="Defeat 💀";
        compScore++;
    }
    document.querySelectorAll("h2")[0].innerHTML=resultUser;
    document.querySelectorAll("h2")[1].innerHTML=resultComp;
    $(".scoreboard").text(userScore+" - "+compScore);
}

function winner() {
  setTimeout(function() {
    if (compScore >= winningScore) {
      alert("COMPUTER WON...");
      $(".scoreboard").text(0+" - "+0);
    }
    if (userScore >= winningScore) {
      alert("YOU ARE THE WINNER...");
      $(".scoreboard").text(0+" - "+0);
    }
  }, 300)
}

function battleScore() {
    let winningScore=prompt("Write Battlescore (1-50)");
        if (winningScore<=50 && winningScore>=1) {
            $(".winningScore").text("Winning Score - "+winningScore);
            document.addEventListener("keypress", function(event) { // Player User
              if (compScore < winningScore && userScore < winningScore)
                if (event.key>=1 && event.key<=3) {
                    document.querySelectorAll("img")[0].setAttribute("src", "images/"+event.key+".jpg");
                    compPlayer(event.key);
                    setTimeout(function() {
                      if (compScore >= winningScore) {
                        alert("COMPUTER WON...");
                        $(".scoreboard").text(0+" - "+0);
                      }
                      if (userScore >= winningScore) {
                        alert("YOU ARE THE WINNER...");
                        $(".scoreboard").text(0+" - "+0);
                      }
                    }, 300)
                }
            })
            document.querySelectorAll("li")[0].addEventListener("click", function() {
                document.querySelectorAll("img")[0].setAttribute("src", "images/"+1+".jpg");
                compPlayer(1);
                setTimeout(function() {
                  if (compScore >= winningScore) {
                    alert("COMPUTER WON...");
                    $(".scoreboard").text(0+" - "+0);
                  }
                  if (userScore >= winningScore) {
                    alert("YOU ARE THE WINNER...");
                    $(".scoreboard").text(0+" - "+0);
                  }
                }, 300)
            })
            document.querySelectorAll("li")[1].addEventListener("click", function() {
                document.querySelectorAll("img")[0].setAttribute("src", "images/"+2+".jpg");
                compPlayer(2);
                setTimeout(function() {
                  if (compScore >= winningScore) {
                    alert("COMPUTER WON...");
                    $(".scoreboard").text(0+" - "+0);
                  }
                  if (userScore >= winningScore) {
                    alert("YOU ARE THE WINNER...");
                    $(".scoreboard").text(0+" - "+0);
                  }
                }, 300)
            })
            document.querySelectorAll("li")[2].addEventListener("click", function() {
                document.querySelectorAll("img")[0].setAttribute("src", "images/"+3+".jpg");
                compPlayer(3);
                setTimeout(function() {
                  if (compScore >= winningScore) {
                    alert("COMPUTER WON...");
                    $(".scoreboard").text(0+" - "+0);
                  }
                  if (userScore >= winningScore) {
                    alert("YOU ARE THE WINNER...");
                    $(".scoreboard").text(0+" - "+0);
                  }
                }, 300)
            })

        } else {
            alert("Enter number between 1-50");
        }
}
// Battle Score && Players
$("h6").click(function() {
    battleScore();
})
document.addEventListener("keypress", function(event) {
    if (event.key=='w') battleScore();
})
