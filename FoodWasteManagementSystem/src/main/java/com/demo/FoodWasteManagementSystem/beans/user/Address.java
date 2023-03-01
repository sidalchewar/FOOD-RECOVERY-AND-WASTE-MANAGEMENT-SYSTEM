package com.demo.FoodWasteManagementSystem.beans.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
@Entity
public class Address
{  @Id
   @GeneratedValue
   private int aid;
   private String street;
   private String city;
   private String dist;
   private String state;
   private int pin;
public Address() {
	super();
}
public Address(String street, String city, String dist, String state, int pin) {
	super();
	
	this.street = street;
	this.city = city;
	this.dist = dist;
	this.state = state;
	this.pin = pin;
}
public int getAid() {
	return aid;
}
public void setAid(int aid) {
	this.aid = aid;
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
public String getDist() {
	return dist;
}
public void setDist(String dist) {
	this.dist = dist;
}
public String getState() {
	return state;
}
public void setState(String state) {
	this.state = state;
}
public int getPin() {
	return pin;
}
public void setPin(int pin) {
	this.pin = pin;
}
@Override
public String toString() {
	return "Adress [aid=" + aid + ", street=" + street + ", city=" + city + ", dist=" + dist + ", state=" + state
			+ ", pin=" + pin + "]";
}
   
   
}
