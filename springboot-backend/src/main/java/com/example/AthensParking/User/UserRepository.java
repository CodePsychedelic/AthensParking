package com.example.AthensParking.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
* Repository needs to be an interface (to be implemented) and needs to hold
* generics for 1) Object that it refers to and 2) Id type. Here we are using User
* as an object and Id type is Long - Interface responsible for data access
* */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
