package com.demo.FoodWasteManagementSystem.controller.ngo;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.FoodWasteManagementSystem.beans.ngo.NGO;
import com.demo.FoodWasteManagementSystem.beans.ngo.NGO_Address;
import com.demo.FoodWasteManagementSystem.beans.ngo.NGO_Role;
import com.demo.FoodWasteManagementSystem.service.ngo.NGOService;



@CrossOrigin
@RestController
@RequestMapping("/ngo")
public class NGO_Controller {
	
	@Autowired
	NGOService ngoservice;
	
	@GetMapping("/displayngobyrole")
	public ResponseEntity<List<NGO>> displayAll(){
		//List<NGO> ngolist=ngoservice.getAllNgos();
		List<NGO> ngolist=new ArrayList<>();
		NGO_Address address1=new NGO_Address(1,"Paud Mulshi Road","Bavdhan","Pune","Maharashtra",411021);
		
		NGO ngo1=new NGO("user1","pass1","RESQ Charitable Trust","+91 9892999111","team@resqct.org","11 AM","5 PM",address1,role1);
		ngolist.add(ngo1);
		return ResponseEntity.ok(ngolist);
		
	}
	
	@PostMapping("/register")
	public ResponseEntity<String> addNGO(@RequestBody NGO ngo){
		 ngoservice.addNewNgo(ngo);
	return new ResponseEntity<String>("Data added successfully", HttpStatus.OK);
		
		
	}
	
	

}
