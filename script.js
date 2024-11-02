function calculateAttendance() {
    const studentName = document.getElementById("studentName").value;
    const totalDays = parseFloat(document.getElementById("totalDays").value);
    const daysAttended = parseFloat(document.getElementById("daysAttended").value);

    // Calculate current attendance percentage
    const currentAttendancePercentage = (daysAttended / totalDays) * 100;

    // Store the attendance percentage in a variable
    const attendancePercentage = currentAttendancePercentage.toFixed(2);

    // Redirect to result page with query parameters
    const resultPage = `result.html?name=${encodeURIComponent(studentName)}&attendance=${attendancePercentage}&totalDays=${totalDays}&daysAttended=${daysAttended}`;
    window.location.href = resultPage;
}
