enuListArray = ["Pizza Vegetariana",
                 "Pizza deFrango",
                 "Pizza Portuguesa",
                 "Pizza Quatro Queijos"
                 "Pizza de Calabresa"
                "Pizza Extravaganza"   ];

function getMenu(){
var htmldata;
menuListArray.sort();
for(var i=0;i)<menuListArray.length;i++){
    Htmldata=htmldata+ menuListArray[i] + '<br>'
    }
    Document.getElementById(“displayMenu”).innerHTML = htmldata
    
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=””
for(var i=0;i<menuListArray.length;i++){
htmldata=htmldata+imgtags+ menuListArray[i]+’<br>’;
}
Document.getElementById(“displayAddeMenu”).innerHtml = htmldata


}

function addTop(){
    Var item=document.getElementById(“addItem”).value;
    menuListArray.push(item);
    addItem();
    
}