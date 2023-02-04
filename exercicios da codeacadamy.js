
//exercicios feitos na codeacadamy:

let raceNumber = Math.floor(Math.random() * 1000);

let registrationEarly = true;

let runnerAge = 18;

if (runnerAge > 18 && registrationEarly) {
  raceNumber += 1000;
  console.log(`Your race is at 9:30 AM and your number is ${raceNumber}`);
} else if (runnerAge > 18 && !registrationEarly) {
  raceNumber += 1000;
  console.log(`Your race is at 11:00 AM and your number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Your race is at 12:30 PM and your number is ${raceNumber}`);
} else {
  console.log("Please go see the registration desk!");
}
