// Validate the form before submission
function validateForm() {
    var studentName = document.getElementById('studentName').value;
    var studentId = document.getElementById('studentId').value;
    var courseSelect = document.getElementById('courseSelect').value;
    var seatsAvailable = document.getElementById('availableSeats').value;

    if (studentName === '' || studentId === '' || courseSelect === '') {
        document.getElementById('statusMessage').innerHTML = '<p class="error">All fields are required.</p>';
        return false;
    }

    if (parseInt(seatsAvailable) <= 0) {
        document.getElementById('statusMessage').innerHTML = '<p class="error">No seats available for this course.</p>';
        return false;
    }

    document.getElementById('statusMessage').innerHTML = '<p class="success">Registration successful!</p>';
    return true;
}

// Check course prerequisites and update seat availability
function checkPrerequisites() {
    var courseSelect = document.getElementById('courseSelect');
    var selectedCourse = courseSelect.options[courseSelect.selectedIndex];
    var availableSeats = selectedCourse.getAttribute('data-seats');
    var prerequisite = selectedCourse.getAttribute('data-prerequisite');
    var prerequisiteMessage = document.getElementById('prerequisiteMessage');
    
    document.getElementById('availableSeats').value = availableSeats;

    if (prerequisite !== 'none') {
        prerequisiteMessage.innerHTML = 'Prerequisite required: Course ' + prerequisite;
    } else {
        prerequisiteMessage.innerHTML = '';
    }
}
