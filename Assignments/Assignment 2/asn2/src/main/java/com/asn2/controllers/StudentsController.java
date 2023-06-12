package com.asn2.controllers;

import java.util.ArrayList;

import org.hibernate.mapping.List;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StudentsController {
    @GetMapping("/students/view")
    public String getAllStudents() {
        return "students/showAll";
    }
}
