package com.lucasalencar.sistemaback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lucasalencar.sistemaback.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long>{

}
