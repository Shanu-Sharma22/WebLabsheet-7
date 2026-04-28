document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("studentForm");
  const tableBody = document.getElementById("tableBody");
  const recordCount = document.getElementById("recordCount");
  let count = 0;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Collecting all fields
    const student = {
      name: document.getElementById("name").value,
      dob: document.getElementById("dob").value,
      gender: document.getElementById("gender").value,
      rollNo: document.getElementById("rollNo").value,
      course: document.getElementById("course").value,
      sem: document.getElementById("semester").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
    };

    addRecord(student);
    form.reset();
    updateCounter(1);
  });

  function addRecord(data) {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td><strong>${data.rollNo}</strong></td>
            <td>${data.name}</td>
            <td>${data.dob}</td>
            <td>${data.gender}</td>
            <td>${data.course}</td>
            <td>${data.sem}</td>
            <td>${data.email}</td>
            <td>${data.phone}</td>
            <td>${data.address}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;

    row.querySelector(".delete-btn").addEventListener("click", () => {
      if (confirm("Permanently delete this student record?")) {
        row.remove();
        updateCounter(-1);
      }
    });

    tableBody.appendChild(row);
  }

  function updateCounter(val) {
    count += val;
    recordCount.textContent = `Total Records: ${count}`;
  }
});
