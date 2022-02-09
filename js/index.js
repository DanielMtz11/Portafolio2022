const toggleButton = document.getElementById('button-menu');
const navWrapper = document.getElementById('nav');
const changeColor = document.getElementsByClassName("link-item");


toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close');
  navWrapper.classList.toggle('show'); 
})



navWrapper.addEventListener('click',e => {
    if(e.target.id === 'nav'){
        navWrapper.classList.remove('show');
        toggleButton.classList.remove('close');
    }
})


document.addEventListener("DOMContentLoaded", function() {
	//The first argument are the elements to which the plugin shall be initialized
	//The second argument has to be at least a empty object or a object with your desired options
	OverlayScrollbars(document.querySelectorAll(".row"),{
    className : "os-theme-dark deviant-scrollbars",
    // sizeAutoCapable : true,
    // paddingAbsolute : true,
    scrollbars : {
      clickScrolling : true
    }
  });
});



var rows = document.querySelectorAll('div.row');
for (i = 0; i < rows.length; ++i) {
 
  var options = {
    root: rows[i],
    rootMargin: '0px',
    threshold: [0, 0.25 ]
  }
  
  let observer = new IntersectionObserver( (entries, observer) => {
    console.log(entries)
    if(entries[0].intersectionRatio > 0.2){
      entries[0].target.closest('.row').classList.add('scrolled');
      console.log("add class scrolled")
    }else{
      console.log("remove class scrolled")
      entries[0].target.closest('.row').classList.remove('scrolled');
    }
  }, options);
  
  console.log(i)
  var cols = rows[i].querySelectorAll('.col')
  observer.observe(cols[cols.length - 1 ]);  
  
}


