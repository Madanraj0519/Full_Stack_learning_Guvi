function submitForm() {
    // Get form values
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let address = document.getElementById('address').value;
    let pincode = document.getElementById('pincode').value;
    let gender = document.getElementById('gender').value;
    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;


    // Built the Table body
    var tableBody = document.getElementById('dataBody');
    var newRow = tableBody.insertRow();
    newRow.innerHTML = `
    <td class='text-center'>${firstName ? firstName : "<p class='text-danger'>None</p>"}</td>
    <td class='text-center'>${lastName ? lastName : "<p class='text-danger'>None</p>"}</td>
    <td class='text-center'>${address ? address : "<p class='text-danger'>None</p>"}</td>
    <td class='text-center'>${pincode ? pincode : "<p class='text-danger'>None</p>"}</td>
    <td class='text-center'>${gender !== "Gender" ? gender : "<p class='text-danger'>None</p>"}</td>
    <td class='text-center'>${state ? state : "<p class='text-danger'>None</p>"}</td>
    <td class='text-center'>${country ? country : "<p class='text-danger'>None</p>"}</td>
    <td class='text-center'><button type="button" id="button" class="btn btn-danger col-12" onclick="deleteRow(this)">Delete</button></td>
    `
    
    // Clear the form
    document.getElementById('first-Name').value = '';
    document.getElementById('last-Name').value ='';
    document.getElementById('address').value = '';
    document.getElementById('pincode').value = '';
    document.getElementById('gender').value = 'Gender';
    document.getElementById('state').value = '';
    document.getElementById('country').value = '';
}

function deleteRow(button) {
    // Delete the corresponding row;
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}