const theLinks = document.querySelectorAll(".nav-item");
theLinks.forEach(link => link.addEventListener("click", ()=>{
    document.getElementById("checkie").checked=false;
}))
/*

WE GET THIS DATA FROM THIS API
let a = {
    "batchcomplete": true,
    "query": {
        "pages": [
            {
                "pageid": 41758713,
                "ns": 0,
                "title": "Max Verstappen",
                "thumbnail": {
                    "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Max_Verstappen_2017_Malaysia_3.jpg/33px-Max_Verstappen_2017_Malaysia_3.jpg",
                    "width": 33,
                    "height": 50
                },
                "pageimage": "Max_Verstappen_2017_Malaysia_3.jpg",
                "terms": {
                    "alias": [
                        "Max Emilian Verstappen"
                    ],
                    "label": [
                        "Max Verstappen"
                    ],
                    "description": [
                        "Dutch-Belgian racing driver"
                    ]
                }
            }
        ]
    }
}
console.log(a)
console.log(a.query)
console.log(a.query.pages)
console.log(a.query.pages[0])
console.log(a.query.pages[0].pageimage)*/