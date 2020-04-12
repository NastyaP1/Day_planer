package com.example.organiser.repositories;

import com.example.organiser.entities.ListToDo;
import com.example.organiser.entities.Thing;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ThingRepository extends JpaRepository<Thing, Integer> {
    Iterable<Thing> findAllByListId(ListToDo listId);
    Thing findAllById(Integer id);
}