package com.example.organiser.controllers;

import java.security.Principal;

import com.example.organiser.entities.Event;
import com.example.organiser.entities.ListToDo;
import com.example.organiser.entities.Thing;
import com.example.organiser.entities.User;
import com.example.organiser.repositories.EventRepository;
import com.example.organiser.repositories.ListToDoRepository;
import com.example.organiser.repositories.ThingRepository;
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

    @Autowired
    private ThingRepository thingRepository;

    @Autowired
    private ListToDoRepository listRepository;

    @Autowired
    private EventRepository eventRepository;

    /*@GetMapping(path = "/{user_id}")
    public User getUser(@PathVariable(name = "user_id") String user_id) {
        return userRepository.findById(Integer.parseInt(user_id)).get();
    }*/

    @GetMapping(path = "/")
    public User getUser(Principal principal) {
        System.out.println("Name: \"" + principal.getName() + "\"");
        return userRepository.findByName(principal.getName()).get();
    }

    @PutMapping(path = "/")
    public User updateUser(Principal principal, @RequestBody User user) {
        User savedUser = userRepository.saveAndFlush(user);
        return savedUser;
    }

    @GetMapping(path = "/{user_id}/lists/{list_id}/things")
    public Iterable<Thing> getThingsByList(@PathVariable(name = "list_id") String listId) {
        Integer list = listRepository.findAllById(Integer.parseInt(listId)).getId();
        return thingRepository.findAllByListId(list);
    }

    @GetMapping(path = "/{user_id}/lists/")
    public Iterable<ListToDo> getListsByUserId(@PathVariable(name = "user_id") String userId) {
        User user = userRepository.findById(Integer.parseInt(userId)).get();
        return listRepository.findAllByOwner(user);
    }

    @GetMapping(path = "/{user_id}/events/")
    public Iterable<Event> getEventsByUserId(@PathVariable(name = "user_id") String userId) {
        User user = userRepository.findById(Integer.parseInt(userId)).get();
        return eventRepository.findAllByOwner(user);
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