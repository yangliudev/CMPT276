package com.asn2.controllers;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;

import com.asn2.models.Student;
import com.asn2.models.StudentRepository;

import jakarta.servlet.http.HttpServletResponse;

@Controller
public class StudentsController {
    @Autowired
    private StudentRepository studentRepo;

    @GetMapping("/")
    public String getAllStudents(Model model){
        List<Student> students = studentRepo.findAll();
        model.addAttribute("students", students);
        return "students/showAll";
    }

    @GetMapping("/redirectToAdd")
    public String redirectToAddPage() {
        return "redirect:/add.html";
    }

    @PostMapping("/students/add")
    public String addStudent(@RequestParam Map<String, String> newStudent, HttpServletResponse response) {
        String newName = newStudent.get("name");
        int newWeight = Integer.parseInt(newStudent.get("weight"));
        int newHeight = Integer.parseInt(newStudent.get("height"));
        String newHairColor = newStudent.get("hairColor");
        int newGpa = Integer.parseInt(newStudent.get("gpa"));
        
        Student student = new Student(newName, newWeight, newHeight, newHairColor, newGpa);
        studentRepo.save(student);
        
        response.setStatus(HttpServletResponse.SC_CREATED);
        return "/students/addedStudent";
    }

    @DeleteMapping("/students/delete/{uid}")
    public ResponseEntity<String> deleteStudent(@PathVariable int uid) {
        Optional<Student> optionalStudent = studentRepo.findById(uid);

        if (optionalStudent.isPresent()) {
            studentRepo.deleteById(uid);
            return ResponseEntity.ok("Student with ID " + uid + " deleted successfully.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
