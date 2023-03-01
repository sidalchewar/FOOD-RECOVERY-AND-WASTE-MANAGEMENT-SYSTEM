package com.demo.FoodWasteManagementSystem.service.user;

import java.util.List;

import com.demo.FoodWasteManagementSystem.beans.user.User;

public interface UserService {
	public void AddUser(User u);

	public List<User> findAllUser();
	public User getUser(String password,String email);


}
