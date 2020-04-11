package com.example.organiser.repositories;

import com.example.organiser.entities.Thing;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ThingRepository extends JpaRepository<Thing, Integer> {
    Iterable<Thing> findAllByListId(Integer listId);
    Iterable<Thing> findAllById(Integer id);
}