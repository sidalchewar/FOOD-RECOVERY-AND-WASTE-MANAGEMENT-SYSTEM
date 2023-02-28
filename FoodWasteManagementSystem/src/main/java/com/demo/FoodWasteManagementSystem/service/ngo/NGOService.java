package com.demo.FoodWasteManagementSystem.service.ngo;

import java.util.List;

import com.demo.FoodWasteManagementSystem.beans.ngo.NGO;

public interface NGOService {

	List<NGO> getAllNgos();

	

	void addNewNgo(NGO ngo);

}
