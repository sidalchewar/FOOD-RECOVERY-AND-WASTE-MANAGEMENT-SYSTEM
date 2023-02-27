package com.demo.FoodWasteManagementSystem.beans.ngo;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class NGO_Role {
	@Id
	private int ngo_role_Id;
	private String ngo_role_name;
	public NGO_Role() {
		super();
		// TODO Auto-generated constructor stub
	}
	public NGO_Role(int ngo_role_Id, String ngo_role_name) {
		super();
		this.ngo_role_Id = ngo_role_Id;
		this.ngo_role_name = ngo_role_name;
	}
	public int getNgo_role_Id() {
		return ngo_role_Id;
	}
	public void setNgo_role_Id(int ngo_role_Id) {
		this.ngo_role_Id = ngo_role_Id;
	}
	public String getNgo_role_name() {
		return ngo_role_name;
	}
	public void setNgo_role_name(String ngo_role_name) {
		this.ngo_role_name = ngo_role_name;
	}
	@Override
	public String toString() {
		return "NGO_Role [ngo_role_Id=" + ngo_role_Id + ", ngo_role_name=" + ngo_role_name + "]";
	}
	
	
	
	
	

}
