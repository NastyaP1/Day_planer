package com.example.organiser.repositories;

import com.example.organiser.entities.ListToDo;
import com.example.organiser.entities.Thing;
import com.example.organiser.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ThingRepository extends JpaRepository<Thing, Integer> {
    Iterable<Thing> findAllByOwner(User user);
    Iterable<Thing> findAllByList(ListToDo listId);
    Thing findAllById(Integer id);
}