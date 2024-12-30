<?php
include 'config.php';

$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$email = $data->email;
$password = password_hash($data->password, PASSWORD_DEFAULT); // Hash the password

try {
    // Prepare and execute SQL statement
    $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)");
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);
    $stmt->execute();

    // Return success response
    echo json_encode(['success' => true]);
} catch (PDOException $e) {
    // Return error response
    echo json_encode(['success' => false, 'message' => 'Email already exists.']);
}
?>
