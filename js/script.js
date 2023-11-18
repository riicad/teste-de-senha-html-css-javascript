var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("forte");

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }
    
    if (pass.value.length < 4) {
        str.innerHTML = "FRACA";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";

    } else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "MÉDIA";
        pass.style.borderColor = "#ff7b00";
        msg.style.color = "#ff7b00";

    } else if (pass.value.length >= 8) {
        str.innerHTML = "FORTE";
        pass.style.borderColor = "#7bff00";
        msg.style.color = "#7bff00";
    }

});





