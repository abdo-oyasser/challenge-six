
let days = document.querySelectorAll(".day")
let values = document.querySelectorAll(".day .value")
let coll = document.querySelectorAll(".day .coll")
for (let i = 0; i < 7; i++) {
    coll[i].style.height = `${parseInt(values[i].innerHTML) * 3}px`
    coll[i].onclick = () => {
        values[i].classList.toggle("val")
        coll[i].classList.toggle("hid")
    }
}






