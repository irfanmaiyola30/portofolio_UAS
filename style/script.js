document.addEventListener("DOMContentLoaded", function () {
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
        } else (hour < 4) {
            greetingMessage = "Selamat Malam!";
        }

        const greetingElement = document.getElementById("greeting");
        if (greetingElement) {
            greetingElement.textContent = greetingMessage;
        }

        const timeString = today.toLocaleTimeString();
        const timeElement = document.getElementById("current-time");
        if (timeElement) {
            timeElement.textContent = timeString;
        }

     
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = today.toLocaleDateString('id-ID', options);
        const dateElement = document.getElementById("current-date");
        if (dateElement) {
            dateElement.textContent = dateString;
        }
    }


    setInterval(updateGreetingAndTime, 1000);
    updateGreetingAndTime();

    const navLinks = document.querySelectorAll('.nav-link');
    const currentLocation = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active', 'text-danger');
        }

        link.addEventListener('click', function () {
           
            navLinks.forEach(item => item.classList.remove('active', 'text-danger'));

           
            this.classList.add('active', 'text-danger');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const userAgent = navigator.userAgent;
    let deviceType;
    if (/Mobi|Android/i.test(userAgent)) {
        deviceType = "Mobile";
    } else if (/Tablet|iPad/i.test(userAgent)) {
        deviceType = "Tablet";
    } else {
        deviceType = "Desktop";
    }
    const deviceInfoElement = document.getElementById("device-info");
    deviceInfoElement.textContent = `Kamu Menggunakan perangkat ${deviceType}`;
});

document.addEventListener("DOMContentLoaded", function () {
    // Menggunakan API untuk mendapatkan IP pengunjung
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            const ipElement = document.getElementById("user-ip");
            ipElement.textContent = `Your IP address is: ${ip}`;
        })
        .catch(error => {
            console.error("Error fetching IP address: ", error);
        });
});

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-music");

    // Check if audio position is saved
    const savedTime = localStorage.getItem("audioTime");
    if (savedTime) {
        audio.currentTime = parseFloat(savedTime);
    }

    audio.play();

    // Save current audio time before page unload
    window.addEventListener("beforeunload", () => {
        localStorage.setItem("audioTime", audio.currentTime);
    });
});
