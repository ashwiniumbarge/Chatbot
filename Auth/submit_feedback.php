<?php
// Include database configuration
include('config.php'); // Make sure to use your actual config file path

session_start(); // Start session to get the user ID

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if user is logged in
    if (isset($_SESSION['user_id'])) {
        $user_id = $_SESSION['user_id']; // Get user ID from session
        $rating = $_POST['rating'];
        $feedback_text = $_POST['feedback'];

        // Prepare and execute the insert statement
        $stmt = $conn->prepare("INSERT INTO feedback (user_id, rating, feedback_text) VALUES (?, ?, ?)");
        $stmt->execute([$user_id, $rating, $feedback_text]);

        echo "Feedback submitted successfully!";
    } else {
        echo "Please log in to submit feedback.";
    }
}
?>
