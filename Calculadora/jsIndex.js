function setResult(value){
    document.getElementById('result').value = value;
}
function getResult(){
    return(document.getElementById('result').value);
}

function add(key){
   document.getElementById("result").value += key;
};

function calc(){
    let result = eval(getResult());
    setResult(result);
};

function del(){
    setResult('');
};