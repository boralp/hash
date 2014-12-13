var current_hash='';
var hash=function(a){
  /* replace your back button with this <a href="javascript:hash('back');">Back</a>*/
  if(a==='back'){
    /* It replicates the browser back button */
    window.history.back();
    /* Triggering hash function to re-call page */
    hash();
  }
  else{
    /* Replace hash-tag from our hash */
    current_hash=location.hash.replace('#','');
    /* this is current hash logged into consele */
    console.log(current_hash);
  }
};
/* Detect the initial hash when dom loaded */
window.addEventListener('load',function(){
  hash();
});
/* Detect the changes in hash */
window.onhashchange=function(){
  hash();
};
