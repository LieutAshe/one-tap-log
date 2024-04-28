const mysql = require ('mysql');

const otldatabase = mysql.createConnection({
    host: 'localhost',
    database: 'arduinoReading',
    user: 'root'
});

otldatabase.connect((err) => {
    if (err) {
        console.log(err);
        return;
    } console.log("Connected to Database");
});

const query = "SELECT * FROM `tagreading` ORDER BY timestamp DESC LIMIT 1"

export function sqlSensorReader() {
    return new Promise((resolve, reject) => {
        otldatabase.query(query, (err, result) => {
            if(err) {
                console.log("Failed at creating query:", err)
                reject(err)
            } else {
                resolve(result);
            }
        });
    });
}