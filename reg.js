let submit=document.querySelector(".submit");

submit.addEventListener('click',()=>{

    var output=document.querySelector(".output");
    console.log(output);
    


   //storing the data in objects getting from form
    const data={
        name: document.getElementById("name").value,
        college: document.getElementById("college").value,
        email: document.getElementById("email").value,
        pin: document.getElementById("pin").value,
        skills: document.getElementById("skills").value
    };
    console.log(data);

    //Card Template
    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`
      <div class="collegeContainer">${data.college}</div>
      <div class="NameContainer">${data.name}</div>
      <div class="emailContainer">${data.email}</div>
     <div class="pinContainer">${data.pin}</div>
      <div class="SkillContainer">${data.skills}</div>
    `
    console.log(newlist);
    //adding the card one after the other
    output.appendChild(newlist);
   
    //clearing the input fields after submission
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });

})