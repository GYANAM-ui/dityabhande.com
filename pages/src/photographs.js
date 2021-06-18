function imageRedirect() {
    javascript: alert(document.title);
    window.location = ".././images/main.jpg";
}

function imageRedirect3() {
    javascript: alert(document.title);
    window.location = ".././images/main3.jpg";
}

function videoRedirect() {
    javascript: alert(document.title);
    window.location = ".././videos/video.mp4"
}

username = localStorage.getItem("user_name");
useremail = localStorage.getItem("user_email");
userpass = localStorage.getItem("user_pass");

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}