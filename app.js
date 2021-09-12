function alerting(element) {
    let city = element;
    alert(`Loading weather report for ${city}`);
}

function deleting(element) {
    let box = document.querySelector(".box-3")
    box.remove();
}

function conversor2() {
    let min = document.querySelectorAll("#temp")

    for (let i = 0; i<=8;i++) {
        let temperature = parseInt(min[i].innerText);
        temperature = Math.round((temperature * 9/5) + 32);
        min[i].innerText = temperature;
    }
}

