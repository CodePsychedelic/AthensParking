package com.example.AthensParking.Greeting;

import lombok.Getter;
import lombok.Setter;
@Getter @Setter
public class Greeting {

    String greeting;

    public Greeting(String greeting) {
        this.greeting = greeting;
    }
}
