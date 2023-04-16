function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

    //pegar a tag img
    const img = document.querySelector("#profile img")
    
    //substituir a imagem
    if(html.classList.contains("light")){
        //se tiver o light mode adicionar a imagem light
       img.setAttribute("src", "./assets/Avatar-light.png")
       img.setAttribute("alt", "Minha foto de Perfil de óculos")
    } else{
        img.setAttribute("src",  "./assets/Avatar.png")
        img.setAttribute("alt", "Minha foto de Perfil sem óculos")
    } 

    
}