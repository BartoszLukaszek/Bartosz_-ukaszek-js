function calculate() {
    var field1 = parseFloat(document.getElementById("field1").value);
    var field2 = parseFloat(document.getElementById("field2").value);
    var field3 = parseFloat(document.getElementById("field3").value);
    var field4 = parseFloat(document.getElementById("field4").value);
  
    var sum = field1 + field2 + field3 + field4;
    var avg = sum / 4;
    var min = Math.min(field1, field2, field3, field4);
    var max = Math.max(field1, field2, field3, field4);
  
    document.getElementById("result").innerHTML = "Suma: " + sum + "<br>" + 
                                                  "Średnia: " + avg + "<br>" + 
                                                  "Min: " + min + "<br>" + 
                                                  "Max: " + max;
  }
  