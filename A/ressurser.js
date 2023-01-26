

var resources = [
    {
       

        
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
        

    },




]

var lists = document.querySelectorAll("#myList1, #myList2, #myList3, #myList4, #myList5");
    for (var i = 0; i < resources.length; i++) {
        var category = resources[i].category;
        var text = resources[i].text;
        var sources = resources[i].sources;
        
        var li = document.createElement("li");
        li.innerHTML = category + ": " + text + "<br>";
        lists[i].appendChild(li);
        
        for (var j = 0; j < sources.length; j++) {
            var title = sources[j].title;
            var url = sources[j].url;
            var a = document.createElement("a");
            a.innerHTML = title;
            a.href = url;
            li.appendChild(a);
            li.appendChild(document.createElement("br"));
        }
    }





/*
listobj.map(function (listobj) {
	return '<li>' + listobj + '</li>';
});

wizards.map(function (wizard) {
	return '<li>' + wizard + '</li>';
}).join('');

var tab1 = document.querySelector('#app');
app.innerHTML = '<ul>' + listobj.map(function (listobj) {
	return '<li>' + listobj + '</li>';
}).join('') + '</ul>';


*/

/*

var html ='';
resources.forEach(resourceObject => {
	html += '</li>' + resourceObject + '</li>';
});

html += '<ul>' + html + '</ul>';

console.log(html);
document.getElementById('tab1content').innerHTML = html;


*/

//utput 
/*var html = '';
resources.forEach(function (resources) {
	html += '<li>' + resources + '</li>';
});
html = '<ul>' + html + '</ul>';
console.log(html);
document.getElementById('tab1content').innerHTML = html; */



/*

function listObject() {
    let prodListHTML = ""
    resources.map(obj => {
        prodListHTML += `
        <ul> id="content" ${prod.category}, ${prod.text}, ${prod.sources} ">
           
        </ul>
        `
    })
    document.getElementById("content").innerHTML = prodListHTML

}*/

/*
let content = document.getElementById(content)
let list = "<ul>"

resources.forEach(resourceObject => {
	list(resourceObject);

})*/


/*

let content = document.getElementById(content)
let list = "<ul>"

for(let i = 0; i < resources.length; i++ ) {
    list += "</ul>";  
}
content.innerHTML = list;

/*console.log(resources[0]);
console.log(resources[1]);
console.log(resources[2]);
console.log(resources[3]);
console.log(resources[4]);*/