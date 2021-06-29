package com.example.mjpa.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//entity means this is my javabean class. this is how hibernate knows that this must be stored in a database
@Entity
//table means that table name students will be created in the database
@Table(name="students")
public class Student {
	@Id
	//this is what helps with auto incrementing on postman meaning I dont need to write "sid":5 it will just automatically write the sid for me
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int sid;
	private String sname;
	private int sgrade;
	private int sage;
	private double saverage;
	private String steacher;
	
	public Student(int sid, String sname, int sgrade, int sage, double saverage, String steacher)
	{
		super();
		this.sid=sid;
		this.sname=sname;
		this.sgrade=sgrade;
		this.sage=sage;
		this.saverage=saverage;
		this.steacher=steacher;
		
	}
	//default constructor helps hibernate with mapping
	public Student()
	{
		
	}



	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public int getSgrade() {
		return sgrade;
	}
	public void setSgrade(int sgrade) {
		this.sgrade = sgrade;
	}
	public int getSage() {
		return sage;
	}
	public void setSage(int sage) {
		this.sage = sage;
	}
	public double getSaverage() {
		return saverage;
	}
	public void setSaverage(double saverage) {
		this.saverage = saverage;
	}
	public String getSteacher() {
		return steacher;
	}
	public void setSteacher(String steacher) {
		this.steacher = steacher;
	}
	@Override
	public String toString() {
		return "Student [sid=" + sid + ", sname=" + sname + ", sgrade=" + sgrade + ", sage=" + sage + ", saverage="
				+ saverage + ", steacher=" + steacher + "]";
	}
	
	

}
