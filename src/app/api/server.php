<?php 

require_once __DIR__ . '/../../src/models/sensor.php';

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$sensorModel = new SensorModel();

if($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['action']) && $_GET['action'] == 'getData'){
    $latestData = $sensorModel->getLatestData();
    echo json_encode($latestData);
} else {
    echo json_encode(array('error'=> ''));
}

?>