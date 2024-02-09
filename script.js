const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

let savedChecked = localStorage.getItem("checked");
if (savedChecked != null && savedChecked != ""){
for(let i of savedChecked.split(",")){
  try{
  document.getElementById(i).checked = true; 
  }
  catch(err){
    console.log(err);
  }
}
}
submit.onclick = () => {
  let score = 0;
  let checked = [];
  for(let i = 100; i--; i>0){
    let questionNum = i + 1;
    if (document.getElementById(questionNum.toString()).checked == true){
      score ++;
      checked.push(questionNum);
    }
  }
  document.getElementById("survey").style.display = "none";
  document.getElementById("results").style.display = "block";
  score = 100 - score;
  document.getElementById("score").innerText = score;
  localStorage.setItem("checked", checked)
  let description = "... are you okay?!"
  if (score >= 10){
    description = "You're a corrupted mind, no innocence remains in you."
  }
  if (score >= 30){
    description = "You lack innocence to a great degree, yet some of it still shines in you."
  }
  if (score >= 50){
    description = "Your mind is already unpure, yet you keep it relatively under control."
  }
  if (score >= 75){
    description = "You're relatively innocent, though already starting to become corrupted."
  }
  if (score >= 90){
    description = "You're an innocent soul, one that must be protected at all costs."
  }
  document.getElementById('description').innerText = description;
}
reset.onclick = () => {
  for(let i = 100; i--; i>0){
    let questionNum = i + 1;
    document.getElementById(questionNum.toString()).checked = false;
  }
  localStorage.setItem("checked", [])
}
