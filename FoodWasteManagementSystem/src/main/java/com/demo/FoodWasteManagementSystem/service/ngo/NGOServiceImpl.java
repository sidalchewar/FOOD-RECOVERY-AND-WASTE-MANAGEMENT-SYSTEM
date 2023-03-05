package com.demo.FoodWasteManagementSystem.service.ngo;

import java.util.ArrayList;
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
	public void addNewNgo(NGO ngo) {
		ngo_dao.save(ngo);
		
	}


	public NGO getNgo(String un, String pass) {
		List<NGO> ngolist=new ArrayList<>();
		 ngolist=ngo_dao.findAll();
		 
		NGO ngo=null;
		for(NGO n:ngolist) {
			System.out.println(n);
			if(n.getNgo_username().equals(un) && n.getNgo_password().equals(pass)) {
				ngo=n;
			}
		}
		return ngo;
	}

	
	

}
