package com.example.demo.security.services;

import java.util.List;

import com.example.demo.models.Producto;

public interface ProductoService {

	public List<Producto> findAll();
	
	public Producto findById(Long id);
	
	public Producto save(Producto foto);
	
	public void delete(Long id);
	
	List<Producto> findFav();
	
}