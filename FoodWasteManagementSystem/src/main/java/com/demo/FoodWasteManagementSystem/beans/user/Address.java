package com.demo.FoodWasteManagementSystem.beans.user;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "User_Address")
public class Address{
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private int aid;
   private String fullname;
   private long mobileno;
   private String apartment;
   private String street;
   private String city;
   private String state;
   private String country;
   private int pincode;
   private boolean defaultaddress;
   

@ManyToOne
   private User user;
   
public Address() {
	super();
}

public Address(int aid, String fullname, long mobileno, String apartment, String street, String city, String state,
		int pincode, boolean defaultaddress, User user) {
	super();
	this.aid = aid;
	this.fullname = fullname;
	this.mobileno = mobileno;
	this.apartment = apartment;
	this.street = street;
	this.city = city;
	this.state = state;
	this.pincode = pincode;
	this.user = user;
	this.defaultaddress = defaultaddress;
}

public int getAid() {
	return aid;
}

public void setAid(int aid) {
	this.aid = aid;
}

public String getFullname() {
	return fullname;
}

public void setFullname(String fullname) {
	this.fullname = fullname;
}

public long getMobileno() {
	return mobileno;
}

public void setMobileno(long mobileno) {
	this.mobileno = mobileno;
}

public String getApartment() {
	return apartment;
}

public void setApartment(String apartment) {
	this.apartment = apartment;
}

public String getStreet() {
	return street;
}

public void setStreet(String street) {
	this.street = street;
}

public String getCity() {
	return city;
}

public void setCity(String city) {
	this.city = city;
}

public String getState() {
	return state;
}

public void setState(String state) {
	this.state = state;
}

public int getPincode() {
	return pincode;
}

public void setPincode(int pincode) {
	this.pincode = pincode;
}

public User getUser() {
	return user;
}

public void setUser(User user) {
	this.user = user;
}

public boolean isDefaultaddress() {
	return defaultaddress;
}

public void setDefaultaddress(boolean defaultaddress) {
	this.defaultaddress = defaultaddress;
}

@Override
public String toString() {
	return "Address [aid=" + aid + ", fullname=" + fullname + ", mobileno=" + mobileno + ", apartment=" + apartment
			+ ", street=" + street + ", city=" + city + ", state=" + state + ", pincode=" + pincode + "default value =+"+defaultaddress+", user=" + user
			+ "]";
}



}

