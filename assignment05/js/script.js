let objaddemp = document.getElementById("addemp");
objaddemp.addEventListener("click", (e) => {
  e.preventDefault();
 let objid = document.getElementById("empid").value;
  let objname = document.getElementById("name").value;
  let objext = document.getElementById("ext").value;
  let objmail = document.getElementById("mail").value;
  let objdept = document.getElementById("dept").value;
  console.log(`ID: ${objid}`);
  console.log(`Name: ${objname}`);
  console.log(`Extension: ${objext}`);
  console.log(`Email: ${objmail}`);
  console.log(`department: ${objdept}`);
window.alert( `Thank you  ${objname}`);
});
