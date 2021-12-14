// let cours = "jkdkdkkid"
// console.log(cours+' / avant Maj');
// cours ="lkjd"
// console.log(cours + ' / apres Maj');

// // function 
// const faireUneTache = (type)=>{
//     console.log("je fais : " + type);
// }
// function faireQuelQueChose (){

// }
// faireUneTache('la vaiselle')

const btn = document.querySelector("#btn")
const img = document.getElementById("img")

btn.addEventListener("click", () =>
    img.classList.toggle("show"))

//************** */
const mouseEvent = document.querySelector('.mouseEvent')
const horizontal = document.querySelector('.horizontal')
const vertical = document.querySelector('.vertical')

mouseEvent.addEventListener('mousemove', (e) => {
    horizontal.innerHTML = e.x
    vertical.innerHTML = e.y
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";
})

//****************** */
document.getElementById("input").addEventListener("input", (e) => {
        console.log(e.target.value)
    })
    //************** */

const theme = document.querySelectorAll(".theme")
const dark = document.querySelector(".dark")
const salmon = document.querySelector(".salmon")
const yellow = document.querySelector(".yellow")

theme.forEach(element => {
    element.addEventListener("click", (e) => {
        console.log(e.target.id);
        document.body.classList.remove("darkTheme", "salmonTheme", "yellowTheme")
        switch (e.target.id) {
            case "dark":
                document.body.classList.add("darkTheme")
                break
            case "salmon":
                document.body.classList.add("salmonTheme")
                break
            case "yellow":
                document.body.classList.add("yellowTheme")
                break
            default:
                null
        }
    })
});