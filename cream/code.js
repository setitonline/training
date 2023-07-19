function solve(){
    //alert("weldone!");
    let p = price.value;
    let q = qty.value;
    let c = crm.value;
    let ans = c + " is sold at " + p + ", you buy " + q;
    result.innerHTML = ans;
    let cp = p * q;
    cost_price.value = "N " + cp;
}

function try1(){
    alert("Stop clicking me!");
}