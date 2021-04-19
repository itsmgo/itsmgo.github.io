renders = ["../imatges/renders/1_Tanatori.png",
            "../imatges/renders/2_Tennis.png",
            "../imatges/renders/3_Nocturn.png",
            "../imatges/renders/4_Paret.png",
            "../imatges/renders/5_Planta.png",
            "../imatges/renders/6_Public.png",
            "../imatges/renders/7_Mediterrani.png",
            "../imatges/renders/8_Supermercat.png",
            "../imatges/renders/9_Production.png",
            "../imatges/renders/10_Nordic.png",
            "../imatges/renders/11_Platja.png",
            "../imatges/renders/12_Wireframe.png",
            "../imatges/renders/13_Orange.png",
            "../imatges/renders/14_Nadal.png",
            "../imatges/renders/15_City.png",
            "../imatges/renders/16_Casc.png",
            "../imatges/renders/17_Abstract.png",
            "../imatges/renders/18_Parquing.png",
            "../imatges/renders/19_Concessionari.jpg",
            "../imatges/renders/20_Citric.jpg"]

function preloadImages()
{
    loadedRenders = []
    for(var i=0; i<renders.length; i++){
        var im = new Image();
        im.src = renders[i];
        im.classList = "imatge";
        loadedRenders.push(im)
    } 
}

function createImage(number, key) {
    var img = loadedRenders[key[number]];
    // This next line will just add it to the <body> tag
    b = document.getElementById("b");
    b.appendChild(img);
    b.appendChild(document.createElement("br"));
}

function createButtons(matrix, candidates, vote, key) {
    c = document.getElementById("c");
    var button1  = document.createElement("button");
    button1.innerHTML="SUPERIOR";
    button1.classList = "botoGran";
    button1.onclick = function(){voting(matrix, candidates[0], candidates[1], vote, key)};
    c.appendChild(button1);
    
    var button2 = document.createElement("button");
    button2.innerHTML="INFERIOR";
    button2.classList = "botoGran";
    button2.onclick = function(){voting(matrix, candidates[1], candidates[0], vote, key)};
    c.appendChild(button2);
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
    lletres = ["a", "b", "c"]
    for(var i = 0; i < 3; i++){
        const myNode = document.getElementById(lletres[i]);
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }
    smoothScroll(document.getElementById('a'));
    main(vote+1, key)
}
    

var smoothScroll = function(elementId) {
    var MIN_PIXELS_PER_STEP = 16;
    var MAX_SCROLL_STEPS = 30;
    var target = elementId;
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    var pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
                                 (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

    var stepFunc = function() {
        scrollContainer.scrollTop =
            Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);

        if (scrollContainer.scrollTop >= targetY) {
            return;
        }

        window.requestAnimationFrame(stepFunc);
    };

    window.requestAnimationFrame(stepFunc);
}

function loadContent(M, candidates, vote,key){
    a = document.getElementById("a")
    var tx = document.createElement("text");
    tx.textContent = "Tria quin dels dos renders és el millor valorant la IL·LUMINACIÓ de l'escena, els COLORS i l'IMPACTE que genera.";
    a.appendChild(tx);
    a.appendChild(document.createElement("br"));
    createImage(candidates[0], key);
    createImage(candidates[1], key);
    createButtons(M, candidates, vote, key);
    
    c = document.getElementById("c")
    var pro = document.createElement("progress");
    pro.max = P.length
    pro.value = vote
    pro.classList = "barra";
    c.appendChild(document.createElement("br"));
    c.appendChild(pro);
    c.appendChild(document.createElement("br"));
    c.append(vote.toString()+"/"+P.length);
    c.appendChild(document.createElement("br"));
    c.appendChild(document.createElement("br"));
}
    
