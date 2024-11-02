function calculateAttendanceStatus(totalDays, daysAttended) {
    const requiredAttendance = 0.75;
    const currentAttendance = (daysAttended / totalDays) * 100;
    const resultElement = document.getElementById("result");

    resultElement.innerText = `Your current attendance percentage is: ${currentAttendance.toFixed(2)}%.\n`;

    if (currentAttendance < 75) {
        // Calculate additional days needed to reach 75%
        const additionalDaysNeeded = Math.ceil(
            (requiredAttendance * totalDays - daysAttended) / (1 - requiredAttendance)
        );
        resultElement.innerHTML += `Your attendance is below 75%. You need to attend at least ${additionalDaysNeeded} more days to reach 75% attendance.`;
    } else {
        // Calculate days the student can miss while maintaining 75%
        const daysCanMiss = Math.floor(
            (daysAttended - requiredAttendance * totalDays) / requiredAttendance
        );
        resultElement.innerHTML += `Your attendance is above 75%. You can afford to miss ${daysCanMiss} more days and still maintain 75% attendance.`;
    }
}
