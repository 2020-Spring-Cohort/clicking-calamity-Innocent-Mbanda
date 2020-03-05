// let image=0;

// function pressed(){
//     image++;

//     document.getElementById("num").innerText=image;
    
// }

let cookiecount =0

function add (){
    cookiecount = cookiecount+1
    document.getElementById('text').value =cookiecount
//  document.num =cookiecount = ""
function save(){
localStorage.setItem("cookiecount", cookiecount);
}

function load(){
 cookiecount.localStorage.getElementById ("cookiecount");
 cookiecount= parseInt(cookiecount)
}

}
