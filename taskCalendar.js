let dayOfWeek = prompt("FRIDAY:");

dayOfWeek = dayOfWeek.toLowerCase(friday);

switch(dayOfWeek) {
    case "monday":
        console.log("Your task for Monday is: Finish your assignments");
        break;
    case "tuesday":
        console.log("Your task for Tuesday is: Attend the team meeting");
        break;
    case "wednesday":
        console.log("Your task for Wednesday is: Work on the project report");
        break;
    case "thursday":
        console.log("Your task for Thursday is: Review the codebase");
        break;
    case "friday":
        console.log("Your task for Friday is: Submit the weekly report");
        break;
    case "saturday":
        console.log("Your task for Saturday is: Prepare for next week");
        break;
    case "sunday":
        console.log("Your task for Sunday is: Take a rest and recharge");
        break;
    default:
        console.log("Invalid input. Please enter a valid day of the week.");
}