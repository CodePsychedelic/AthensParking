package com.example.AthensParking.Greeting;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/v1/greeting")
public class GreetingController {

    private final GreetingControllerService greetingControllerService;

    /**
     * Use @Autowired to specify that greetingControllerService can be found
     * in the corresponding @Service class (instantiated by using this class)
     * */
    @Autowired
    public GreetingController(GreetingControllerService greetingControllerService) {
        this.greetingControllerService = greetingControllerService;
    }

    @GetMapping
    public Greeting getGreeting(@RequestParam(required = false) String type) {
        if (type == null) {
            return greetingControllerService.getGenericGreeting();
        } else {
            if (type.equals("cruel")) {
                return greetingControllerService.getCruelGreeting();
            } else if (type.equals("exciting")) {
                return greetingControllerService.getExcitingGreeting();
            } else {
                return greetingControllerService.getUnknownGreeting();
            }
        }
    }
}
