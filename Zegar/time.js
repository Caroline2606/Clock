let data = new Date(2021, 12, 24, 0, 0, 0);

function odliczanie() {
    let today = new Date();
    let day = today.getDate();
    let mc = today.getMonth() + 1;
    let year = today.getFullYear();
    // let godz = today.getHours();
    // let min = today.getMinutes();
    // let sek = today.getSeconds();

    let godz=today.getHours();
	    if (godz<10) godz="0"+godz;
    let min=today.getMinutes();
	    if (min<10) min="0"+min;
    let sek=today.getSeconds();
	    if (sek<10) sek="0"+sek;
    let hour="";
    hour=godz+":"+min+":"+sek;
    document.getElementById("hour").innerHTML=hour;

    let m = new Date();
    let months = ["January", "February",
                  "March", "April", "May",
                  "June", "July", "August",
                  "September", "October", "November", "December"];

    let d = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
                "Thrusday", "Friday", "Saturday"];
    
    document.getElementById("rok").innerHTML = year;
    document.getElementById("month").innerHTML = months[m.getMonth()];
    document.getElementById("day").innerHTML = day;
    document.getElementById("day2").innerHTML = days[d.getDay()];
    document.getElementById("hour").innerHTML = godz + ":" + min + ":" + sek;

    setTimeout("odliczanie()", 1000);
}