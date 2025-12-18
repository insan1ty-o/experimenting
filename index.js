function preloadObjects() {
    const content = document.getElementById("content");
    if (content.onclick === null) {
        content.onclick = function(){textContinue()};
    }
    
    const revealed = document.getElementsByClassName("revealed");
    console.log(revealed)
    try {
        for (i=0;i<revealed.length;i++) { 
            revealed[i].style.opacity = "100%";
        }
    } catch {
        
    }
}

function textContinue() {
    const sentences = document.getElementsByClassName("hidden");
    console.log(sessionStorage);
    console.log(sentences);
    if (sentences[0] === undefined) {
        return
    } else {        
        if (sentences[0].style.opacity = "0%" && sentences.length <= 4) 
            sentences[0].style.opacity = "100%";
            sentences[0].className = "revealed";
    }     
}