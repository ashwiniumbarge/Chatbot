<?php
include 'config.php';

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;

// Prepare and execute SQL statement
$stmt = $conn->prepare("SELECT * FROM users WHERE email = :email");
$stmt->bindParam(':email', $email);
$stmt->execute();

$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($password, $user['password'])) {
    // Start session and store user info
    session_start();
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['user_name'] = $user['name'];
    
    // Return success response
    echo json_encode(['success' => true]);
} else {
    // Return error response
    echo json_encode(['success' => false, 'message' => 'Invalid email or password.']);
}
?>
