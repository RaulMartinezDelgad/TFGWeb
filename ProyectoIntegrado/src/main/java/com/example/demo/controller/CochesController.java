package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Coches;
import com.example.demo.repository.CochesRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CochesController {
	@Autowired
	CochesRepository cochesRepository;

	
	//Obtener todos los coches
	@GetMapping("/coches")
	public ResponseEntity<List<Coches>> getTodosCoches(@RequestParam(required = false) String marca) {
		try {
			List<Coches> coches = new ArrayList<Coches>();
			if (marca == null)
				cochesRepository.findAll().forEach(coches::add);
			else
				cochesRepository.findByMarcaContaining(marca).forEach(coches::add);
			if (coches.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(coches, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	//Obtener todos los coches por id
	@GetMapping("/coches/{id}")
	public ResponseEntity<Coches> getCochesPorId(@PathVariable("id") long id) {
		Optional<Coches> cochesData = cochesRepository.findById(id);
		if (cochesData.isPresent()) {
			return new ResponseEntity<>(cochesData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	
	//Crear coches

	@PostMapping("/coches")
	public ResponseEntity<Coches> crearCoches(@RequestBody Coches coches) {
		try {
			Coches _coches = cochesRepository

					.save(new Coches(coches.getMarca(), coches.getModelo(), coches.getPrecio()));

			return new ResponseEntity<>(_coches, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	
	
	//Actualizar coches
	@PutMapping("/coches/{id}")
	public ResponseEntity<Coches> actualizarCoches(@PathVariable("id") long id, @RequestBody Coches coches) {
		Optional<Coches> cochesData = cochesRepository.findById(id);
		if (cochesData.isPresent()) {
			Coches _coches = cochesData.get();
			_coches.setMarca(coches.getMarca());
			_coches.setModelo(coches.getModelo());
			_coches.setPrecio(coches.getPrecio());
			return new ResponseEntity<>(cochesRepository.save(_coches), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	//Eliminar coches

	@DeleteMapping("/coches/{id}")
	public ResponseEntity<HttpStatus> eliminarCoches(@PathVariable("id") long id) {
		try {
			cochesRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
	
	
	//Eliminar todos los coches
	@DeleteMapping("/coches")
	public ResponseEntity<HttpStatus> eliminarTodosCoches() {
		try {
			cochesRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
