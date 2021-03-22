function calc() {
    var a = document.getElementById("first").value;
    var b = document.getElementById("last").value;
    var opr = document.getElementsByClassName("operator");
    var result = document.getElementById("result");
        var res = 0;
        var test= 0;
        if(opr[0].checked) {
            a=parseInt(a);
            b=parseInt(b);
            res = a + b;
            test++;
        }
        else if (opr[1].checked) {
            res = a - b;
            test++;
        }
         else if (opr[2].checked) {
            res = a * b;
            test++;
        }
         else if (opr[3].checked) {
            if(a==b && b==0 || a!=b && b==0){
                 alert('Not possible');
                 test++;
                 res='NaN';
            }
            else{
                res = a / b;
                test++;
            }
        }    
        if(test==0){
         alert('please select the operator');
        }
    result.value = res;
}