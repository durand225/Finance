let boutonid = document.querySelector("#boutonid");
boutonid.addEventListener("click",(event)=>{
    event.preventDefault()
    let tabUser = JSON.parse(localStorage.getItem("userList")) || []
    let nameid = document.querySelector("#nameid").value;   
    let prenomid = document.querySelector("#prenomid").value;
    let passewordid = document.querySelector("#passewordid").value;
    let emailid = document.querySelector("#emailid").value;



    let user = {
        nameid : nameid,
        prenomid : prenomid,
        emailid : emailid,
        passewordid : passewordid,
      
    }
    tabUser.push(user)
    localStorage.setItem('userList',JSON.stringify(tabUser))

    

})