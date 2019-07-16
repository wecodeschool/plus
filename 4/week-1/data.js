let cities = ["Lisbon", "Porto", "Braga", "Coimbra", "Lagos"];

cities[2] = "Evora";

cities.forEach(function(city) {
  if (city === "Lisbon") {
    alert("I really love " + city);
  } else {
    alert("I like " + city);
  }
});
