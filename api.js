
        var loginid = document.getElementById("exampleInputEmail1");
        var loginpwd = document.getElementById("exampleInputPassword1");
        let checkcredential= document.getElementById("checkcredential");

function validate(callback){
    
    if(loginid.value=="admin"&& loginpwd.value =="12345")
    {
    
    callback();
    }else{
        checkcredential.innerHTML="Invalid Credentials";
        return false;
    }
    
}

function redirect() {
    
    location.href = 'index.html';

}


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var output ="";
            counter=0
            for(var i=0; i<response.length;i++){
                output+="<div class='checkbox'><input type =checkbox  id='check_box_"+counter+"' onchange='strikethrough(this)'> &nbsp &nbsp" + "<b> <label for='check_box_"+counter+"' class='strikethrough' id='text_"+counter+"'>"+ response[i].title +"</label></div></b>" +  "<br> <br>";
                counter++

            }
            document.getElementById("demo").innerHTML=output;
        }
    }
    
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();




function strikethrough(checkBox){
    var chid = checkBox.id.split('_')[2]

    if( checkBox.checked ){
    var ele = document.getElementById("text_"+chid);
    ele.style.setProperty("text-decoration", "line-through");
    
    }else{

    var ele = document.getElementById("text_"+chid);
    ele.style.setProperty("text-decoration", "");
    }

    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')
    if(checkboxes.length == 5){
    alert("Congrats!!! 5 Tasks have been successfully Completed.");
    }

}

// table starts here

// let btnGet=document.querySelector("button");
// let mytable= document.querySelector("#table");


// let headers = ["title"];

// btnGet.addEventListener("click",() => {
//     let table = document.createElement("th");
//     let headerRow = document.createTextNode("tr");

//     headers.forEach(headerText => {
//         let header = document.createElement("th");
//         let textNode = document.createTextNode(headerText);
//         header.appendChild(textNode);
//         headerRow.appendChild(header);

//     });

//     table.appendChild(headerRow);

//     output.forEach(out=>{
//         let row = document.createElement("tr");

//         Object.values(out).forEach(text=>{
//             let cell = document.createElement("td");
//             let textNode = document.createTextNode("text");
//             cell.appendChild(textNode);
//             row.appendChild(cell);

//         })
//     table.appendChild(row);

        
    
//     });

// });
