package com.example.organiser.controllers;

import java.security.Principal;

import com.example.organiser.entities.User;
import com.example.organiser.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(path = "/api/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    /*@GetMapping(path = "/{user_id}")
    public User getUser(@PathVariable(name = "user_id") String user_id) {
        return userRepository.findById(Integer.parseInt(user_id)).get();
    }*/

    @GetMapping(path = "/")
    public User getUser(Principal principal) {
        System.out.println("Name: \"" + principal.getName() + "\"");
        userRepository.findByName(principal.getName()).get();

        return userRepository.findByName(principal.getName()).get();
    }

    @PutMapping(path = "/")
    public User updateUser(Principal principal, @RequestBody User user) {
        User savedUser = userRepository.saveAndFlush(user);
        return savedUser;
    }

    /*@PutMapping(path = "/{user_id}")
    public User updateUser(@PathVariable(name = "user_id") String user_id, @RequestBody User user) {
        User savedUser = userRepository.saveAndFlush(user);
        return savedUser;
    }*/

    // @PreAuthorize
    // Callandparse
    // Principal
    // AuthenticationPrincipal
    // SecurityContextHolder.getContext().getAuthentication().getPrincipal()
    // responseEntity
    // saveAndFlush
}