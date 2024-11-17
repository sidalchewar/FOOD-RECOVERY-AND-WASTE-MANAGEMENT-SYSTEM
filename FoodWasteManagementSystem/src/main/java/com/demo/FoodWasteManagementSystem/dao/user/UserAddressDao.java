package com.demo.FoodWasteManagementSystem.dao.user;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.FoodWasteManagementSystem.beans.user.Address;

@Repository
public interface UserAddressDao extends JpaRepository<Address, Integer> {
	
	//Alternative method: find addresses by user ID (foreign key)
		public List<Address> findByUserUid(int uid);
	
		
	


}
