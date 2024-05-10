// import { sqlSensorReader } from  '@/app/lib/database'
export default async function Page() {
  // var data = await sqlSensorReader();
  // const item = data[0];

  // async function listenForNewEntry() {
  //   const newData = await sqlSensorReader();
  //   if (JSON.stringify(data) !== JSON.stringify(newData)) {
  //     console.log("New data is available");
  //     data = newData;
  //     //reload or rerender
  //   }
  //   console.log(JSON.stringify(data), JSON.stringify(newData));
  // }

  // setInterval(listenForNewEntry, 5000);

    return (
        <div className="leftContent">
          <div className="standby">
            <div className="welcomeMessage">
              <p>Welcome!</p>
            </div>
            <div className="scanMessage">
              <div className="circleContainer">
                <p id="info" className="hidden">
                  changes
                </p>
              </div>
            </div>
          </div>
        </div>
    );
}