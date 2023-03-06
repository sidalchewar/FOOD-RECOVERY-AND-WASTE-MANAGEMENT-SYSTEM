package com.demo.FoodWasteManagementSystem.service.fooddetailsform;

import java.util.List;

import com.demo.FoodWasteManagementSystem.beans.fooddetailsform.FoodDetails;

public interface FoodDetailsService {

	List<FoodDetails> ShowAll();

	String addnewFoodDetails(FoodDetails fooddetails);

	FoodDetails getreqlist(int id);

	FoodDetails getreqlistconfirm(int id);

	FoodDetails getconlist(int user_id);

	FoodDetails DisplayReqListToNgo(int id);

	FoodDetails DisplayConListToNgo(int id);

	FoodDetails GetreqlistconfirmBySsi(int id);

	FoodDetails DisplayReqListToSsi(int id);

	FoodDetails DisplayConListToSsi(int id);

	

}
