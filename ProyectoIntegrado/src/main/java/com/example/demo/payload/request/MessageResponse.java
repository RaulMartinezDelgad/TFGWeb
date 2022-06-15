package com.example.demo.payload.request;


//Esta clase es para el mensaje de respuesta
public class MessageResponse {
	private String message;

	public MessageResponse(String message) {
		this.message = message;
	}
	
	
	//Metodo de get and set

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}