/* Ye Olde Character Generator v 1.0
Code by Brett Thurston
Last updated April 25, 2017
http://dapperdesign.me
*/

//Gender
let gender = ['Male', 'Female'];

//Choose gender
gender = gender[Math.floor(Math.random() * gender.length)];

//First names for males
const firstMaleName = ['Win', 'Hakhad', 'Brirstirk', 'Olcerth', 'Benon',
'Lor', 'Meh', 'Fan', 'Tie', 'Arth', 'Stonnor', 'Razzik', 'Rungag', 'Maven', 'Corrin',
'Brother', 'Mason', 'Mannon', 'Brick', 'Atlas', 'Harry', 'Ryan', 'Timothy', 'Andrew', 'Joseph',
'Darvin', 'Dorn', 'Evendur', 'Gorstag', 'Grim', 'Helm', 'Malark', 'Morn', 'Rand', 'Stedd'];

//First names for females
const firstFemaleName = ['Naris','Cloud', 'Laflo', 'Wie', 'Rasal', 'Losho', 'Clara',
'Mara', 'Leia', 'Sunie', 'Elisabette', 'Mae', 'Willa', 'Gregina', 'Marry',
'Jessica', 'Sarah', 'Buff', 'Tate', 'Melody', 'Arveene', 'Esvele', 'Jhessail', 'Kerri', 'Lureene',
 'Miri', 'Rowan', 'Shandri', 'Tessele'];

//General last names
const lastName = ['Dorilbes', 'Biv', 'Hia', 'Doomtail', 'Skullsher', 'Thuly', 'Gallagher',
'Riddon', 'Bont', 'Sercy', 'Lightfoot', 'Took', 'Baggins', 'Maple', 'Dickle', 'Slimer',
'Vinkman', 'Drake', 'Lundy', 'Turner', 'Hard', 'Montefusco'];

//Hair colors
const hairColor = ['Red', 'Blonde', 'Silver', 'White', 'Black'];

//Character classes
const charClass = ['Warrior', 'Rogue', 'Paladin', 'Wizard', 'Ranger', 'Cleric'];

//Disposition
const charMood = ['Stoic', 'Goofy', 'Violent', 'Complacent', 'Silly', 'Cautious', 'Brave'];

//Races
const race= ['Elf', 'Human', 'Orc', 'Goblin', 'Dwarf', 'Lizardfolk']

