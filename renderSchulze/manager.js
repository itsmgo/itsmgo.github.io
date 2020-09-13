renders = ["../imatges/renders/spacethumb.png",
          "../imatges/casathumb.png",
          "../imatges/marchomsthumb.png",
          "../imatges/catthumb.png",
          "../imatges/bodegathumb.png",
          "../imatges/budathumb.png",
          "../imatges/physicsthumb.png",
          "../imatges/mascotathumb.png"]

function createImage(number, key) {
    var img = document.createElement("img");
    img.src = renders[key[number]];
    img.onclick = function(){window.open(this.src)};
    // This next line will just add it to the <body> tag
    document.getElementById("foo").appendChild(img);
    document.getElementById("foo").appendChild(document.createElement("br"));
}

function createButtons(matrix, candidates, vote, key) {
    var button1  = document.createElement("button");
    button1.innerHTML="VOTAR UP";
    button1.onclick = function(){voting(matrix, candidates[0], candidates[1], vote, key)};
    document.getElementById("foo").appendChild(button1);
    
    var button2 = document.createElement("button");
    button2.innerHTML="VOTE DOWN";
    button2.onclick = function(){voting(matrix, candidates[1], candidates[0], vote, key)};
    document.getElementById("foo").appendChild(button2);
    
    var button3 = document.createElement("button");
    button3.innerHTML="SHOW UP";
    button3.onclick = function(){alert(matrix)};
    document.getElementById("foo").appendChild(button3);
}

function createMatrix(n) {
    var matrix = [];
    for(var i=0; i<n; i++) {
        matrix[i] = new Array(n);
    }
    for(var i=0; i<n; i++) {
        for(var j=0; j<n; j++) {
            matrix[i][j] = 0;
        }
    }
    return matrix
}

function createPairs(n){
    var pairs = [];
    for(var i=0; i<n; i++) {
        for(var j=0; j<n; j++) {
            if(i < j){
                a = new Array(2);
                a[0] = i
                a[1] = j
                pairs.push(a);
            }
        }
    }
    return shuffle(pairs);
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function voting(matrix, winner, loser, vote, key){
    matrix[winner][loser] += 1
    const myNode = document.getElementById("foo");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    main(vote+1, key)
}
    
function loadContent(M, candidates, vote,key){
    document.getElementById("foo").append("Vota quina d'aquestes dues imatges esta mes ben feta.")
    document.getElementById("foo").appendChild(document.createElement("br"));
    createImage(candidates[0], key)
    createImage(candidates[1], key)
    createButtons(M, candidates, vote, key)
}
    
function check(t){
    if(t=="marti"){
        const myNode = document.getElementById("foo");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
        main(0, [16,19,17,12,8,1,11,13])
    }
}

function generateCode(m, k){
    string = "";
    for(var i=0; i<m.length; i++) {
        for(var j=0; j<m[i].length; j++) {
            string += m[i][j].toString();
            string += ".";
        }
        string += ":";
    }
    string += "|";
    for(var i=0; i<k.length; i++) {
        string += k[i].toString();
        string += ".";
    }
    return string;
}

function copyText(){
  /* Get the text field */

  var text = document.getElementById("a32")
  /* Select the text field */
  text.select();
  text.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Text copiat: " + text.value);
} 


function main(vote, key=0){
    if(vote == -1){
        document.getElementById("foo").append("Entra la teva clau personal:");
        var x = document.createElement("INPUT");
        x.setAttribute("type", "text");
        var button  = document.createElement("button");
        button.innerHTML="Comprovar";
        button.onclick = function(){check(x.value)};
        document.getElementById("foo").appendChild(button);
        document.getElementById("foo").appendChild(x)
    }
    else{
        if(vote == 0){
            M = createMatrix(8);
            P = createPairs(8)
        }
        if (vote < P.length){
            candidates = P[vote];
            document.getElementById("foo").append(vote.toString()+"/"+P.length);
            document.getElementById("foo").appendChild(document.createElement("br"));
            loadContent(M, candidates, vote, key);
        }
        else{
            document.getElementById("foo").append("Gracies per completar la classificació. Envia aquest codi al Marti perque pugui coneixer els teus resultats:");
            document.getElementById("foo").appendChild(document.createElement("br"));
            var text = document.createElement("input");
            text.id = "a32";
            text.value = generateCode(M,key);
            document.getElementById("foo").appendChild(text);
            var button  = document.createElement("button");
            button.innerHTML="Copiar codi";
            button.onclick = function(){copyText(text)};
            document.getElementById("foo").appendChild(button);
            
        }
    }
}