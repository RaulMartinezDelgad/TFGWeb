package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.models.Producto;

//Metodo de buscqueda
public interface ProductoRepository extends JpaRepository<Producto, Long>{
	public List<Producto> findByFavTrue();

}
