package com.demo.FoodWasteManagementSystem.service.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.FoodWasteManagementSystem.beans.user.User;
import com.demo.FoodWasteManagementSystem.dao.user.UserDao;

@Service
public class UserServiceImpl implements UserService
{
	@Autowired
	UserDao dao;
	
	@Override
   public void AddUser(User u) {
	   
	   dao.save(u);
	   
   }

	@Override
	public List<User> findAllUser() {
		
		return dao.findAll();
	}
	
	@Override
	public User getUser(String password,String email) {
		
		List<User> ulist=dao.findAll();
		User user=null;
		for(User u: ulist)
		{
			if(u.getEmail().equals(email) && u.getPassword().equals(password))
			{
				user=u;
			}
		}
		return user;
	}
}