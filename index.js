function copy() {
    
    var copyText = 'jantanahennard@gmail.com'
  
    navigator.clipboard.writeText(copyText);
  }
function enter(){
    let Changetxt=document.getElementById('btncpy')
    Changetxt.innerHTML="  Copy mail?"
}
 function leave(){
    let Changetxt=document.getElementById('btncpy')
    Changetxt.innerHTML="Get in Touch"
 }  


 