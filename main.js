
let form = document.querySelector(".search-form")
let resultShow = document.querySelector(".result-show")
let button = document.querySelector(".search")
let input = document.querySelector(".searchname")
let audio = document.querySelector("audio")


console.log(audio)
form.addEventListener("submit", function(event) {
    event.preventDefault()

    let searchText = document.querySelector("#searchname").value

    console.log("searchText", searchText)

    resultShow.textContent = ""

fetch(`https://itunes.apple.com/search?term=${searchText}`)  
.then (function (data){
    return data.json()
})
.then (function(json) {
    console.log(json)   

    for (var i = 0; i < json.results.length; i++) {
        let name = json.results[i].artistName
          let img = json.results[i].artworkUrl100
        let songName = json.results[i].collectionName
        let audio2 = json.results[i].previewUrl

        let show = `
        <div class = "song">
            <img src="${img}" value= "${audio2}" alt="">
            <h3> ${name} </h3>
            <h2> ${songName} </h2>
            <audio controls class = "play">
            <source value="" src="${audio2}" type="audio/mpeg">
        </div>
        `
       
        resultShow.insertAdjacentHTML("beforeEnd", show)
    }
})
})

resultShow.addEventListener("click", function (click) {
    let img = document.querySelectorAll("img")
    if (click.target && click.target.nodeName === "IMG")
    audio.src = click.target.getAttribute("value")
    console.log("audio", audio.src)

})