// Form Kelola Ruangan Show
document.getElementById("show-card").addEventListener("click", function(e){
  event.preventDefault();
  document.getElementById("Form-KelolaRuangan").style.display = "block";
});

function Remove(){
document.getElementById("Form-KelolaRuangan").style.display = "none";
} 
// crud Daftar Ruangan
var data = [];
  
  function submitForm() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var category = document.getElementById("category").value;
    var facilities = [];
    let Lokasi = document.getElementById("Lokasi").value;
    var checkboxes = document.getElementsByName("facility[]");
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        facilities.push(checkboxes[i].value);
      }
    }
    data.push({ name: name, Lokasi: Lokasi , facilities: facilities, category: category });
    renderTable();
  }

  function renderTable() {
    var table = document.getElementById("myTable");
    // Clear existing rows
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
    // Add new rows
    for (var i = 0; i < data.length; i++) {
      var newRow = table.insertRow(-1);
      var nameCell = newRow.insertCell(0);
      var lokasiCell = newRow.insertCell(1);
      var facilitiesCell = newRow.insertCell(2);
      var categoryCell = newRow.insertCell(3);
      var actionCell = newRow.insertCell(4);
      nameCell.innerHTML = data[i].name;
      lokasiCell.innerHTML = data[i].Lokasi;
      facilitiesCell.innerHTML = data[i].facilities.join(", ");
      categoryCell.innerHTML = data[i].category;
      actionCell.innerHTML = `<a href="" class="btn btn-sm mr-2 btn-info float-left">Detail</a><a href="" class="btn btn-sm mr-2 btn-info float-left"onclick="editData(${i})"><i class="fas fa-user-edit"></i></a><a href="" class="btn btn-sm mr-2 btn-info float-left" onclick="deleteData(${i})"><i class="fas fa-trash"></i></a>`;
    }
  }
  function deleteData(index) {
    event.preventDefault();
    var table = document.getElementById("myTable");
    table.deleteRow(index+1); // +1 karena header tabel ada di baris ke-1
    data.splice(index, 1);
  }

  function editData(index) {
    event.preventDefault();
    var name = prompt("Enter new name:");
    var lokasi = prompt("Enter new lokasi:");
    var category = prompt("Enter new category:");
    var facilities = prompt("Enter new facilities (separated by comma):").split(",");
    data[index].name = name;
    data[index].Lokasi = lokasi;
    data[index].facilities = facilities;
    data[index].category = category;
    renderTable();
  }

// crud Daftar peminjam

let dataPeminjam = [];
function submit() {
    event.preventDefault();
    var Name = document.getElementById("Name").value;
    var Contact = document.getElementById("Contact").value;
    var Tel = document.getElementById("HP").value;
    var Email = document.getElementById("Email").value;
    var category = document.getElementById("category").value;
    dataPeminjam.push({ Name: Name, Contact: Contact , Tel: Tel, Email: Email, category: category });
    rENDERTable();
  }

  function rENDERTable() {
    var table = document.getElementById("Table");
    // Clear existing rows
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
    // Add new rows
    for (let i = 0; i < dataPeminjam.length; i++) {
      var newRow = table.insertRow(-1);
      var NOCell = newRow.insertCell(0);
      var NameCell = newRow.insertCell(1);
      var ContactCell = newRow.insertCell(2);
      var HpCell = newRow.insertCell(3);
      var EmailyCell = newRow.insertCell(4);
      var categoryCell = newRow.insertCell(5);
      var actionCell = newRow.insertCell(6);
      NOCell.innerHTML = i+2;
      NameCell.innerHTML = dataPeminjam[i].Name;
      ContactCell.innerHTML = dataPeminjam[i].Contact;
      HpCell.innerHTML = dataPeminjam[i].Tel;
      EmailyCell.innerHTML = dataPeminjam[i].Email;
      categoryCell.innerHTML = dataPeminjam[i].category;
      actionCell.innerHTML = `<a href="" class="btn btn-sm mr-2 btn-info float-left">Detail</a><a href="" class="btn btn-sm mr-2 btn-info float-left"onclick="editDataPeminjam(${i})"><i class="fas fa-user-edit"></i></a><a href="" class="btn btn-sm mr-2 btn-info float-left" onclick="deleteDataPeminjam(${i})"><i class="fas fa-trash"></i></a>`;
    }
  }
  function deleteDataPeminjam(index) {
    event.preventDefault();
    var table = document.getElementById("Table");
    table.deleteRow(index+1); // +1 karena header tabel ada di baris ke-1
    dataPeminjam.splice(index, 1);
  }

  function editDataPeminjam(index) {
    event.preventDefault();
    var name = prompt("Enter new name:");
    var Contact = prompt("Enter new Contact:");
    var HP = prompt("Enter new Number HP:");
    var Email = prompt("Enter new Email:");
    var category = prompt("Enter new category:");
    dataPeminjam[index].Name = name;
    dataPeminjam[index].Contact = Contact;
    dataPeminjam[index].Tel = HP;
    dataPeminjam[index].Email = Email;
    dataPeminjam[index].category = category;
    rENDERTable();
  }

  // Api Get
