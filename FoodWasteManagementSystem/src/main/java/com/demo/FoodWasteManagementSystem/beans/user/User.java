package com.demo.FoodWasteManagementSystem.beans.user;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class User {
	@Id
	@GeneratedValue
	private int uid;
	private String fname;
	private String lname;
	private String phone;
	private String email;
	private String password;
	@OneToMany
	private List<Address> address;

	private int role;

	public User() {
		super();
	}

	public User(String fname,String lname,String phone,String email,String pass,List<Address> ad,int r) {
		super();
		
		this.fname=fname;
		this.lname=lname;
		this.phone=phone;
		this.email=email;
		this.password=pass;
		this.address=ad;
		this.role=r;
	}



	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Address> getAddress() {
		return address;
	}

	public void setAddress(List<Address> address) {
		this.address = address;
	}

	public int getRole() {
		return role;
	}

	public void setRole(int role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [uid=" + uid + ", fname=" + fname + ", lname=" + lname + ", phone=" + phone + ", email=" + email
				+ ", password=" + password + ", address=" + address + ", role=" + role + "]";
	}



}
