function fetchlatestLog() {
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost/phpmyadmin?action=getData';
  
    xhr.onreadystatechange = function () {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          if (data) {
            document.getElementById("info")?.classList.remove("hidden");
            console.log(data);
            return;
          } else {
            console.log("nothing to see");
            document.getElementById("info")?.classList.add("hidden");
          }
        }
      }
    }

    xhr.open("GET", url, true);
    xhr.send();
  }


fetchlatestLog();

// setInterval(fetchlatestLog, 3000);
