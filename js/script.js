let tbody = document .querySelector(".infoPreso table tbody");
let data = JSON.parse(localStorage.getItem("userliste"));
data.forEach((user) => {
    now =  <tr>
        <td>${user.nameid}</td>
        <td>${user.prenomid}</td>
        <td>${user.emailid}</td>
        <td>${user.passewordid}</td>
        <td><button>modifier</button></td>
    </tr>
    tbody.innerHTML += now
    
});