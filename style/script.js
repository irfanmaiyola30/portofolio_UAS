function updateGreetingAndTime() {
    const today = new Date();
    const hour = today.getHours();
    let greetingMessage;

   if (hour < 10) {
        greetingMessage = "Selamat Pagi!";
    } else if (hour < 15) {
        greetingMessage = "Selamat Siang!";
    } else if (hour < 18) {
        greetingMessage = "Selamat Sore!";
    } else {
        greetingMessage = "Selamat Malam!";
    }


    document.getElementById("greeting").textContent = greetingMessage;

   
    const timeString = today.toLocaleTimeString();
    document.getElementById("current-time").textContent = timeString;

    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('id-ID', options);
    document.getElementById("current-date").textContent = dateString;
}


setInterval(updateGreetingAndTime, 1000);


updateGreetingAndTime();
