package com.example.AthensParking.Greeting;

import org.springframework.stereotype.Service;

/**
 *  This class should be a spring bean = a class that needs to be instantiated inside the controller that uses it
 *  Use the @Service annotation to do that. We could also use the @Component annotation which is the same.
 * */
@Service
public class GreetingControllerService {
    final String cruelGreeting = "Hello Cruel World";
    final String genericGreeting = "Hello World";
    final String excitingGreeting = "Hello World!";
    final String unknownGreeting = "?";

    Greeting getCruelGreeting() {
        return new Greeting(cruelGreeting);
    }

    Greeting getGenericGreeting() {
        return new Greeting(genericGreeting);
    }

    Greeting getExcitingGreeting() {
        return new Greeting(excitingGreeting);
    }

    Greeting getUnknownGreeting() {
        return new Greeting(unknownGreeting);
    }
}
