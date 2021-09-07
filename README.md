# Student Management
Created for teachers or professors as a way to keep track of their students information. Informations such as the student's id, full name, age, grade, average, and teacher can be updated. As students come and go, teachers/professors are able to add/remove students information. 

## Description
Technologies uesed in this project:
  -FrontEnd: HTML3, CSS5, ReactjS, Axios, and Bootstrap5
  -BackEnd: MySql, SQL, Spring boot, MVC


In the Home page, the user can instantly view their students information and search a student of their choice by searching that student's id. This was made possible by utilizing the CRUD operator GET (HTTP method) in Spring boot. I have implemented Bootstrap in the Home page's table which allows a hover feature when the user hovers their mouse over a students column.
![capstoneHome](https://user-images.githubusercontent.com/80718484/123991393-af0c3000-d998-11eb-8a97-b85072dcbcd1.PNG)



In the Update page the user is able to update any information of their choosing and once the update has been submitted it can be viewed in the Home page. This was made possible by utilizing the CRUD operator PUT (HTTP method) in Spring boot.
![capstoneUpdate](https://user-images.githubusercontent.com/80718484/123992327-87699780-d999-11eb-9b59-aec66aa48371.PNG)



In the Registration page, the user is able to add a new student by plugging in that student's information. Once the user checks that the student has been created, the user can go to the Home page to view all of their student's information. This was made possible by utilizing the CRUD operator POST (HTTP method) in Spring boot.
![capstoneRegister](https://user-images.githubusercontent.com/80718484/123991577-d8c55700-d998-11eb-89bd-2982bdbcf50e.PNG)



In the Remove page, the user is able to delete a student of their choosing by typing in that student's id. Once removed, the user will be greeted with a confirmation message that the student has been removed from their class. This was made possible by utilizing the CRUD operator DELETE (HTTP method) in Spring boot.
![capstoneRemove](https://user-images.githubusercontent.com/80718484/123991914-204be300-d999-11eb-991c-6f6c801611cd.PNG)



Bootstrap: In each of the pages input boxes and buttons layout has been organized by using bootstrap. 
Database: All of the students information are stored in a created database called student.

## Future Plans of Implementations
  1) Create a way to search a student by their full names.
  2) Create a delete button for each student so the user can delete the student automatically without having to search the students id number.
  3) If the user wants to update only one portion of the students information allow the previous information to be automatically grabed while updating on the inputed information.
