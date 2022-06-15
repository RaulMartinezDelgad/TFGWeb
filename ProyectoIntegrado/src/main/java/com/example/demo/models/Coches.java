package com.example.demo.models;

//Esta clase corresponde a la entidad y tabla coches

import javax.persistence.*;


//Aquí añadimos la entidad coches ylos valores de la tabla

@Entity
@Table(name = "coches")
public class Coches {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(name = "marca")
	private String marca;
	@Column(name = "modelo")
	private String modelo;
	@Column(name = "precio")
	private int precio;
	
	//Creamos el constructor

	public Coches() {
	}

	
	//Constructor de los campos
	
	public Coches(String marca, String modelo, int precio) {
		super();
		this.marca = marca;
		this.modelo = modelo;
		this.precio = precio;
	}

	
	
	
	//Metodos geters and seters
	
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public int getPrecio() {
		return precio;
	}

	public void setPrecio(int precio) {
		this.precio = precio;
	}
	
	
	
	//Metodo String

	@Override
	public String toString() {
		return "Coches [id=" + id + ", marca=" + marca + ", modelo=" + modelo + ", precio=" + precio + "]";
	}


}