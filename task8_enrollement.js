
function enrollStudents(maxCapacity) {
    let currentEnrolled = 0;

    while (currentEnrolled < maxCapacity) {
        
        const name = prompt("Enter your name:");
        const email = prompt("Enter your email:");
        
        
        currentEnrolled++;

        
        console.log(`Enrollment successful for ${name} (${email}).`);

        
        if (currentEnrolled === maxCapacity) {
            console.log("Maximum capacity reached. Enrollment is closed.");
            break; 
        }
        
        
        const continueEnrollment = prompt("Do you want to enroll another student? (yes/no)");
        if (continueEnrollment.toLowerCase() !== "yes") {
            console.log("Enrollment process ended.");
            break; 
        }
    }
}


const maxCapacity = 50;
enrollStudents(maxCapacity);
