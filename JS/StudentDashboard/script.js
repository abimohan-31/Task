
function displayData(event) {
    event.preventDefault();  //stop page to refresh


    // get values
    let fname = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let e_mail = document.getElementById("e-mail").value;
    let gender = document.querySelector("input[name = gender]:checked").value;
    let subjectsel = document.querySelectorAll("input[name = subjects]:checked").value;
    let subjects = Array.from(subjectsel).map(el => el.value);

    alert(subjects);                  
    console.log(subjects);

// display values
    document.getElementById("demo").innerHTML =
        `
      <h3>Students Lists:</h3>
      <p>First Name: ${fname}</p>
      <p>Age: ${age}</p>
      <p>E-mail: ${e_mail}</p>
      <p>Gender: ${gender}</p>
      <p>Subjects: ${subjects.length > 0 ? subjects.join(", ") : "None"}</p>
    `;
}









