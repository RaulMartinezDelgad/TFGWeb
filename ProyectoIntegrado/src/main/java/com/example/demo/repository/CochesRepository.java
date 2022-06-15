package com.example.demo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Coches;



//Esta interfaz se extiende de JpaRepository para métodos CRUD y métodos de búsqueda personalizados.

@Repository
public interface CochesRepository extends JpaRepository<Coches, Long> {
	
List<Coches> findByMarcaContaining(String marca);

}
