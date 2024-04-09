package com.example.AthensParking.User;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

/*
* Used to populate our tables with dummy (or not) data. For the momment it will be dummy data.
* This is like a process that will populate the users table initially.
* */
@Configuration
public class UserConfiguration {

    @Bean
    CommandLineRunner commandLineRunner(
            UserRepository repository
    ) {
        return args -> {
            User alkis = new User("alkis", "skata");
            User manolis = new User("manolis", "skata");

            repository.saveAll(List.of(alkis, manolis));
        };
    }
}
