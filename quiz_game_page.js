function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    Q =  "<h3>" + number1 + " X " + number2 + "</h3>";
    A =  "	<br> ans: <input type='text' id='input_check_box'>	";
    check_button = "<br> <button class='btn btn-success' onclick='check()'>check</button>";
    row = Q + A + check_button; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
