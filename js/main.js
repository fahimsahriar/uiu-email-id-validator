
// required function for part 1
var min1 = 03;
var max1 = 21;
function inRange1(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}
var min2 = 1;
var max2 = 3;
function inRange2(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}
var min3= 1;
var max3 = 999;
function inRange3(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}
//end


function notValid(){
    document.getElementById("result").innerHTML = 'Not Valid';
}
document.getElementById('search').addEventListener('input', function(n){
    let a = document.getElementById("mySelect").value;
    var userName = document.getElementById("search").value;
    // logical part of part 1
    if(a=='apple1'){
        let a1 = userName.length; 
        let a2 = userName.slice(0, 3);
        let a3 = userName.slice(3, 5);
        let a4 = userName.slice(5, 6);
        let a5 = userName.slice(6, 9);
        if(a1==9){
            if(a2=='011'){
                if(inRange1(a3,min1,max1)){
                    if(inRange2(a4,min2,max2)){
                        if(inRange3(a5,min3,max3)){
                            document.getElementById("result").innerHTML = 'Valid';
                        }
                        else{
                            notValid(); 
                        }
                    }
                    else{
                        notValid(); 
                    }
                }
                else{
                    notValid(); 
                }
            }
            else{
                notValid();
            }
        }
        else{
            notValid();
        }
    }
    // logical part of part 2
    else if(a=='apple2'){
        let a1 = userName.length; 
        let a2 = userName.slice(a1-15, a1);//extension
        let a3 = userName.slice((a1-16), (a1-15));//@
        let a4 = userName.slice((a1-19), (a1-16));//236 id no
        let a5 = userName.slice((a1-20), (a1-19)); //1 trimester no
        let a6 = userName.slice((a1-22), (a1-20));//17 year
        let a7 = userName.slice(0, (a1-22));

        if(a2=='bseee.uiu.ac.bd'||a2=='bscse.uiu.ac.bd'){
            if(a3=='@'){
                if(inRange1(a6,min1,max1)){
                    if(inRange2(a5,min2,max2)){
                        if(inRange3(a4,min3,max3)){
                            for(var i = 0; i<a7.length;i++){
                                if(a7.charCodeAt(i)>96&&a7.charCodeAt(i)>96){
                                    document.getElementById("result").innerHTML = 'Valid';
                                }
                                else{
                                    notValid();
                                    break;
                                }
                            }
                        }
                        else{
                            notValid(); 
                        }
                    }
                    else{
                        notValid(); 
                    }
                }
                else{
                    notValid();
                }
            }
            else{
                notValid();
            }
        }
        else{
            notValid();
        }
        
    }
    // logical part of part 3
    else if(a=='apple3'){
        var flag3=0;
        if(userName.length>7){
            if(userName[(userName.length)-1]=='P'){
                for(var i = 0;i<userName.length; i++){
                    if(userName.charCodeAt(i)>96 && userName.charCodeAt(i)<123){
                        for(var j = 0;j<userName.length; j++){
                            if(userName.charCodeAt(j)>47 && userName.charCodeAt(j)<58){
                                flag3++;
                                break;
                            }
                        }
                        flag3++;
                        break;
                    }
                }
                for(var k = 0;k<userName.length; k++){
                    if(userName.charCodeAt(k)==64||userName.charCodeAt(k)==35||userName.charCodeAt(k)==37||userName.charCodeAt(k)==38){
                        flag3++;
                        break;
                    }
                    else{

                    }
                }
                for(var k = 0;k<userName.length; k++){
                    if(!(userName.charCodeAt(k)>96 && userName.charCodeAt(k)<123)&&!(userName.charCodeAt(k)>64 && userName.charCodeAt(k)<91)&&!(userName.charCodeAt(k)>47 && userName.charCodeAt(k)<58)){
                        if(!(userName.charCodeAt(k)==64)&&!(userName.charCodeAt(k)==35)&&!(userName.charCodeAt(k)==37)&&!(userName.charCodeAt(k)==38)){
                            flag3--;
                            console.log(userName[k]);
                            break;
                        }
                    }
                }
            }
        }
        if(flag3==3){
            document.getElementById("result").innerHTML = "valid";
        }
        else{
            notValid();
        }
    }
    // logical part of part 4
    else if(a=='apple4'){
        var flag4 = 0;
        var dotCount = 0;
        for(var i = 0;i<userName.length;i++){
            if((userName.charCodeAt(i)>47 && userName.charCodeAt(i)<58)||userName.charCodeAt(i)==45||userName.charCodeAt(i)==43||userName.charCodeAt(i)==46){
            }
            else{
                flag4++;
                break;
            }
        }
        if(userName.charCodeAt(0)==45||userName.charCodeAt(0)==43){
            for(var j=1;j<userName.length;j++){
                if(userName[j]=='+'||userName[j]=='-'){
                    flag4++;
                }
            }
        }
        for(var k=0;k<userName.length;k++){
            if(userName[userName.length-1]=='.'){
                flag4++;
                break;
            }
            else{
                
            }
        }
        for(var l=0;l<userName.length;l++){
            console.log(userName[l]);
            if(userName[l]=='.'){
                dotCount++;
            }
        }
        if(flag4>0){
            notValid();
        }
        else{
            if(dotCount>1){
                notValid();
            }
            else{
                document.getElementById("result").innerHTML = 'valid';
            }
        }
    }
    else if(a=="apple5"){
        var flag = 0;
        let name = 0;
        var flag5 = 0;
        var flag6 = 0;
        var flag7;
        if(userName.charCodeAt(0)>96 && userName.charCodeAt(0)<123){
            for(var i = 0;i<userName.length;i++){
                if(userName.charCodeAt(i)>47 && userName.charCodeAt(i)<58){
                    flag++;
                }
            }
        }
        else{
            notValid();
        }
        for(var j=0;j<userName.length;j++){
            if(userName.charCodeAt(j)>96 && userName.charCodeAt(j)<123){
                name++;
            }
            else{
                break;
            }
        }
        if(flag==1){
            //document.getElementById("result").innerHTML = 'valid';
            var b;
            for(j=0;j<name;j++){
                b = userName.length-name;
                b = b+j;
                if(b>1){
                    if(userName[j]==userName[b]){   
                        flag5++;
                    }
                }
            }
            if(flag5==name){
                console.log("valid");
                for(i=0;i<userName.length;i++){
                    if(userName[i]=='U'){
                        flag7 = i;
                        // console.log();
                        break;
                    }
                }
                for(var k=flag7+1;k<=flag7+2;k++){
                    if(userName[k]=='I'||userName[k]=='U'){
                        console.log(userName[k]);
                        flag6++;
                    }
                }
                if(flag6==2){
                    document.getElementById("result").innerHTML = 'valid';
                }
                else{
                    notValid();
                }
            }
            else{
                notValid();
            }
        }
        else{
            notValid();
        }
    }
});


