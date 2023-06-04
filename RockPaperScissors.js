const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput ==='bomb') {
      return userInput;
    } else {
      console.log('Error!')
    }
    }
    /* Test call to see if code works 
    console.log(getUserChoice('paper'))
    console.log(getUserChoice('fork'))
    */
    function getComputerChoice () {
     const randomNumber = Math.floor(Math.random() * 3)
      switch (randomNumber) {
        case 0:
        return 'rock';
        break;
        case 1:
        return 'paper'
        break;
        case 2:
        return 'scissors'
        break;
      }
    }
    //console.log(getComputerChoice()); //should return rock, paper or scissors
    
    const determineWinner = (userChoice, computerChoice) => {
      if (userChoice === 'bomb'){
        return 'You used a cheat code! You win!'
      }
      if (userChoice === computerChoice) {
        return 'This game is a tie!'
      }
      if (userChoice === 'rock') {
        if(computerChoice === 'paper') {
          return 'Sorry, computer won!';
        } else {
          return 'Congratulations, you won!'
        }
      }
      if (userChoice === 'paper') {
        if(computerChoice === 'scissors') {
          return 'Sorry, computer won!';
        } else {
          return 'Congratulations, you won!'
        }
      }
      if (userChoice === 'scissors') {
        if(computerChoice === 'rock') {
          return 'Sorry, computer won!';
        } else {
          return 'Congratulations, you won!'
        }
      }
    };
    const playGame = () => {
      const userChoice = getUserChoice('bomb');
      const computerChoice = getComputerChoice();
      console.log('You threw: ' + userChoice);
      console.log('The computer threw:' + computerChoice);
      console.log(determineWinner(userChoice, computerChoice));
    };
    playGame()