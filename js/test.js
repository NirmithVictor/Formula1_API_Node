const theLinks = document.querySelectorAll(".nav-item");
theLinks.forEach(link => link.addEventListener("click", ()=>{
    document.getElementById("checkie").checked=false;
}))

let spinnerWrapper = document.getElementById("preloader");
window.addEventListener("load", function () {
    spinnerWrapper.style.display = "none";
    const theLinks = document.querySelectorAll(".nav-item");
    theLinks.forEach(link => link.addEventListener("click", ()=>{
        document.getElementById("checkie").checked=false;
    }))
    fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=query&titles=Charles%20Leclerc&prop=pageimages&format=json&pithumbsize=100&formatversion=2`).then(res=>res.json()).then((content)=>{
        console.log(content)
    })
    //This is to get the year ranges and create boxes for the championship pages
    let b= document.getElementById("subBut")
    let c= document.getElementById("inputYears")
    b.addEventListener("click",()=>{
        //console.log(c.value)
        const currentYear = (new Date()).getFullYear();
        const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
        //console.log(range(currentYear, currentYear - c.value+1, -1));
        a = range(currentYear, currentYear - c.value, -1)
        console.log(a)
        for (i=0;i<c.value;i++){
            console.log(a[i])
        }
        fetch(`http://ergast.com/api/f1/driverStandings/1.json?limit=90`).then(res=>res.json()).then((content)=>{
            //console.log(content.MRData.StandingsTable.StandingsLists[content.MRData.StandingsTable.StandingsLists.length-1])
            if (c.value >1){
                for(i=0;i<=c.value;i++){
                    console.log(content.MRData.StandingsTable.StandingsLists[content.MRData.StandingsTable.StandingsLists.length-i-1])
                }
            }
            else{
                console.log(content.MRData.StandingsTable.StandingsLists[content.MRData.StandingsTable.StandingsLists.length-1])
            }
        })
    })
})
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
/*
We need to strip the name from the initial data of drivers to get their image since it is causing alot of issues
in terms of naming convention such as first and name last 
I have tested this code to scrap out our champ's datas and it worked
We can strip the name from the wikipedia default link by simply

var a="http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg"
a=a.replace("http://en.wikipedia.org/wiki/",'')
-> to get 'Nico_H%C3%BClkenberg'
*/
