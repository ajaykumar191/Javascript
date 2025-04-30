//btn-gaming
//btn-music
//btn-tech

function changeColor(classValue) {

    if(classValue === 'btn-gaming'){
        document.querySelector(".btn-music").classList.remove("is-toggled");
        document.querySelector(".btn-tech").classList.remove("is-toggled");
        document.querySelector(".btn-gaming").classList.add("is-toggled");

    }else if(classValue === 'btn-music'){
        document.querySelector(".btn-gaming").classList.remove("is-toggled");
        document.querySelector(".btn-tech").classList.remove("is-toggled");
        document.querySelector(".btn-music").classList.add("is-toggled");
    }
    else if(classValue === 'btn-tech'){
        document.querySelector(".btn-gaming").classList.remove("is-toggled");
        document.querySelector(".btn-music").classList.remove("is-toggled");
        document.querySelector(".btn-tech").classList.add("is-toggled");
    }
    // if (document.querySelector(`.${classValue}`).classList.contains("is-toggled")) {
    //     document.querySelector(`.${classValue}`).classList.remove("is-toggled");

    // } else {
    //     document.querySelector(`.${classValue}`).classList.add("is-toggled");

    // }
}