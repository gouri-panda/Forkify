// Global app controller

// let data = await fetch('https://cors-anywhere.herokuapp.com/https://nyabazar.com/api/load_courses?key=e8a21a66ccd3b091df230f261b75b52f');
console.log('index.js loaded');

async function fetchData(query) {
    let data = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
    console.log('data ' + data);
    let json = await data.json();
    console.log(json);
    if (json.error != null) {
        console.log('errrr')
    }
    console.log(json.count);
    json.recipes.forEach(value =>{
        console.log(value.title)
        //opening image url ;)
        // window.open(value.image_url)
    });

    // ;
    // for (let i =0;i < json.length;i++){
    //     console.log(json.recipes[0].title)
    // }


}

fetchData('lobster').then(() => {
    console.log('succesfully loaded')
}).catch(reason => {
    console.log(`failed due to ${reason}`)
})
