// Your web app's Firebase configuration
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
 
 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");
 function addRoom(){
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
       });
       localStorage.setItem("room_name" , room_name);
       window.location = "kwitter_page.html";
 }
 function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location.replace("kwitter.html");
 }
 function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name" , name);
       window.location = "kwitter_page.html";
 }