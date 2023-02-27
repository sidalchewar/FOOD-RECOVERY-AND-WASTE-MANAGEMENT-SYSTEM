package com.demo.FoodWasteManagementSystem.beans.ngo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class NGO_Address {
	@Id
	private int ngo_aid;
	private String street;
	private String city;
	private String district;
	private String state;
	private int pin;
	public NGO_Address() {
		super();
		// TODO Auto-generated constructor stub
	}
	public NGO_Address(int ngo_AId, String street, String city, String district, String state, int pin) {
		super();
		this.ngo_aid = ngo_AId;
		this.street = street;
		this.city = city;
		this.district = district;
		this.state = state;
		this.pin = pin;
	}
	public int getNgo_AId() {
		return ngo_aid;
	}
	public void setNgo_AId(int ngo_AId) {
		this.ngo_aid = ngo_AId;
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
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
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
		return "NGO_Address [ngo_AId=" + ngo_aid + ", street=" + street + ", city=" + city + ", district=" + district
				+ ", state=" + state + ", pin=" + pin + "]";
	}
	
	
	
	
	

}
