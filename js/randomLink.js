var randomlinks = [];
randomlinks[0]="https://store.steampowered.com/app/1587810/Spell_Swap/";
randomlinks[1]="https://teagher.itch.io/abxy-bxya-xyab-yabx";
randomlinks[2]="https://teagher.itch.io/harveeps";
randomlinks[3]="https://teagher.itch.io/uaop";
randomlinks[4]="https://teagher.itch.io/radar-sonar-whatevar";
randomlinks[5]="https://teagher.itch.io/just-more-doors";
randomlinks[6]="https://teagher.itch.io/keymasher-ultimate";
randomlinks[7]="https://teagher.itch.io/deep-sleep-explorer";
randomlinks[8]="https://teagher.itch.io/start-the-game-together";
randomlinks[9]="https://teagher.itch.io/segwheel";
randomlinks[10]="https://teagher.itch.io/selfie-shooter";
randomlinks[11]="https://teagher.itch.io/blazerunner";
randomlinks[12]="https://teagher.itch.io/enduromun";
randomlinks[13]="https://teagher.itch.io/just-a-few-more-doors";
randomlinks[14]="https://teagher.itch.io/running-out-of-spice";
randomlinks[15]="https://teagher.itch.io/il-neige-encore";
randomlinks[16]="https://teagher.itch.io/hydrate-and-annihilate";
randomlinks[17]="https://teagher.itch.io/cabin-warfare-snow-ops";
randomlinks[18]="https://teagher.itch.io/hide-it-break-it-pay-it";
randomlinks[19]="https://teagher.itch.io/fight-for-your-light";
randomlinks[20]="https://teagher.itch.io/die-more-please";

function RandomLink(){
  window.open(randomlinks[Math.floor(Math.random()*randomlinks.length)]);
}