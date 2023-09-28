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


    tabUser.forEach(element => {
        if (emailid === element.emailid && passewordid === element.passewordid){
            window.location.replace("../non_conn/text.html")
        }
        else{
            window.location.reload()
        }
    });
    
    tabUser.push(element)
    localStorage.setItem('userList',JSON.stringify(tabUser))

    

})