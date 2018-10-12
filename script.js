var studentData;

fetch("students.json")
.then(function(response){
    return response.json();
})
.then(function(data){
    studentData = data.students;
    
    for(var i = 0; i < studentData.length; i++) {
        console.log(studentData[i].studentName);
        var adressCard = document.createElement("div");
        var getStudentName = document.createTextNode(studentData[i].studentName);
        adressCard.appendChild(getStudentName);
        document.body.appendChild(adressCard);
    }
});

function createListFromStudentData() {
    var adressCard = document.createElement("div");
    var getStudentName = document.createTextNode(studentData[i].studentName);
    adressCard.appendChild(getStudentName);
    document.body.appendChild(adressCard);


    var adressBook = document.createElement("div");
    adressBook.className = "adressBookClass";

     
};



