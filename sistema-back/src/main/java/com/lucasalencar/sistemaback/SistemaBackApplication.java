package com.lucasalencar.sistemaback;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.lucasalencar.sistemaback.model.Course;
import com.lucasalencar.sistemaback.repository.CourseRepository;

@SpringBootApplication
public class SistemaBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(SistemaBackApplication.class, args);
	}
	
	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository){
		return args -> {
			courseRepository.deleteAll();

			Course c = new Course();
			c.setName("connection angular spring");
			c.setCategory("back");

			courseRepository.save(c);
		};
	}
}
