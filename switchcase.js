let score = 85

switch(Math.floor(score/10)){
    case 10:
    case 9:
        console.log("Grade A");
        break;

    case 8:
        console.log("Grade B");
        break;

    case 7:
        console.log("Grade C");
        break;

    case 6:
        console.log("Grade D");
        break;

    case 5:
        console.log("Grade F")
        break;
        
    default:
        console.log("Grade not calculated")
        break;

}

switch(true){
    
    case (score>90):
        console.log("Grade A");
        break;

    case ((score<90)&&(score>=80)):
        console.log("Grade B");
        break;

    case ((score<80)&&(score>=70)):
        console.log("Grade C");
        break;

    case ((score<70)&&(score>=60)):
        console.log("Grade D");
        break;

    case (score<60):
        console.log("Grade F")
        break;
        
    default:
        console.log("Grade not calculated")
        break;

}