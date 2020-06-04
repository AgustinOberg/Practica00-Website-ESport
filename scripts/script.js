const game_menu = document.getElementById("games")
const game_images = document.getElementById("game_images")
const shooter = ["img/shooter/csgo.jpg", "img/shooter/btf.jpg", "img/shooter/cod.jpg", "img/shooter/overwatch.jpg", "img/shooter/rainbow.jpg", "img/shooter/valorant.jpg"]
const moba = ["img/moba/ClashRoyale.jpg", "img/moba/dota2.jpg", "img/moba/hots.jpg", "img/moba/lol.jpg", "img/moba/mobilelegends.jpg", "img/moba/smite.jpg"]
const mobile = ["img/mobile/brawl.jpg", "img/mobile/cod.jpg", "img/mobile/freefire.jpg", "img/mobile/hearthstone.jpeg", "img/moba/mobilelegends.jpg", "img/moba/ClashRoyale.jpg"]
const allgames = [shooter, moba, mobile]



/* SELECTOR  -  BOTON */
game_menu.addEventListener('click', (e) => {
    const tipo = e.target.nodeName
    if (tipo == "DIV") {
        const aux = game_menu.getElementsByClassName("selected")
        aux[0].classList.remove("selected")
        e.target.classList.add("selected")
    }
    if (tipo == "H5") {
        const aux = game_menu.getElementsByClassName("selected")
        aux[0].classList.remove("selected")
        e.target.parentElement.classList.add("selected")
    }
})


/* CAMBIO DE IMAGEN */
game_menu.addEventListener('click', e => {
    const hijos = [game_images.children]
    if (e.target.innerText.toUpperCase() == "SHOOTER") {
        for (let i = 0; i < hijos[0].length; i++) {
            (hijos[0])[i].children[0].setAttribute("src", shooter[i]);
        }
    }
    if (e.target.innerText.toUpperCase() == "MOBA") {
        for (let i = 0; i < hijos[0].length; i++) {
            (hijos[0])[i].children[0].setAttribute("src", moba[i]);
        }
    }
    if (e.target.innerText.toUpperCase() == "MOBILE") {
        for (let i = 0; i < hijos[0].length; i++) {
            (hijos[0])[i].children[0].setAttribute("src", mobile[i]);
        }
    }
    if (e.target.innerText.toUpperCase() == "ALL") {
        const contador = 0;
        for (let i = 0; i < hijos[0].length; i++) {
            (hijos[0])[i].children[0].setAttribute("src", allgames[Math.round(Math.random() * 2)][i]);


        }
    }

})