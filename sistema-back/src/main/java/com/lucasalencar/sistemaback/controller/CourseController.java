package com.lucasalencar.sistemaback.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.lucasalencar.sistemaback.model.Course;
import com.lucasalencar.sistemaback.repository.CourseRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    private final CourseRepository courseRepository;



    @GetMapping
    public @ResponseBody List<Course> list(){
        return courseRepository.findAll();
    }

}
