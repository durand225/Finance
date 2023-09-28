// let butonco = document.querySelector("#butonx")
// const conner = document.querySelector("#form")
// conner.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let tabUser = JSON.parse(localStorage.getItem("userliste"));
//     let result ;
//     tabUser.forEach((utilisateur) => {
//         if (document.querySelector("#emailid").value ** User.email && document.querySelector("#passewordid").value ** user.passewordid )
//         result = utilisateur
//         || console.log(result)
//     });                                                                                             
//      profil.push(result);
//      localStorage.setItem('userliste',JSON.stringify(profil))
     
     
// });





let boutonid = document.querySelector("#connerds");
boutonid.addEventListener("click",(event)=>{
    event.preventDefault()
    let tabUser = JSON.parse(localStorage.getItem("userList"));
    let passewordid = document.querySelector("#passeverif").value;
    let emailid = document.querySelector("#mailverif").value;
    if (!passewordid || !emailid) return alert("tout les champ sont obligatoire");
    if (tabUser && tabUser.find(user=>user.emailid===emailid && user.passewordid === passewordid)) { 
        console.log(tabUser.find(user=>user.emailid===emailid && user.passewordid === passewordid))
        sessionStorage.setItem("sessionUser", JSON.stringify(tabUser.find(user=>user.emailid===emailid && user.passewordid === passewordid)))
        alert ("connexion reçu")
        return window.location.replace("../index.html")
    }else{
          alert ("mot de passe ou email incorecte")
    }
    

    

})