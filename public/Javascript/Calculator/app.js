var num1 = "3";

function clearInput(){
    var result = document.getElementById("input");
    result.value = " ";
}
function getResult(){
    var result = document.getElementById("input");
    result.value = eval(result.value);
    num1 = "";
}
function getnum(num){
    
    var result = document.getElementById("input");
    console.log(num1);
    if(num1.length != 0){
            result.value += num; 
            num1 = num;
        }else{
        clearInput();
        result.value += num; 
        num1 = num;
    }

}