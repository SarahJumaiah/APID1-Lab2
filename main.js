let url = "https://rickandmortyapi.com/api/character";
let container = document.getElementById("container");

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        data.results.forEach(item => {
            let colDiv = document.createElement("div");
            colDiv.className = "col-md-3";

            let cardDiv = document.createElement("div");
            cardDiv.className = "character-card card";

            let text = document.createElement("h5");
            text.className = "card-title";
            text.textContent = item.name;

            let cardBody = document.createElement("div");
            cardBody.className = "card-body";
            cardBody.appendChild(text); 

            let img = document.createElement("img");
            img.src = item.image;
            img.className = "card-img-top";
            img.alt = item.name;

            cardDiv.appendChild(cardBody); 
            cardDiv.appendChild(img);     

            colDiv.appendChild(cardDiv);

            container.appendChild(colDiv);
        });
    })