//Homelands
const homeHuman = ['Waylands', 'Frostfall', 'Cerebaum', 'Ashforth', 'Malkem', 'Faerûn', 'Dara', 'Illuska']
const homeElf = ['Amarië', 'Edrahil', 'Galadhon', 'Gwindor', 'Haldir', 'Voronwë', 'Shine Hall']
const homeGoblin = ['Gnizz', 'Chotbaakz', 'Chotbaakz', 'Tropsoils', 'Bross', 'Hialx']
const homeDwarf = ['Dwemer', 'Dunbar', 'the Misty Mountains', 'Advac', 'Moria', 'Balaum', 'Kruste',
'Balderk', 'Battlehammer', 'Brawnanvil', 'Dankil', 'Fireforge', 'Frostbeard', 'Gorunn', 'Holderhek',
'Ironfist', 'Loderr', 'Lutgehr', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart']
const homeLizardfolk = ["Tweek", "Li'lek", "Bruel Lake", "Fa'lem", "Gondo Brackish", "Spital Creek"]
const homeOrc = ["Gruul", "Mar Za'pan", "Dunkark", "Bone Valley", "Hung Gulch", "Krustee Gallows"]

//Flaws
const flaws =['are archanaphobic', 'are acrophobic (fear of heights)', 'are annoyingly cautious', 'are drunk most of the time',
'are always talking over people', 'must consult the onion in your pocket on major decisions. He knows best.', 'are agoraphobic (it is safer indoors)',
'are perfect in every way. At least you think so.', 'have bad breath', 'stand too close to people when you talk', 'try to keep every animal you meet as a pet',
'sincerely believe you are a god. (Why do they not listen?!)', 'secretly wish you were a bard', 'are embaressed about your stutter',
'have visions of a giant Koala ravaging your homeland (what does it mean?).', 'console.log all the things', 'think you can carry more than you can', 'are quite the contrarian' ]

//Roll 6 sided die x amount of times, best 3 numbers
function roll(n) {
    var a = Array(n);
    for (var i = 0; i < n; i++)
        a[i] = Math.floor(Math.random() * 6) + 1;
    a = a.sort().slice(n - 3, n);
    return a[0] + a[1] + a[2];
}
//Anchor stats to divs
//STR box
document.getElementsByClassName("statNumber")[0].innerHTML = roll(4);
//DEX box
document.getElementsByClassName("statNumber")[1].innerHTML = roll(4);
//CON box
document.getElementsByClassName("statNumber")[2].innerHTML = roll(4);
//INT box
document.getElementsByClassName("statNumber")[3].innerHTML = roll(4);
//WIS box
document.getElementsByClassName("statNumber")[4].innerHTML = roll(4);

//Stories
const storyThrone = 'You were born in the streets. You know no other way but street fighting. It has put bread on your table as long as you can remember. The bad thing is, you have been throwing fights lately. Maybe you are tired of the life. Maybe you need the money. It is probably both. The bad thing is someone in the street fighting ring has caught on to you. But who is it?';

const storyLamp = 'A rough childhood led you to the streets. You are taking any jobs you can find (even the bad ones). One day you came across a peddler who had a rusty old lamp. The peddler insisted you took it for free. Not thinking much of it you tossed it into your sack. You went home, had a meal and a bath. Then you remember the old rusty lamp. You took it out of the sack and rubbed it to read the inscription on the side of it. As soon as you rubbed the lamp, thunder struck and smoke began spewing out of it. A blue genie appears. Unfortunately, he has lost his wish granting powers. He tells you where you can take him to recover his power. It is a long journey to the Dessert of Jinx, but you two are determined to reach the Cave of Shinies. That is where his power lies.';

const storySoldier = 'You have trained hard to be the commander in the royal army. You fight for King and country, with a song in your heart. Unfortunately, your brother has revealed just how corrupt you are: taking bribes, abusing your power and your plan to kill the king. The only problem with this, is that it is not true! Your brother, hungry for power, has betrayed you in hopes to climb his way up the royal ladder to power. After a miserable trial in the royal court, you were found guilty. The king loved you as his own, which is lucky for you. Anyone, else would have received the gallows. You have been banished from your home, the royal kingdom you once served. Now all you can do is try to put the past behind you and find a new home. Maybe one day you will return and provide evidence your brother is a liar.';

const storyToyMaker = 'Your parents were murdered in a failed burglary. It crushed you. In their will they left you their entire estate and what wealth they had. Some months pass and you start packing their things up to take to the attic. Digging through some boxes you found a book that was incredibly odd. It smelled of chocolate and coffee, with a slight hint of vinegar. It must have been really old. Why did your parents have this book? As you flipped through the pages you start to see weird words. Upon reading them you heard a commotion down in your estate below. The entire house is ransacked. Had a burglar come through? No, in the middle of overturned furniture, clothes and housewares sat a little toy soldier that you had built. He smiles and waves to you. You put two and two together and realize this book contained powerful spells to bring anything to life. Now, how can you get revenge for the murder of your parents?';

//Stories array
const getStory = [storyThrone, storyLamp, storySoldier, storyToyMaker ];

//Pick random last name (regardless of gender)
const getFlaws = flaws[Math.floor(Math.random() * flaws.length)];

//Pick random last name (regardless of gender)
const getLastName = lastName[Math.floor(Math.random() * lastName.length)];

//Pick random race
const getRandomRace = race[Math.floor(Math.random() * race.length)];

//How old are you?
const age = Math.floor(Math.random() * 70) + 15;

//Pick random hair color
const getRandomHair = hairColor[Math.floor(Math.random() * hairColor.length)];

//Pick a random class
const getRandomClass = charClass[Math.floor(Math.random() * charClass.length)];

//Pick a random story
const getRandomStory = getStory[Math.floor(Math.random() * getStory.length)];

//Your disposition
const getMood = charMood[Math.floor(Math.random() * charMood.length)];

//Decide gender
function storyGender(){
  if (gender === 'Male'){
    return 'man';
  } else {
    return 'woman';
  }
}

//Choose first name based on gender
function getFirstName(){
if (gender === 'Male'){
  var x = firstMaleName[Math.floor(Math.random() * firstMaleName.length)];
  return x;
} else { var y = firstFemaleName[Math.floor(Math.random() * firstFemaleName.length)];
return y;
}
}

//Choose homeland
function getHomeland(){
if (getRandomRace === 'Human'){
  var x = homeHuman[Math.floor(Math.random() * homeHuman.length)];
  return x;
} else if (getRandomRace === 'Dwarf'){
  var x = homeDwarf[Math.floor(Math.random() * homeDwarf.length)];
  return x;
} else if (getRandomRace === 'Lizardfolk'){
  var x = homeLizardfolk[Math.floor(Math.random() * homeLizardfolk.length)];
  return x;
} else if (getRandomRace === 'Goblin'){
  var x = homeGoblin[Math.floor(Math.random() * homeGoblin.length)];
  return x;
} else if (getRandomRace === 'Orc'){
  var x = homeOrc[Math.floor(Math.random() * homeOrc.length)];
  return x;
} else {
  var x = homeElf[Math.floor(Math.random() * homeElf.length)];
  return x;
}
}
//Generate random character
function characterBio() {
  let msg = '<p><strong>Gender: </strong>' + gender;
  msg += '<br><strong>Race: </strong>' + getRandomRace;
  msg += '<br><strong>Homeland: </strong>' + getHomeland();
  msg += '<br><strong>Class: </strong>' + getRandomClass;
  msg += '<br><strong>Age: </strong>' + age;
  msg += '<br><strong>Mood: </strong>' + getMood;
  msg += '<br><strong>Flaws: </strong> You ' + getFlaws +'.';
  msg += '<br><strong>Hair Color: </strong>' + getRandomHair;
  msg += '</p><p class=bio><strong> Your Background: </strong>' + getRandomStory + '</p>';
  return msg;
}

//Anchor character to div
let characterDiv = document.getElementById('characterGen').innerHTML = characterBio();

//Refresh page
function reload() {
    location.reload();
}

//Open print dialog box
function printMe(){
  window.print();
}

//Establish Dev Notes
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

//Dev Notes show/hide action
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'block') {
    toggleList.textContent = 'Show Dev Notes';
    listDiv.style.display = 'none';
  } else {
    toggleList.textContent = 'Hide Dev Notes';
    listDiv.style.display = 'block';
  }
});
