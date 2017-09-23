
//change the text of main-text
//var element=document.getElementById('main-text');
//element.innerHTML="new value";
//move image
//var img=document.getElementById('image');
var button=document.getElementById('counter');

button.onclick=function(){
    //create request
    var request=new XMLHttpRequest();
    
    //capture the response
    request.onreadystateChange=function(){
        if(request.readyState==XMLHttpRequet.DONE){
            //take action
            if(request.status==200){
                counter=counter+1;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('http://waseem1997.imad.hasura-app.io/counter',true);
    request.send(null);
};    