<?php 

function getLatestData() {
$servername = "localhost";
$user = "root";
$dbname = "arduinoReading";
$password = "";

$conn = new mysqli($servername, $user, $password, $dbname);

if($conn-> connect_error) {
    die("Connection Failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM `tagreading` ORDER BY timestamp DESC LIMIT 1";
$result = $conn->query($sql);

if($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "uid: " . $row["NFCReading"];
    }
} else {
    echo "0 results";
}

$conn->close();

}
?>