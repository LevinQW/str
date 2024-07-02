
if (tg.initDataUnsafe.user.id === 469726457){
    function randomizeText() {
        const textElement = document.getElementById('text');
        const characters = 'abcdefghijklmnopqrstuvwxyz01234567890123456789';
        let newText = '';

        for (let i = 0; i < textElement.innerText.length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            newText += characters[randomIndex];
        }

        textElement.innerText = newText;
        
        document.getElementById("button").style.border = "3px solid rgba(255, 92, 92, .2)"
        document.getElementById('button').disabled = true;
        run()
    }

    let tg = window.Telegram.WebApp;
    document.getElementById("username").innerText = "@" + tg.initDataUnsafe.user.username


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function run() {
        document.getElementById("timer").innerText = "5 seconds"
        await sleep(1000); 
        document.getElementById("timer").innerText = "4 seconds"
        await sleep(1000); 
        document.getElementById("timer").innerText = "3 seconds"
        await sleep(1000); 
        document.getElementById("timer").innerText = "2 seconds"
        await sleep(1000); 
        document.getElementById("timer").innerText = "1 seconds"
        await sleep(1000); 
        document.getElementById("timer").innerText = ""

        
        document.getElementById("button").style.border = "2px solid rgba(255, 255, 255, .2)"
        document.getElementById('button').disabled = false;
    }
} else {
    document.getElementById("main_window").style.display = "none";
    document.getElementById("access").style.display = "display";

}

