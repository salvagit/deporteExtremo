function slider_next() {
    if (document.getElementById("slide1").checked === true) {
        document.getElementById("slide2").click()
    } else if (document.getElementById("slide2").checked === true) {
        document.getElementById("slide3").click()
    } else if (document.getElementById("slide3").checked === true) {
        document.getElementById("slide4").click()
    } else if (document.getElementById("slide4").checked === true) {
        document.getElementById("slide1").click()
    }
}

function slider_back() {
    if (document.getElementById("slide1").checked === true) {
        document.getElementById("slide4").click()
    } else if (document.getElementById("slide2").checked === true) {
        document.getElementById("slide1").click()
    } else if (document.getElementById("slide3").checked === true) {
        document.getElementById("slide2").click()
    } else if (document.getElementById("slide4").checked === true) {
        document.getElementById("slide3").click()
    }
}