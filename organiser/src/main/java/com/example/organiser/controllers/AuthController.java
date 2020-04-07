package com.example.organiser.controllers;

import com.example.organiser.entities.User;
import com.example.organiser.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin( origins = "*", maxAge = 3600)
@RequestMapping(path = "/auth")
public class AuthController {
    
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path = "/registration")
    public String registration(User user) {
        return "registration endpoint";
    }

    @GetMapping(path = "/login")
    public String login(User user) {
        return "login endpoint";
    }

}