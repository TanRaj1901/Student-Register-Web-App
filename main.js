var studentarray=[];
function submitfun() {
    var name1= document.getElementById("student_1").value;
    var name2= document.getElementById("student_2").value;
    var name3= document.getElementById("student_3").value;
    var name4= document.getElementById("student_4").value;
    var name5= document.getElementById("student_5").value;

    studentarray.push(name1);
    studentarray.push(name2);
    studentarray.push(name3);
    studentarray.push(name4);
    studentarray.push(name5);

    console.log(studentarray);
    document.getElementById("display_names").innerHTML=studentarray;
}

function sortfun() {
    studentarray.sort();
    console.log(studentarray);
    document.getElementById("display_names").innerHTML=studentarray;
}