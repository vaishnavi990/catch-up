const names = {
    "1":"Joseph Clark","2":"Ricardo Silva","3":"Steve Carr","4":"Gilbert Shaun","5":"John Schmidt","6":"Wm Richards","7":"Warren Chan","8":"Alex Hammond","9":"Javier Maldo","10":"Chad Munoz",
    "11":"Matt Jordan","12":"Rob Santos","13":"Jack Miles","14":"Dwayne Jones","15":"Jay Peters","16":"Ivan Kim","17":"Alfred Sparks","18":"Ken Johnston","19":"Abel Gutier","20":"Tyrone Guzman"    
}
const values = Object.values(names);
let randomName =" ";
function pickName(){
    randomName = values[parseInt(Math.random() * values.length)];
    document.write(randomName)
}   

const newUsers = {
    "1":"Lowell Walters","2":"Jason Jeffer","3":"Spencer McCall","4":"Jeffery King","5":"Oscar Lloyd","6":"Samuel Bridges","7":"Kurt Goodman","8":"Arthur Oliver","9":"Bryan Reynolds","10":"Grant Silva",
    "11":"Scott Welch","12":"Horace Strick","13":"Chad Ellis","14":"Douglas Day","15":"Jay Peters","16":"Stuart Cook","17":"Perry Larson","18":"Delbert Garza","19":"Clarence Hoff","20":"Austin Torres"    
}
const value = Object.values(newUsers);
let n =" ";
function getName(){
    n = value[parseInt(Math.random() * value.length)];
    document.write("<h4 style='m-0'>"+n+"</h4>")
} 

const groups = {
    "1":"Meme Team","2":"Akatsuki","3":"The Darth Vaders","4":"Scarlett fan page","5":"Stray gods","6":"Directioners","7":"The Stays","8":"Horandongs","9":"Yorozuya","10":"Pivot",
    "11":"Backstreet Girls","12":"Go Goa Gone","13":"Mecha Matrix","14":"Find your lobster","15":"That's what they said","16":"Calicos","17":"chennaswamy venugopal iyyer","18":"Je m'appelle","19":"Pewds","20":"Unagi"
}
const m = Object.values(groups);
let groupName =" ";
function pickGroup(){
    groupName = m[parseInt(Math.random() * m.length)];
    document.write(groupName);
} 