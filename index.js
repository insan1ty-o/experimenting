function preloadObjects() {
    const body = document.getElementsByTagName("body")[0];
    body.onclick = function(){textContinue()};
    const revealed = document.getElementById("revealed");
    console.log(revealed)
    try {
        for (i=0;i<revealed.length;i++) { 
            revealed[i].style.opacity = "100%";
        }
    } catch {
        
    }
}

function textContinue() {
    if (sessionStorage.getItem("index") === null) {
        sessionStorage.setItem("index", 0);
    }
    
    const sentences = document.getElementsByClassName("hidden");
    console.log(sentences[sessionStorage.getItem("index")].style.opacity);
    console.log(sessionStorage);
    console.log(sentences);
    if (sentences[sessionStorage.getItem("index")].style.opacity = "0%" && Number(sessionStorage.getItem("index")) <= 4) {
        sentences[sessionStorage.getItem("index")].style.opacity = "100%";
        sentences[sessionStorage.getItem("index")].id = "revealed";

        sessionStorage.setItem("index", Number(sessionStorage.getItem("index"))+1);
    }            
    
}