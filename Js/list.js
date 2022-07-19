function initListing(){
    console.log("Listing the users");
    let users=readUser();
    displayUsers(users);
}

function displayUsers(usersArray){
    //travel the array of users
    let table = "";
    for(let i=0; i<usersArray.length; i++){
        //get the user
        let users = usersArray[i];
        //create the html row element
        console.log("getting user " + usersArray[i].lname);
        table +=`
                    <tr id="${users.id}">
                        <th scope="row" >${users.id}</th>
                        <td>${users.fname}</td>
                        <td>${users.lname}</td>
                        <td>${users.age}</td>
                        <td>${users.address}</td>
                        <td>${users.email}</td>
                        <td>${users.password}</td>
                        <td>${users.payMethod}</td>
                        <td><button class="btn btn-danger" onClick="deletePet(${users.id});"> Delete </button></td>
                    </tr>`;
    }//append the row to the html table
    $("#tbody").append(table);
    //console.log(usersArray);
    }
window.onload = initListing;
