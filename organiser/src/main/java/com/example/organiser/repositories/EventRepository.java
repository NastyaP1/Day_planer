package com.example.organiser.repositories;

import com.example.organiser.entities.Event;
import com.example.organiser.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Integer> {
    Iterable<Event> findAllByOwner(User user);
    Event findAllById(Integer id);
}