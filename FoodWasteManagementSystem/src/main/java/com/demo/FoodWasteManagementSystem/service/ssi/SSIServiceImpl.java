package com.demo.FoodWasteManagementSystem.service.ssi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.FoodWasteManagementSystem.beans.ssi.SSI;
import com.demo.FoodWasteManagementSystem.dao.ssi.SSIDao;




@Service
public class SSIServiceImpl implements SSIService{
	
	@Autowired
	SSIDao ssi_dao;

	@Override
	public List<SSI> getAllssi() {
		// TODO Auto-generated method stub
		return ssi_dao.findAll();
	}

	@Override
	public void addNewSSI(SSI ssi) {
		
		ssi_dao.save(ssi);
	}

	@Override
	public SSI login(String username, String password) {
		
		List<SSI> slist=ssi_dao.findAll();
		SSI ss=null;
		for(SSI ssi:slist)
		{
			if(ssi.getSsi_username().equals(username) && ssi.getSsi_password().equals(password))
			{
				ss=ssi;
			}
		}
		return ss;
	}
	
	
	
	

}
