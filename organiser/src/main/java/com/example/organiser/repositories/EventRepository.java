package com.example.organiser.repositories;

import com.example.organiser.entities.Event;
import com.example.organiser.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, String> {
    Iterable<Event> findAllByOwner(User user);
    Iterable<Event> findAllById(Integer id);
}