package com.demo.FoodWasteManagementSystem.controller.user;

import java.util.ArrayList;
import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.FoodWasteManagementSystem.beans.user.Address;
import com.demo.FoodWasteManagementSystem.beans.user.User;
import com.demo.FoodWasteManagementSystem.service.user.UserService;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController{	
	
	@Autowired
	UserService service;
	
	@PostMapping("/register")
	public void registerUser(@RequestBody User user)
	{
		service.AddUser(user);
		
	}
		
	@GetMapping("/getuser")
	public List<User> getAllUser()
	{
		
		List<User> ulist= service.findAllUser();
		return ulist;
	}
	
	@GetMapping("/login/{email}/{password}")
	public User ValidateUser(@PathVariable String password,@PathVariable String email) {
//		User user=service.getUser(password,email);
		List<Address> ad=new ArrayList<Address>();
		ad.add(new Address("asdf","asdfasd","asd","aff",57));
		User user=new User("sid","alchewar","234235","abc","abc",ad,1);
		user.setUid(10);
		if(user.getEmail().equals(email) && user.getPassword().equals(password))
		{
			return user;
		}
		return null;
	}
}
