
//function to fetch the response from the NumbersAPI


const getNumberResponse = () => {
    let number=document.getElementById('search');


    //checking if the entered value is a number or not 
    if(!isNaN(number.value)){

  const url = `http://numbersapi.com/${number.value}/math?json`;


      //fetching the data from the API

  fetch(url)
    .then(data => data.json())
    .then(data => {
      let fact=data.text.toString();
      let title=document.getElementById('title');
      let results=document.getElementById('results');
      title.innerHTML=number.value.toString();
      results.innerHTML=fact;
      number.value="";
      document.getElementById('cards').style.visibility='visible';
    })
    .catch(err => console.log(err));
  } //handling if the entered value is not a number
  else {
    window.alert('Please enter a valid number .');
    closeIt();
    number.value="";
  }
};


//after clicking the button the card will be closed // visibility will be hidden 
const closeIt=()=>{
  document.getElementById('cards').style.visibility='hidden';
}