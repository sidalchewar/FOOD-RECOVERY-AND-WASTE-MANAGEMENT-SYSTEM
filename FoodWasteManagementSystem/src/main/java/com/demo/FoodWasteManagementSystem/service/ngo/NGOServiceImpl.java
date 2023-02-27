package com.demo.FoodWasteManagementSystem.service.ngo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.FoodWasteManagementSystem.beans.ngo.NGO;
import com.demo.FoodWasteManagementSystem.dao.ngo.NGODao;



@Service
public class NGOServiceImpl implements NGOService{
	
	@Autowired
	NGODao ngo_dao;
	
	@Override
	public List<NGO> getAllNgos() {
		
		return ngo_dao.findAll();
	}

	@Override
	public int addNewNgo() {
		// TODO Auto-generated method stub
		return 0;
	}

	
	

}
