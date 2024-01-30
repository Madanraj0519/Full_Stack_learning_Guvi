const {writeFile} = require('node:fs/promises');

// try{
//     const current_date = new Date()
//     var fileData = {
//         date : current_date.getDate(),
//         hours : current_date.getHours(),
//         minutes : current_date.getMinutes(),
//     };

//     writeFile(`${fileData.date}-${fileData.hours}-${fileData.minutes}.txt`,  current_date.toString())
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));
// }catch(err){
//     console.error(err);
// }

async function createAndWriteFile(current_date = new Date()){
    try{
        const current_date = new Date()
        var fileData = {
            date : current_date.getDate(),
            hours : current_date.getHours(),
            minutes : current_date.getMinutes(),
        };

        await writeFile(`${fileData.date}-${fileData.hours}-${fileData.minutes}.txt`, current_date.toString());

    }catch(err){
        console.error(err);
    }
}

createAndWriteFile(new Date());