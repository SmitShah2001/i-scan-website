function rpsgame(yourChoice) {

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanChoice = yourChoice.id;
    var computerChoice = choosen();

    compare(humanChoice, computerChoice);
}

function choosen() {

    var set = ['rock', 'paper', 'scissors'];
    var index = Math.floor(Math.random() * 3);
    return set[index];
}

function compare(humanChoice, computerChoice) {

    var made_h1 = document.createElement("h1");
    var made_human = document.createElement("img");
    var made_comp = document.createElement("img");

    made_h1.setAttribute('id', 'made_h1');
    made_comp.setAttribute('id', 'made_comp');
    made_human.setAttribute('id', 'made_human');

    if (humanChoice == "rock" && computerChoice == "rock") {

        made_comp.src = "images/rock.jpg";
        made_human.src = "images/rock.jpg";
        made_h1.innerHTML = "tied";

        document.getElementById("flex-box-rps-div").appendChild(made_human);
        document.getElementById("flex-box-rps-div").appendChild(made_h1);
        document.getElementById("flex-box-rps-div").appendChild(made_comp);

        styles();
    }

    else if (humanChoice == "paper" && computerChoice == "paper") {

        made_comp.src = "images/paper.png";
        made_human.src = "images/paper.png";
        made_h1.innerHTML = "tied";

        document.getElementById("flex-box-rps-div").appendChild(made_human);
        document.getElementById("flex-box-rps-div").appendChild(made_h1);
        document.getElementById("flex-box-rps-div").appendChild(made_comp);

        styles();
    }

    else if (humanChoice == "scissors" && computerChoice == "scissors") {

        made_comp.src = "images/scissor.png";
        made_human.src = "images/scissor.png";
        made_h1.innerHTML = "tied";

        document.getElementById("flex-box-rps-div").appendChild(made_human);
        document.getElementById("flex-box-rps-div").appendChild(made_h1);
        document.getElementById("flex-box-rps-div").appendChild(made_comp);

        styles();
    }

    else if (humanChoice == "rock" && computerChoice == "scissors") {

        made_comp.src = "images/scissor.png";
        made_human.src = "images/rock.jpg";
        made_h1.innerHTML = "won";

        document.getElementById("flex-box-rps-div").appendChild(made_human);
        document.getElementById("flex-box-rps-div").appendChild(made_h1);
        document.getElementById("flex-box-rps-div").appendChild(made_comp);

        styles();
    }

    else if (humanChoice == "rock" && computerChoice == "paper") {

        made_comp.src = "images/paper.png";
        made_human.src = "images/rock.jpg";
        made_h1.innerHTML = "lose";

        document.getElementById("flex-box-rps-div").appendChild(made_human);
        document.getElementById("flex-box-rps-div").appendChild(made_h1);
        document.getElementById("flex-box-rps-div").appendChild(made_comp);

        styles();
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {

        made_comp.src = "images/rock.jpg";
        made_human.src = "images/paper.png";
        made_h1.innerHTML = "won";

        document.getElementById("flex-box-rps-div").appendChild(made_human);
        document.getElementById("flex-box-rps-div").appendChild(made_h1);
        document.getElementById("flex-box-rps-div").appendChild(made_comp);

        styles();
    }

    else if (humanChoice == "paper" && computerChoice == "scissors") {

        made_comp.src = "images/scissor.png";
        made_human.src = "images/paper.png";
        made_h1.innerHTML = "lose";

        document.getElementById("flex-box-rps-div").appendChild(made_human);
        document.getElementById("flex-box-rps-div").appendChild(made_h1);
        document.getElementById("flex-box-rps-div").appendChild(made_comp);

        styles();
    }

    else if (humanChoice == "scissors" && computerChoice == "paper") {

        made_comp.src = "images/paper.png";
        made_human.src = "images/scissor.png";
        made_h1.innerHTML = "won";

        document.getElementById("flex-box-rps-div").appendChild(made_human);
        document.getElementById("flex-box-rps-div").appendChild(made_h1);
        document.getElementById("flex-box-rps-div").appendChild(made_comp);

        styles();
    }

    else if (humanChoice == "scissors" && computerChoice == "rock") {

        made_comp.src = "images/rock.jpg";
        made_human.src = "images/scissor.png";
        made_h1.innerHTML = "lose";

        document.getElementById("flex-box-rps-div").appendChild(made_human);
        document.getElementById("flex-box-rps-div").appendChild(made_h1);
        document.getElementById("flex-box-rps-div").appendChild(made_comp);

        styles();
    }

}

function styles() {

    let query = window.matchMedia("(max-width:500px)");

    if (query.matches) {

        document.getElementById("made_h1").style.width = "53px";
        document.getElementById("made_h1").style.height = "60px";
        document.getElementById("made_h1").style.padding = "5px 5px 5px 0px";
        document.getElementById("made_h1").style.paddingBottom = "10px";
        document.getElementById("made_h1").style.margin = "1px";
        document.getElementById("made_h1").style.alignItems = "center";
        document.getElementById("made_h1").style.border = "1px solid black";
        document.getElementById("made_h1").style.color = "red";

        document.getElementById("made_comp").style.margin = "4px";
        document.getElementById("made_comp").style.padding = "10px";
        document.getElementById("made_comp").style.width = "50px";
        document.getElementById("made_comp").style.height = "50px";
        document.getElementById("made_comp").style.marginBottom = "0px";
        document.getElementById("made_comp").style.boxShadow = " 0px 10px 50px rgba(233, 50, 37, 0.5)";


        document.getElementById("made_human").style.margin = "4px";
        document.getElementById("made_human").style.padding = "10px";
        document.getElementById("made_human").style.width = "50px";
        document.getElementById("made_human").style.height = "50px";
        document.getElementById("made_human").style.marginBottom = "0px";
        document.getElementById("made_human").style.boxShadow = " 0px 10px 50px rgba(37, 50, 233, 0.5)";

    } else {

        document.getElementById("made_h1").style.width = "150px";
        document.getElementById("made_h1").style.height = "105px";
        document.getElementById("made_h1").style.padding = "20px";
        document.getElementById("made_h1").style.paddingBottom = "20px";
        document.getElementById("made_h1").style.margin = "4px";
        document.getElementById("made_h1").style.textAlign = "center";
        document.getElementById("made_h1").style.border = "2px solid black";
        document.getElementById("made_h1").style.color = "red";

        document.getElementById("made_comp").style.margin = "4px";
        document.getElementById("made_comp").style.padding = "20px";
        document.getElementById("made_comp").style.width = "150px";
        document.getElementById("made_comp").style.height = "150px";
        document.getElementById("made_comp").style.marginBottom = "0px";
        document.getElementById("made_comp").style.boxShadow = " 0px 10px 50px rgba(233, 50, 37, 0.5)";


        document.getElementById("made_human").style.margin = "4px";
        document.getElementById("made_human").style.padding = "20px";
        document.getElementById("made_human").style.width = "150px";
        document.getElementById("made_human").style.height = "150px";
        document.getElementById("made_human").style.marginBottom = "0px";
        document.getElementById("made_human").style.boxShadow = " 0px 10px 50px rgba(37, 50, 233, 0.5)";
    }
}

function again() {
    location.reload();
}

