menuListArray = ["Pizza Vegetariana",
                 "Pizza deFrango",
                 "Pizza Portuguesa",
                 "Pizza Quatro Queijos",
                 "Pizza de Calabresa",
                "Pizza Extravaganza"   ];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>';
    }
    document.getElementById("displayMenu").innerHTML = htmldata;
    
}

function addItem(){
    var imagem="<img src='pizzaImg.png' id='im1'>";
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
htmldata=htmldata+imagem+ menuListArray[i]+'<br>';
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;


}

function addTop(){
    var item=document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem();
    
}