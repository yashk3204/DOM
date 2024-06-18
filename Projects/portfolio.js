var aboutmebtn = document.getElementById("aboutmebtn");
var myprojectsbtn = document.getElementById("myprojectsbtn");
var blogbtn = document.getElementById("blogbtn");
var contactbtn = document.getElementById("contactbtn");
var aboutMe = document.getElementById("aboutme");
var myProjects = document.getElementById("myprojects");
var Blog = document.getElementById("blog");
var Contact = document.getElementById("contact");
var title = document.getElementById("title");
var content = document.getElementById("content");
var titleError = document.getElementById("titleError");
var contentError = document.getElementById("contentError");

function aboutme() {
    aboutmebtn.style.textDecoration = "underline";
    myprojectsbtn.style.textDecoration = "none";
    blogbtn.style.textDecoration = "none";
    contactbtn.style.textDecoration = "none";
    aboutMe.style.display = "block";
    myProjects.style.display = "none";
    Blog.style.display = "none";
    Contact.style.display = "none";
}

function myprojects() {
    aboutmebtn.style.textDecoration = "none";
    myprojectsbtn.style.textDecoration = "underline";
    blogbtn.style.textDecoration = "none";
    contactbtn.style.textDecoration = "none";
    aboutMe.style.display = "none";
    myProjects.style.display = "block";
    Blog.style.display = "none";
    Contact.style.display = "none";
}

function blog() {
    aboutmebtn.style.textDecoration = "none";
    myprojectsbtn.style.textDecoration = "none";
    blogbtn.style.textDecoration = "underline";
    contactbtn.style.textDecoration = "none";
    aboutMe.style.display = "none";
    myProjects.style.display = "none";
    Blog.style.display = "block";
    Contact.style.display = "none";
}

function contact() {
    aboutmebtn.style.textDecoration = "none";
    myprojectsbtn.style.textDecoration = "none";
    blogbtn.style.textDecoration = "none";
    contactbtn.style.textDecoration = "underline";
    aboutMe.style.display = "none";
    myProjects.style.display = "none";
    Blog.style.display = "none";
    Contact.style.display = "block";
}

function validateForm() {
    let flag=1;
    if(title.value = "") {
        titleError.innerHTML = "Please enter a title.";
        flag=0;
    }
    else{
        titleError.innerHTML = "";
        if(content.innerHTML = "") {
            contentError.innerHTML = "Please enter some content.";
            flag=0;
        }
        else{
            contentError.innerHTML = "";
            flag=1;
        }
    }
    if(flag) {
        return true;
    } else{
        return false;
    }
}