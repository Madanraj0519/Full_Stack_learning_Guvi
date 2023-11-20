
var todoRequest = new XMLHttpRequest();
todoRequest.open('GET', "https://restcountries.com/v3.1/all");
todoRequest.addEventListener('load', function(){
    const flag = JSON.parse(this.response);
    showFlag(flag);
    console.log(flag);
});
todoRequest.send();

function showFlag(array = []){
    for(let i=0; i<array.length; i++){
        console.log(array[i].capital[0] + " : " + array[i].flag);
    }
}
