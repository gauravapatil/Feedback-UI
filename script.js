const rating = document.querySelectorAll(".rating");
let btn=document.getElementById("btn");
let container=document.getElementById("main-container");
let review=""


rating.forEach((ele)=>{
    ele.addEventListener("click",(event)=>{
    removeActive();
    review=event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
    })

})
btn.addEventListener("click",()=>{
    if(review!==""){
        container.innerHTML= `<h1 style="padding-top: 10px;">Thank You!</h1>
        <br>
        <br>
        <h2 style="padding-bottom: 25px;" >Feedback: ${review}</h2>
        <h3 style="padding-bottom: 25px;">We'll use your feedback to improve our customer support.</h3>
        `;
    }
    
})
function removeActive() {
    rating.forEach((ele) => {
      ele.classList.remove("active");
    });
  }