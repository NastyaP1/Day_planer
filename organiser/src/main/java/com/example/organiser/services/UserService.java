package com.example.organiser.services;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

import javax.validation.constraints.NotNull;

import com.example.organiser.entities.*;
import com.example.organiser.repositories.*;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(@NotNull String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByName(username);
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new UsernameNotFoundException("user " + username + " was not found!");
        }
    }

}