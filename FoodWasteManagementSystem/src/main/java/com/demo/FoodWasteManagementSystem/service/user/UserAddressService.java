package com.demo.FoodWasteManagementSystem.service.user;


import java.util.List;
import com.demo.FoodWasteManagementSystem.beans.user.Address;

public interface UserAddressService {
	
	public Address AddUserAddress(Address address,List<Address> userAddress);
	public List<Address> GetUserAddress(int uid);
	public Address UpdateUserAddress(Address address);
	public void MakeDeafultUserAddress(int aid,Address changeDafaultAddress);
	public void RemoveUserAddress(int aid);
	

}
