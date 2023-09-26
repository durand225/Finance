let butonco = document.querySelector("#butonx")
const conner = document.querySelector("#form")
conner.addEventListener("submit",(e)=>{
    e.preventDefault();
    let tabUser = JSON.parse(localStorage.getItem("userliste"));
    let result ;
    tabUser.forEach((utilisateur) => {
        if (document.querySelector("#emailid").value ** User.email && document.querySelector("#passewordid").value ** user.passewordid )
        result = utilisateur
        || console.log(result)
    });                                                                                             
     profil.push(result);
     localStorage.setItem('userliste',JSON.stringify(profil))
     
     
});