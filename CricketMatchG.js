// Parent class: Player
class Match{
        constructor(date,time,country){
    this.time=time;
    this.date=date;
    this.country=country;
        }  
        Time(){
            console.log(`Match Time is ${this.time}`)
        }
        Date(){
            console.log(`Match DATE is ${this.date}`)
        }
}
class stadium extends Match{
        constructor(location,pitch,spectators,lights,stadiumSize){
                super(location,pitch,spectators,lights,stadiumSize)
                this.location=location;
                this.pitch=pitch;
                this.spectators=spectators;
                this.lights=lights;
                this.stadiumSize=stadiumSize;
        }
        Location(){
                console.log(`The Match is in ${this.location}`)
        }
        Pitch(){
                console.log(`The Pitch is ${this.pitch}`)
        }
        Spectators(){
                console.log(`There are ${this.spectators} spectators`)
        }
        Lights(){
                console.log(`Their are ${this.lights} lights in the stadium`)
        }
        StadiumSize(){
                console.log(`The Size of Stadium is ${this.stadiumSize}`)
        }
}
class Player {
        constructor(name) {
          this.name = name;
        }
      
        play() {
          // Abstract method to be implemented by subclasses
          throw new Error('Subclass must implement the play() method.');
        }
      }
      
      // Subclass: Batsman
      class Batsman extends Player {
        constructor(name, runsScored) {
          super(name);
          this.runsScored = runsScored;
        }
      
        play() {
          console.log(`${this.name} is batting.`);
        }
      }
      
      // Subclass: Bowler
      class Bowler extends Player {
        constructor(name, wicketsTaken) {
          super(name);
          this.wicketsTaken = wicketsTaken;
        }
      
        play() {
          console.log(`${this.name} is bowling.`);
        }
      }
      class WicketKeeper extends Player{
        constructor(name,stumps){
          super(name);
          this.stumps=stumps;
        }
        play(){
          console.log(`${this.name} is Wicket Keeper.`)
        }
      }
      
      // Aggregation: Team
      class Team {
        constructor(name) {
          this.name = name;
          this.players = [];
        }
      
        addPlayer(player) {
          this.players.push(player);
        }
      
        getTotalRuns() {
          let totalRuns = 0;
          for (const player of this.players) {
            if (player instanceof Batsman) {
              totalRuns += player.runsScored;
            }
          }
          return totalRuns;
        }
      
        getTotalWickets() {
          let totalWickets = 0;
          for (const player of this.players) {
            if (player instanceof Bowler) {
              totalWickets += player.wicketsTaken;
            }
          }
          return totalWickets;
        }
      
      getTotalStumpings() {
        let totalStumps = 0;
        for(const player of this.players){
          if(player instanceof WicketKeeper){
            totalStumps+=player.stumps;
          }
        }
          return totalStumps;
      }
    }
      // Create players
      const Team1batsman1 = new Batsman('Shahid', 50);
      const Team1batsman2 = new Batsman('Babar', 62);
      const Team1batsman3 = new Batsman('Fakhar', 23);
      const Team1batsman4 = new Batsman('Asad', 14);
      const Team1batsman5 = new Batsman('Azhar', 73);
      const Team1bowler1 = new Bowler('Shaheen', 2);
      const Team1bowler2 = new Bowler('Naseem', 3);
      const Team1bowler3 = new Bowler('Husnain', 0);
      const Team1bowler4 = new Bowler('Haris', 1);
      const Team1bowler5 = new Bowler('Shoaib', 2);
      const Team1bowler6 = new Bowler('Amir', 0);
      const Team1wicketkeeper =new WicketKeeper('Arshad',1);

          // Create teams
          const team1 = new Team('Team 1');
          team1.addPlayer(Team1batsman1);
          team1.addPlayer(Team1batsman2);
          team1.addPlayer(Team1batsman3);
          team1.addPlayer(Team1batsman4);
          team1.addPlayer(Team1batsman5);
    
          team1.addPlayer(Team1bowler1);
          team1.addPlayer(Team1bowler2);
          team1.addPlayer(Team1bowler3);
          team1.addPlayer(Team1bowler4);
          team1.addPlayer(Team1bowler5);
          team1.addPlayer(Team1bowler6);

          team1.addPlayer(Team1wicketkeeper);

          const team1TotalRuns = team1.getTotalRuns();
          const team1TotalWickets = team1.getTotalWickets();
          const team1TotalStumpings= team1.getTotalStumpings();
          console.log(`Team 1 Total Runs: ${team1TotalRuns}`);
          console.log(`Team 1 Total Wickets: ${team1TotalWickets}`);
          console.log(`Team 1 Total Stumpings: ${team1TotalStumpings}`)

      const Team2batsman1 = new Batsman('John', 30);
      const Team2batsman2 = new Batsman('Richard', 76);
      const Team2batsman3 = new Batsman('Jack', 12);
      const Team2batsman4 = new Batsman('James', 31);
      const Team2batsman5 = new Batsman('Steve', 5);
      const Team2bowler1 = new Bowler('Jod', 0);
      const Team2bowler2 = new Bowler('Jonathan', 3);
      const Team2bowler3 = new Bowler('Olif', 2);
      const Team2bowler4 = new Bowler('Arnel', 0);
      const Team2bowler5 = new Bowler('Sam', 1);
      const Team2bowler6 = new Bowler('Damus', 1);
      const Team2wicketkeeper =new WicketKeeper('Rashid',1);
      
      
      const team2 = new Team('Team 2');
      team2.addPlayer(Team2batsman1);
      team2.addPlayer(Team2batsman2);
      team2.addPlayer(Team2batsman3);
      team2.addPlayer(Team2batsman4);
      team2.addPlayer(Team2batsman5);
      team2.addPlayer(Team2bowler1);
      team2.addPlayer(Team2bowler2);
      team2.addPlayer(Team2bowler3);
      team2.addPlayer(Team2bowler4);
      team2.addPlayer(Team2bowler5);
      team2.addPlayer(Team2bowler6);

      team2.addPlayer(Team2wicketkeeper);
      
      // Calculate results
     
      const team2TotalRuns = team2.getTotalRuns();
      const team2TotalWickets = team2.getTotalWickets();
      const team2TotalStumpings= team2.getTotalStumpings();
      
     
      console.log(`Team 2 Total Runs: ${team2TotalRuns}`);
      console.log(`Team 2 Total Wickets: ${team2TotalWickets}`);
      console.log(`Team 2 Total Stumpings: ${team2TotalStumpings}`)
      
      // Determine the winner or tie
      if (team1TotalRuns > team2TotalRuns) {
        console.log(`Team 1 WON!`);
      } else if (team2TotalRuns > team1TotalRuns) {
        console.log(`Team 2 WON!`);
      } else {
        console.log(`The match ended in a tie.`);
      }
     
      //console.log(team1);
      //console.log(team2);
      
      const matchProperties=new Match('19 May','6 pm','UAE')
matchProperties.Time();
matchProperties.Date();

const stadiumProperties=new stadium('UAE','HARD',50000,500,'150m')
stadiumProperties.Location();
stadiumProperties.Spectators();
stadiumProperties.Pitch();
stadiumProperties.StadiumSize();
stadiumProperties.Lights();

