
var todoRequest = new XMLHttpRequest();
todoRequest.open('GET', "https://restcountries.com/v3.1/all");
todoRequest.addEventListener('load', function(){
    const flag = JSON.parse(this.response);
    showData(flag);
    console.log(flag);
});
todoRequest.send();


function showData(array = []){
    for(let i=0; i<array.length; i++){
        console.log("Name : ", array[i].name.common,
                    "Region : ", array[i].region,
                    "Subregion : ", array[i].subregion,
                    "Population : ", array[i].population);
    }
}