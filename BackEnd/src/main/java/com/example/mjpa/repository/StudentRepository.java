package com.example.mjpa.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.mjpa.model.Student;

//jpa is an interface and it is not a class
//data type of id is int which is why we need integer written here
@Repository
public interface StudentRepository extends JpaRepository<Student,Integer>{
	//findBySname needs to be sname because my column name is sname in the mysql 
	List<Student> findBySname(String name);
}
