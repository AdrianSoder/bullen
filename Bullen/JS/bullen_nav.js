function navigationbar() {
    var x = document.getElementById("bullennav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }