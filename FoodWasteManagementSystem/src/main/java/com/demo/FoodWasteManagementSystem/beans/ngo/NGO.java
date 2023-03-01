package com.demo.FoodWasteManagementSystem.beans.ngo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;




@Entity
@Table(name="NGO")
public class NGO {
	@Id
	@GeneratedValue
	private int ngo_id;
	private String ngo_username;
	private String ngo_password;
	private String ngo_name;
	private String ngo_phone;
	private String ngo_email;
	private String ngo_open_time;
	private String ngo_close_time;
	
	@OneToOne
	private NGO_Address ngo_Address;
	
	@OneToOne
	private NGO_Role ngo_Role;

	public NGO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public NGO(int ngo_id, String ngo_username, String ngo_password, String ngo_name, String ngo_phone,
			String ngo_email, String ngo_open_time, String ngo_close_time, NGO_Address ngo_Address, NGO_Role ngo_Role) {
		super();
		this.ngo_id = ngo_id;
		this.ngo_username = ngo_username;
		this.ngo_password = ngo_password;
		this.ngo_name = ngo_name;
		this.ngo_phone = ngo_phone;
		this.ngo_email = ngo_email;
		this.ngo_open_time = ngo_open_time;
		this.ngo_close_time = ngo_close_time;
		this.ngo_Address = ngo_Address;
		this.ngo_Role = ngo_Role;
	}

	public int getNgo_id() {
		return ngo_id;
	}

	public void setNgo_id(int ngo_id) {
		this.ngo_id = ngo_id;
	}

	public String getNgo_username() {
		return ngo_username;
	}

	public void setNgo_username(String ngo_username) {
		this.ngo_username = ngo_username;
	}

	public String getNgo_password() {
		return ngo_password;
	}

	public void setNgo_password(String ngo_password) {
		this.ngo_password = ngo_password;
	}

	public String getNgo_name() {
		return ngo_name;
	}

	public void setNgo_name(String ngo_name) {
		this.ngo_name = ngo_name;
	}

	public String getNgo_phone() {
		return ngo_phone;
	}

	public void setNgo_phone(String ngo_phone) {
		this.ngo_phone = ngo_phone;
	}

	public String getNgo_email() {
		return ngo_email;
	}

	public void setNgo_email(String ngo_email) {
		this.ngo_email = ngo_email;
	}

	public String getNgo_open_time() {
		return ngo_open_time;
	}

	public void setNgo_open_time(String ngo_open_time) {
		this.ngo_open_time = ngo_open_time;
	}

	public String getNgo_close_time() {
		return ngo_close_time;
	}

	public void setNgo_close_time(String ngo_close_time) {
		this.ngo_close_time = ngo_close_time;
	}

	public NGO_Address getNgo_Address() {
		return ngo_Address;
	}

	public void setNgo_Address(NGO_Address ngo_Address) {
		this.ngo_Address = ngo_Address;
	}

	public NGO_Role getNgo_Role() {
		return ngo_Role;
	}

	public void setNgo_Role(NGO_Role ngo_Role) {
		this.ngo_Role = ngo_Role;
	}

	@Override
	public String toString() {
		return "NGO [ngo_id=" + ngo_id + ", ngo_username=" + ngo_username + ", ngo_password=" + ngo_password
				+ ", ngo_name=" + ngo_name + ", ngo_phone=" + ngo_phone + ", ngo_email=" + ngo_email
				+ ", ngo_open_time=" + ngo_open_time + ", ngo_close_time=" + ngo_close_time + ", ngo_Address="
				+ ngo_Address + ", ngo_Role=" + ngo_Role + "]";
	}
	
	
	
	
	
	
	
	
	

}
