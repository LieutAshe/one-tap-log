export default function Page() {
    return (
        <div className="leftContent">
          <div className="standby">
            <div className="welcomeMessage">
              <p>Welcome!</p>
            </div>
            <div className="scanMessage">
              <div className="circleContainer">
                <p>Please scan your tag</p>
              </div>
            </div>
          </div>
        </div>
    );
}