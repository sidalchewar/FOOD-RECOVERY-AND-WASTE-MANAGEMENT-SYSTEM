package com.demo.FoodWasteManagementSystem.service.fooddetailsform;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.FoodWasteManagementSystem.beans.fooddetailsform.FoodDetails;
import com.demo.FoodWasteManagementSystem.Dao.fooddetailsform.FoodDetailsDao;

@Service
public class FoodDetailsServiceImpl implements FoodDetailsService {

	@Autowired
	FoodDetailsDao dao;


	@Override
	public List<FoodDetails> ShowAll() {

		return dao.findAll();
	}


	@Override
	public String addnewFoodDetails(FoodDetails fooddetails) {
		dao.save(fooddetails);
		return "Form Submitted SUCCESSFULLY";

	}


	//This is for user request list when user click on request button 
	public FoodDetails getreqlist(int id) {

		List<FoodDetails> flist=dao.findAll();

		FoodDetails fooddetails=null;
		for(FoodDetails fd:flist) {
			if(fd.getuser_id()==id && fd.getStatus().equals("pending")) {
				fooddetails=fd;
			}

		}
		return fooddetails;
	}
	//This is for user to check the confirm list which he send to respective ngo.
	@Override
	public FoodDetails getconlist(int id) {

		List<FoodDetails> flist=dao.findAll();

		FoodDetails fooddetails=null;
		for(FoodDetails fd:flist) {
			if(fd.getuser_id()==id && fd.getStatus().equals("confirmed")) {
				fooddetails=fd;
			}

		}
		return fooddetails;
	}



	//==========================================================================================================

	//this is for ngo to accept the request and set the status
	@Override
	public FoodDetails getreqlistconfirm(int id) {

		List<FoodDetails> fdlist=dao.findAll();
		FoodDetails fooddetails=null;
		for(FoodDetails fdd:fdlist) {
			if(fdd.getNgo_id()==id) {

				fdd.setStatus("confirmed");
				dao.save(fdd);
				fooddetails=fdd;
			}
		}
		return fooddetails;
	}



	@Override
	public FoodDetails DisplayReqListToNgo(int id) {
		List<FoodDetails> flist=dao.findAll();

		FoodDetails fooddetails=null;
		for(FoodDetails fd:flist) {
			if(fd.getNgo_id()==id && fd.getStatus().equals("pending")) {
				fooddetails=fd;
			}

		}
		return fooddetails;
	}


	@Override
	public FoodDetails DisplayConListToNgo(int id) {
		List<FoodDetails> flist=dao.findAll();

		FoodDetails fooddetails=null;
		for(FoodDetails fd:flist) {
			if(fd.getNgo_id()==id && fd.getStatus().equals("confirmed")) {
				fooddetails=fd;
			}

		}
		return fooddetails;
	}


	//===================================================================================================



	//this functions for ssi to confirm list and check  the status wheather pending or confirmed
	@Override
	public FoodDetails GetreqlistconfirmBySsi(int id) {
		List<FoodDetails> fdlist=dao.findAll();
		FoodDetails fooddetails=null;
		for(FoodDetails fdd:fdlist) {
			if(fdd.getSsi_id()==id) {

				fdd.setStatus("confirmed");
				dao.save(fdd);
				fooddetails=fdd;
			}
		}
		return fooddetails;
	}



	@Override
	public FoodDetails DisplayReqListToSsi(int id) {

		List<FoodDetails> flist=dao.findAll();

		FoodDetails fooddetails=null;
		for(FoodDetails fd:flist) {
			if(fd.getSsi_id()==id && fd.getStatus().equals("pending")) {
				fooddetails=fd;
			}

		}
		return fooddetails;
	}



	@Override
	public FoodDetails DisplayConListToSsi(int id) {
		List<FoodDetails> flist=dao.findAll();

		FoodDetails fooddetails=null;
		for(FoodDetails fd:flist) {
			if(fd.getSsi_id()==id && fd.getStatus().equals("confirmed")) {
				fooddetails=fd;
			}

		}
		return fooddetails;
	}


}





