var firstname = 'Tremain-Ajena';
var lastname = ' Jones';
var r= [
    {company: "Habitat for Humanity of Greater Cincinnati", title: 'Construction Crew Leader', descript: 'Lead volunteers and helped supervise and build homes in Cincy based on the architectural plans.'},
    {company: "Berea College TAD/ Computer Science Department", title: 'Head TA/ Electricity and Electronics TA', descript: 'Supervised all Computer Science TAs, created labs, graded student work, and helped students understand coursework.'},
    {company: "Berea College Theater and Scene Shop", title: 'Carpenter', descript: 'Built sets and props based on script analysis and scene notes from the superviser.'},
    {company: "Berea College Phonathon", title: 'Donation Specialist', descript: 'Made phone calls on behalf of Berea College asking for donations to the school.'},
    {company: "Berea College Log House Craft Gallery", title: 'Managaer', descript: 'Supervised a team of sales associates, completed all sales transactions, and recorded daily sales.'},

]

var mySkills= [
    {skill: 'Arduino', cool: 'yes'},
    {skill: 'Autodesk Inventor Pro', cool: 'yes'},
    {skill: 'Microsoft Word', cool: 'no'},
    {skill: 'Siding Installation', cool: 'yes'},
    {skill: 'Operating CNC Routers', cool: 'yes'},
    {skill: '3D Printing', cool: 'yes'},
    {skill: 'Verbal and Written Communication', cool: 'no'},
]


var myInt= [
    {interest: 'TV', cool: 'yes'},
    {interest: 'Horror Movies', cool: 'yes'},
    {interest: 'B-Movies', cool: 'no'},
    {interest: 'Movie Reviews', cool: 'yes'},
    {interest: 'Eating', cool: 'yes'},
    {interest: 'Sleeping', cool: 'yes'},
    {interest: 'Crafting', cool: 'no'},
]

console.log((firstname.toUpperCase(firstname)) + (lastname.toUpperCase(lastname)));

console.log('');
console.log('Previous Experience');
var j=0;
while (j < 5){
    displayPosition(r[j].company, r[j].title, r[j].description);
    j++;
}

function displayPosition (company, title, descript) {
    
    console.log('Company Name: ' + r[j].company);
    console.log('Job Title: ' + r[j].title);
    console.log('Description: '+ r[j].descript);
}

console.log ('');
console.log('My Skills:');
var y=0
while (y < 7){
    displaySkill(mySkills[y].skill, mySkills[y].cool);
    y++
}

function displaySkill (skill, cool) {
    if (cool == 'yes'){
        console.log ('* BAM: ' + mySkills[y].skill);
    } else {
        console.log ('* ' + mySkills[y].skill);
    }
}

console.log ('');
console.log('My Interests:');
var x=0
while (x < 7){
    displayInterest(myInt[x].interest, myInt[x].cool);
    x++
}

function displayInterest (interest, cool) {
    if (cool == 'yes'){
        console.log ('** ' + myInt[x].interest);
    } else {
        console.log ('* ' + myInt[x].interest);
    }
}