var dataBooking = JSON.parse(localStorage.getItem("dataBooking"));
let tableCustomer= document.getElementById("Table");
while(tableCustomer.rows.length > 1){
  tableCustomer.deleteRow(1);
}
for(let i = 0; i < dataBooking.length ; i++){
var newRow = tableCustomer.insertRow(1);
var NoCell = newRow.insertCell(0);
var NameBookCell = newRow.insertCell(1);
var contactBookCell = newRow.insertCell(2);
var hpBookCell = newRow.insertCell(3);
var emailBookCell = newRow.insertCell(4);
var categoryBookCell = newRow.insertCell(5);
var actionBookCell = newRow.insertCell(6);
NoCell.innerHTML = i+2;
NameBookCell.innerHTML = dataBooking[i].Name;
contactBookCell.innerHTML = dataBooking[i].Person;
hpBookCell.innerHTML = dataBooking[i].Phone;
emailBookCell.innerHTML = dataBooking[i].Email;
categoryBookCell.innerHTML = dataBooking[i].Room;
actionBookCell.innerHTML = `<a href="" class="btn btn-sm mr-2 btn-info float-left">Detail</a><a href="" class="btn btn-sm mr-2 btn-info float-left"onclick="editBook(${i})"><i class="fas fa-user-edit"></i></a><a href="" class="btn btn-sm mr-2 btn-info float-left" onclick="DeleteBook(${i})"><i class="fas fa-trash"></i></a>`;
}

function DeleteBook(index) {
// Remove data from Local Storage
localStorage.clear("dataBooking")
alert("Data deleted from Local Storage!");
// Remove row from table
let tableCustomer  = document.getElementById("Table");
tableCustomer.deleteRow(index+1); // +1 karena header tabel ada di baris ke-1
dataBooking.splice(index, 1);
}

function editBook(index) {
var Name = prompt("Enter new name:");
var Person = prompt("Enter new person:");
var Phone = prompt("Enter new Phone:");
var Email = prompt("Enter new Email:");
var Room = prompt("Enter new Ruangan:");
dataBooking.Name = Name;
dataBooking.Person = Person;
dataBooking.Phone = Phone;
dataBooking.Email = Email;
dataBooking.Room = Room;
// Update data in Local Storage
localStorage.setItem("dataBooking", JSON.stringify(data));
alert("Data updated in Local Storage!");
// Update row in table
NameBookCell.innerHTML = dataBooking.Name;
contactBookCell.innerHTML = dataBooking.Person;
hpBookCell.innerHTML = dataBooking.Phone;
emailBookCell.innerHTML = dataBooking.Email;
categoryBookCell.innerHTML = dataBooking.Room;
}
