document.addEventListener("DOMContentLoaded", function () {
    function updateGreetingAndTime() {
        const today = new Date();
        const hour = today.getHours();
        let greetingMessage;

        if (hour >= 4 && hour < 10) {
            greetingMessage = "Selamat Pagi!";
        } else if (hour >= 10 && hour < 15) {
            greetingMessage = "Selamat Siang!";
        } else if (hour >= 15 && hour < 18) {
            greetingMessage = "Selamat Sore!";
        } else {
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

document.querySelector('.navbar-toggler').addEventListener('click', function () {
    this.classList.toggle('collapsed');
});

// Initialize Google Analytics
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        // Configurasi untuk Google Analytics
        gtag('config', 'G-H8R57BJHQ4');

        // Track Device Info
        gtag('event', 'device_info', {
            'event_category': 'user',
            'event_label': navigator.userAgent, // Mengambil informasi User-Agent
            'value': 'Device Info'
        });

        // Track Location (jika geolocation tersedia)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                gtag('event', 'location_info', {
                    'event_category': 'user',
                    'event_label': 'Latitude: ' + position.coords.latitude + ', Longitude: ' + position.coords.longitude,
                    'value': 'Location Info'
                });
            });
        }

        // Track Time of Access
        var currentTime = new Date();
        gtag('event', 'page_access_time', {
            'event_category': 'page',
            'event_label': 'Accessed at: ' + currentTime.toLocaleTimeString(),
            'value': 'Page Accessed Time'
        });

        // Track Day and Hour of Access
        var date = new Date();
        var day = date.getDay();  // Dapatkan hari dalam minggu (0-6)
        var hour = date.getHours();  // Dapatkan jam (0-23)

        gtag('event', 'time_accessed', {
            'event_category': 'time',
            'event_label': 'Day: ' + day + ', Hour: ' + hour,
            'value': 'Access Time'
        });

        // Track Custom Dimensions (contoh: type_user = guest atau member)
        gtag('config', 'G-H8R57BJHQ4', {
            'custom_map': {
                'dimension1': 'user_type', // ID dimensi kustom yang telah Anda buat
            }
        });

        gtag('event', 'user_information', {
            'user_type': 'guest' // Misalnya, Anda ingin melacak jika pengguna adalah guest atau member
        });

async function trackUser() {
    try {
        const response = await fetch('https://irfan123.pythonanywhere.com/track', {
            method: 'POST',
        });
        const data = await response.json();
        console.log('Tracking status:', data);
    } catch (error) {
        console.error('Error tracking user:', error);
    }
}

async function getOnlineUsers() {
    try {
        const response = await fetch('https://irfan123.pythonanywhere.com/online-users');
        const users = await response.json();
        const userList = document.getElementById('online-users');
        userList.innerHTML = ''; // Reset daftar
        for (const [ip, data] of Object.entries(users)) {
            const li = document.createElement('li');
            li.textContent = `IP: ${ip}, Last Online: ${data.last_online}, Browser: ${data.user_agent}`;
            userList.appendChild(li);
        }
    } catch (error) {
        console.error('Error fetching online users:', error);
    }
}

// Update pengguna online setiap 30 detik
document.addEventListener('DOMContentLoaded', () => {
    setInterval(getOnlineUsers, 30000);
    getOnlineUsers();
});
// Track user saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    trackUser();
    getOnlineUsers(); // Muat pengguna online pertama kali
    setInterval(getOnlineUsers, 30000); // Perbarui setiap 30 detik
});


