package com.example.organiser.repositories;

import java.util.Optional;
import com.example.organiser.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByName(String name);
}