/*
Write a voting program as described below for small-scale meeting use. (8p)
The program asks for the number of candidates.
Then the program asks for the names of the candidates: Name for candidate 1
Store the candidates names and initial vote count in objects like this:
[
    {
        name: 'ellie',
        votes: 0,
    },
    {
        name: 'frank',
        votes: 0,
    },
    {
        name: 'pamela',
        votes: 0,                                // This format works (not json)
    },
]
The program asks for the number of voters.
The program asks each voter in turn who they will vote for. Voter should enter candidate name.
If the voter enters an empty value instead of the voting number, it will be interpreted as an empty vote.
The program announces the name of the winner and the results by printing it to the console:
The winner is pamela with 3 votes.
results:
pamela: 3 votes
frank: 1 votes
ellie: 1 votes
Some help:
// You need to compare votes so console log a and b to see how to get the correct property.
someArray.sort((a, b) => {
   console.log(a, b);
   return b - a;
});
 */

// candidates
 //move this in func()

// voters
//turn the first letter into a capital letter

function voting() {

  const candidate_nums = parseInt(prompt("Number of candidates: "))
  let candidates = []
  for (let i = 1; i <= candidate_nums; i++) {
    const name = prompt("Name for candidate " + i + ": ")
    candidates.push({name: name, votes: 0})
  }
  //const candidates =
  const voter_nums = parseInt(prompt("Number of voters: "))

  alert("If no valid name is given it is considered an empty vote!")
  //const voter_turn = prompt("Voter [number] votes for (give a name): ")

  for (let i = 1; i <= voter_nums; i++) {
    const vote_time = prompt("Voter " + i + " votes for:")

    for (let candidate of candidates) {
      if (candidate.name.toLowerCase() === vote_time?.toLowerCase()) {
        candidate.votes++;
      }
    }
  }
  candidates.sort((a, b) => b.votes - a.votes)

  console.log("The winner is: " + candidates[0].name + " Votes: " + candidates[0].votes)
  console.log("All resulrs:")
    for (let candidate of candidates) { //of loop
      console.log(candidate.name + ": " + candidate.votes + " votes")

  }
}

window.onload = voting
//print results to the console
// first winner then a full list with votes
//(possibly also print results to html so easier to see)


