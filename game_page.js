function send()
{
    number1 = document.getElementById("num_1").value
    number2 = document.getElementById("num_2").value
    actual_answer = parseInt(number1) * parseInt(number2)

    qusetion_number = "<h4>"+number1+" X "+ number2 + "</h4>"
    input_box="<br>Answer : <input type='text' id='input_check_box'>"
    chk_btn="<br><br><button class='btn btn-info' onclick='check()>Check</button>"
    row = qusetion_number+input_box+chk_btn
    document.getElementById("output").innerHTML=row
    document.getElementById("number1").innerHTML= " "
    document.getElementById("number2").innerHTML=" " 
}