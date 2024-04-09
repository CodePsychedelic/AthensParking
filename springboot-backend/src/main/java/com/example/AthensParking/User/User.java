package com.example.AthensParking.User;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/*
* User model. Will have id, username and password initially.
* */
@Entity
@Table(
        name = "\"user\"",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = { "username", "password" })
        })
public class User {
    @Id
    @GeneratedValue(generator="user_seq")
    @SequenceGenerator(name="user_seq",sequenceName="USER_SEQ", allocationSize=1)
    private Long id; // https://www.geeksforgeeks.org/hibernate-generatedvalue-annotation-in-jpa/
    // https://stackoverflow.com/questions/2595124/how-does-the-jpa-sequencegenerator-annotation-work

    @Getter @Setter
    private String username;
    @Getter @Setter
    private String password;

    public User(){};
    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
