package com.example.mjpa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mjpa.exception.ResourceNotFoundException;
import com.example.mjpa.model.Student;
import com.example.mjpa.repository.StudentRepository;

import java.util.List;

//@CrossOrigin(origins="http://localhost:3000")
@CrossOrigin//(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
	
public class StudentController
{//dependency injection. we must autowire our jpa object
	@Autowired
	private StudentRepository studentRepo;

	//show all the records of students through getmapping
	//on postname i can write GET http://localhost:8081/api/allstudents to show everything in my array
	@GetMapping("/allstudent")
	public List<Student> getAllStudents()
	{
		return studentRepo.findAll();
	}
	
	//on postman i can write POST http://localhost:8081/api/addstudent
	@PostMapping("/addstudent")
	public Student newStudent(@RequestBody Student s)
	{
		return studentRepo.save(s);
	}
	//to run this function you write in what you want to add then click send in postman and then go do getmapping of /allstudents
	
	//on postman i can write in GET http://localhost:8081/api/student/1
	@GetMapping("/studentSearch/{sid}")
	public ResponseEntity<Student> getStudentById(@PathVariable int sid)
	{
		Student s= studentRepo.findById(sid).orElseThrow(() -> new ResourceNotFoundException("Student not found"));
		return ResponseEntity.ok(s);
	}
	
	@GetMapping("/student/{name}")
	public List<Student> getStudentByName(@PathVariable String name)
	{
		List<Student> students=studentRepo.findBySname(name);
		if(students.isEmpty())
		{
			System.out.println(new ResourceNotFoundException("Student with the name " + name + " is not found")); 
			
		}
			return studentRepo.findBySname(name);
	} 
	
	@PutMapping("/student/{sid}")
	public ResponseEntity<Student> updateStudent(@PathVariable int sid, @RequestBody Student student)
	{
		Student s=studentRepo.findById(sid).orElseThrow(() -> new ResourceNotFoundException("Student not found"));
		s.setSname(student.getSname());
		s.setSgrade(student.getSgrade());
		s.setSage(student.getSage());
		s.setSaverage(student.getSaverage());
		s.setSteacher(student.getSteacher());
		Student updatedStudents=studentRepo.save(s);
		return ResponseEntity.ok(updatedStudents);
	}
	
	@DeleteMapping("/student/{sid}")
	public String deleteStudent(@PathVariable int sid)
	{
		studentRepo.findById(sid).orElseThrow(() -> new ResourceNotFoundException("Student not found"));
		studentRepo.deleteById(sid);
		return "The student with id: " + sid + " is removed from the Student database.";
	}
}

