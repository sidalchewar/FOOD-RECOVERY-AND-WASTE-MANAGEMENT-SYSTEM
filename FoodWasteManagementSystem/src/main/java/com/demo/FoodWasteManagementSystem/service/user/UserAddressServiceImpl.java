package com.demo.FoodWasteManagementSystem.service.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.demo.FoodWasteManagementSystem.beans.user.Address;
import com.demo.FoodWasteManagementSystem.dao.user.UserAddressDao;

@Service
public class UserAddressServiceImpl implements UserAddressService{
	
	@Autowired
	UserAddressDao dao;

	@Override
	public Address AddUserAddress(Address address,List<Address> userAddress) {
		// TODO Auto-generated method stub
		System.out.println("address service Impl : "+address);
		if(userAddress==null)
		{
			address.setDefaultaddress(true);
			return dao.save(address);
		}
		return dao.save(address);
	}
	
	@Override
	public List<Address> GetUserAddress(int uid) {
		// TODO Auto-generated method stub
		return dao.findByUserUid(uid);
	}

	@Override
	public Address UpdateUserAddress(Address address) {
		
		return dao.save(address);
		
	}

	@Override
	public void RemoveUserAddress(int aid) {
		
		dao.deleteById(aid);
	}

	@Override
	public void MakeDeafultUserAddress(int aid,Address changeDafaultAddress) {
		//Making default address
		
		Address address=dao.getById(aid);
		address.setDefaultaddress(true);
		dao.save(address);
		
		//Removing from default address
		if(changeDafaultAddress!=null)
		{
			changeDafaultAddress.setDefaultaddress(false);
			dao.save(changeDafaultAddress);
		}
		
	}

	


}
