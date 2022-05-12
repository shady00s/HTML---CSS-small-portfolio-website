function hireMeContainer(  containerName ){
    
    if( containerName.style.opacity == 0 ){
        containerName.style.opacity = 1;
        containerName.style.visibility = "visible";
        containerName.style.transition = "opacity 0.4s ease-in";
    }
    else{
        containerName.style.opacity = 0;
        containerName.style.visibility = "hidden";
        containerName.style.transition = "opacity 0.4s ease-in";
    }
    
   
}


document.getElementById('bt1').addEventListener('click', function (e) {

    const newContainer = document.querySelector('.info-container');
    const oldContainer = document.querySelector('.first-section');
    if( oldContainer.style.opacity == 1   ){
       
        oldContainer.style.cssText=`
         height: 0;
         opacity: 0 ; 
         visibility: hidden;
         transition:height .3s, opacity .4s ease-in
         
         `;
         newContainer.style.cssText=`
         display:flex;
        height: 100vh;
        opacity: 1 ; 
        visibility:visible;
        transition:height .3s, opacity .4s ease-in
        `;
        
    }
    else{
        newContainer.style.cssText=`
         display:none;
         height: 0;
         opacity: 0 ; 
         visibility: hidden;
         transition:"height .3s, opacity .4s ease-in"
         
         `;
        oldContainer.style.cssText=`
        height: 100vh;
         opacity: 1 ; 
         visibility: visible;
         transition:"height .3s, opacity .4s ease-in"
         
         `;

       


       
    }

});