function check(t){
    lletres = ["a", "b", "c"]
    for(var i = 0; i < 3; i++){
        const myNode = document.getElementById(lletres[i]);
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }
    
    allKeys = [[16, 19, 17, 12,  8,  1, 11, 13],
                 [ 8, 14, 15,  2, 13, 12, 18, 16],
                 [19, 13, 12, 17, 18,  4,  0,  9],
                 [ 8, 12,  7,  1, 11, 18, 17,  6],
                 [ 2,  8,  0, 17,  7, 10, 19,  3],
                 [15, 17,  0, 10,  6, 12, 11,  9],
                 [ 8, 10, 13, 14, 19, 15,  4, 12],
                 [ 3,  9,  4,  1, 14, 15, 19, 10],
                 [17, 16, 15, 14,  4, 12,  3, 19],
                 [18,  7, 16,  9,  5,  4,  6, 11],
                 [13, 10, 18,  9, 16, 11,  4, 17],
                 [ 3, 16, 12, 19, 14,  5,  8,  1],
                 [10,  4,  3,  7, 18, 14,  8, 11],
                 [ 5,  3, 13,  1, 12,  7, 14, 16],
                 [ 1, 11,  9, 14, 13, 18, 16,  2],
                 [17, 18,  1,  0,  7, 19,  4,  2],
                 [13, 15, 14,  5,  4,  2,  1, 19],
                 [ 4, 13, 15,  2,  3,  0,  6,  8],
                 [17,  5,  6, 11,  3, 18, 10, 15],
                 [ 0,  2, 13,  1,  6, 10, 18,  9],
                 [ 3, 17, 18,  0,  5,  2,  6,  7],
                 [11,  7,  6, 10, 13, 15,  1, 14],
                 [15,  8, 11,  0,  9, 14, 12, 10],
                 [ 2, 19,  6, 10,  4, 12,  0,  3],
                 [ 9, 19,  7,  4, 11,  8,  5,  6],
                 [ 5,  3, 16,  0, 15,  1,  7,  2],
                 [16,  2,  6, 18,  5,  1, 17, 19],
                 [ 9,  0, 13,  5,  7, 15, 16, 14],
                 [ 5,  7,  0, 12,  9, 16, 17,  8],
                 [11,  2,  9,  3,  6, 10,  8,  5]]

    if(t.charAt(2)=="M"){
        main(0, allKeys[parseInt(t.split("M")[1])]) //
    }
    else{
        document.getElementById("c").append("Codi incorrecte!");
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
    document.getElementById("c").append("Text copiat!");
    
} 


function main(vote, key=0){
    preloadImages();
    if(vote == -1){
        a = document.getElementById("a")
        a.append("Entra la teva clau personal:");
        a.appendChild(document.createElement("br"));
        a.appendChild(document.createElement("br"));
        var x = document.createElement("INPUT");
        x.setAttribute("type", "text");
        x.classList = "inputText";
        var button  = document.createElement("button");
        button.innerHTML="ENTRAR";
        button.onclick = function(){check(x.value)};
        button.classList = "boto";
        a.appendChild(x)
        a.appendChild(button);
        
        if(window.innerHeight > window.innerWidth){
            a.appendChild(document.createElement("br"));
            a.appendChild(document.createElement("br"));
            a.append("Es recomana orientar el mòbil en horitzontal.");
        }

    }
    else{
        if(vote == 0){
            M = createMatrix(8);
            P = createPairs(8)
        }
        if (vote < P.length){
            candidates = P[vote];
            loadContent(M, candidates, vote, key);
        }
        else{
            a = document.getElementById("a")
            a.append("Gracies per completar la classificació.");
            a.appendChild(document.createElement("br"));
            a.append("Envia aquest codi al Marti perque pugui afegir els teus resultats:");

            b = document.getElementById("b")
            var text = document.createElement("input");
            text.id = "a32";
            text.classList = "inputText";
            text.value = generateCode(M,key);
            b.appendChild(text);
            var button  = document.createElement("button");
            button.innerHTML="Copiar codi";
            button.classList = "boto";
            button.onclick = function(){copyText(text)};
            b.appendChild(button);
            
        }
    }
}

