//FRONT_END_COURSES

var coursesfront = [
  {
    Name: "HTML+CSS",
    Duration: "2 Months",
    Material: "Videos/Audios and Notes",
    Assignments: "3 Quiz",
    Perks: "Certificate",
  },
  {
    Name: "HTML+CSS+JS",
    Duration: "3-4 Months",
    Material: "Videos/Audios and Notes",
    Assignments: "3 Quiz",
    Perks: "Certificate",
  },
  {
    Name: "HTML+CSS+AJAX",
    Duration: "2-3 Months",
    Material: "Videos/Audios and Notes",
    Assignments: "3 Quiz",
    Perks: "Certificate",
  },
];

var col = [];
for (var i = 0; i < coursesfront.length; i++) {
  for (var key in coursesfront[i]) {
    if (col.indexOf(key) === -1) {
      col.push(key);
    }
  }
}

var table = document.createElement("table");

var tr = table.insertRow(-1);

for (var i = 0; i < col.length; i++) {
  var th = document.createElement("th");
  th.innerHTML = col[i];
  tr.appendChild(th);
}

for (var i = 0; i < coursesfront.length; i++) {
  tr = table.insertRow(-1);

  for (var j = 0; j < col.length; j++) {
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = coursesfront[i][col[j]];
  }
}

var divContainer = document.getElementById("showData-front");
divContainer.innerHTML = "";
divContainer.appendChild(table);

//FRONT_END_COURSES

var coursesback = [
  {
    Name: "PHP",
    Duration: "2-3 Months",
    Material: "Videos/Audios and Notes",
    Assignments: "3 Quiz",
    Perks: "Certificate",
  },
  {
    Name: "Ruby",
    Duration: "2 Months",
    Material: "Videos/Audios and Notes",
    Assignments: "3 Quiz",
    Perks: "Certificate",
  },
  {
    Name: "Django",
    Duration: "2 Months",
    Material: "Videos/Audios and Notes",
    Assignments: "3 Quiz",
    Perks: "Certificate",
  },
];

var col = [];
for (var i = 0; i < coursesback.length; i++) {
  for (var key in coursesback[i]) {
    if (col.indexOf(key) === -1) {
      col.push(key);
    }
  }
}

var table = document.createElement("table");

var tr = table.insertRow(-1);

for (var i = 0; i < col.length; i++) {
  var th = document.createElement("th");
  th.innerHTML = col[i];
  tr.appendChild(th);
}

for (var i = 0; i < coursesback.length; i++) {
  tr = table.insertRow(-1);

  for (var j = 0; j < col.length; j++) {
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = coursesback[i][col[j]];
  }
}

var divContainer = document.getElementById("showData-back");
divContainer.innerHTML = "";
divContainer.appendChild(table);
