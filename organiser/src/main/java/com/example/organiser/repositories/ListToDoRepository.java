package com.example.organiser.repositories;

import com.example.organiser.entities.ListToDo;
import com.example.organiser.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ListToDoRepository extends JpaRepository<ListToDo, Integer> {
    Iterable<ListToDo> findAllByOwner(User user);
    ListToDo findAllById(Integer id);
}