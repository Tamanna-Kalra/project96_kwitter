/// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDs0KHCr9L8hC0D3SrRKkbtlT1_P5cOMPw",
    authDomain: "kwitter-project-228a8.firebaseapp.com",
    databaseURL: "https://kwitter-project-228a8-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-228a8",
    storageBucket: "kwitter-project-228a8.appspot.com",
    messagingSenderId: "252526644054",
    appId: "1:252526644054:web:45be192e8c3042213be4f7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , user_name);
    window.location = "kwitter_room.html";
}