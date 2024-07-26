// teams and players on those teams
class player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

// describe method to pronounce information
describe()  {
    return `${this.name} plays ${this.position}`;
}
}

// creating team
class Team {
    constructor(name) {
        this.name = name;
        this.players = [];

    }

//create a method to add player
addplayer(player) {
    if (player instanceof Player) {
        this.players.push(player);
    } else {
        throw new Error(`You can only add an instance of Player.
            argument is not a player: ${player}`);
    }

}

describe()  {
    return '${this.name} has ${this.players.length} players.' ;
}
}
//creating a menu class to drive an application
class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }
//giving menu options and selections
start()  {
    let selection = this.showMainMenuOptions();
    while (selection !=0) {
        switch(selection) {
            case '1' :
                this.createTeam();
                break;
                case '2' :
                    this.viewTeam();
                    break;
                    case '3' :
                        this.deleteTeam();
                        break;
                        case '4' :
                            this.displayTeam();
                            bresk;
                            default:
                                selection = 0;
        }
        selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }
//adding promnpts in our application
showMainMenuOptions() {
    return prompt(`
        0) exit
        1) create a new team
        2) view a team
        3) delete a team
        4) display all teams
        `);
}

//build a string to hold team info

showTeamMenuOptions(teamInfo) {
    return prompt(`
        0) back
        1) add a new player
        2) delete a player
        -------------------
        ${teamInfo}
        `);
}

displayTeams() {
    let teamString = '';
    for (let i = 0; i < this.teams.length; i++) {
        teamString += i+ ') ' + this.team[i].name + '\n';

    }
    alert(teamString);
}
//creating team 
createTeam() {
    let name = prompt('Enter name for new team: ');
this.teams.push(new Team(name));
}
//usingh view team method to view team with prompt
viewTeam() {
    let index = prompt("Enter the index of team that you want to view:");
    if (index > -1 && index < this.team.length) {
        this.selectedTeam = this.teams[index];
        let description = 'Team Name: ' + this.selectedTeam.name + '\n';
        description += ' ' + this.selectedTeam.describe() + '\n ';
        for (let i = 0; i < this.selectedTeam.players.length; i++) {
            description += i + ') ' + this.selectedTeam.players[i].describe() + '\n';
            
        }
//show team menu options to display    

let selection1 = this.showTeamMenuOptions(description);
switch(selectiom1) {
    case '1' :
        this.createPlayer();
        break;
        case '2' :
            this.deletePlayer();
}
}
}
//to delete a team from menu
deleteTeam() {
    let index = prompt('Enter the index of the team that you wish to delete: ');
    if(index > -1 && index < this.selectedTeam.players.length) {
        this.selectedTeam.players.splice(index,1);
    }
}
}

let menu = new Menu();
menu.start();

