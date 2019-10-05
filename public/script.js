
const getNumberResponse = () => {
    let number=document.getElementById('search');
   

  const url = `http://numbersapi.com/${number.value}/math?json`;



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
};



const closeIt=()=>{
  document.getElementById('cards').style.visibility='hidden';
}