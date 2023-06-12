package com.asn2.models;

import jakarta.persistence.*;

@Entity
@Table(name="students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int uid;
    private String name;
    private int weight;
    private int height;
    private String hairColor;
    private int gpa;

    public Student() {
    }

    public Student(String name, int weight, int height, String hairColor, int gpa) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.gpa = gpa;
    }
    
    // Getters
    public int getUid() {
        return uid;
    }
    
    public String getName() {
        return name;
    }
    
    public int getWeight() {
        return weight;
    }
    
    public int getHeight() {
        return height;
    }
    
    public String getHairColor() {
        return hairColor;
    }
    
    public int getGpa() {
        return gpa;
    }
    
    // Setters
    public void setUid(int uid) {
        this.uid = uid;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public void setWeight(int weight) {
        this.weight = weight;
    }
    
    public void setHeight(int height) {
        this.height = height;
    }
    
    public void setHairColor(String hairColor) {
        this.hairColor = hairColor;
    }
    
    public void setGpa(int gpa) {
        this.gpa = gpa;
    }
    
}
