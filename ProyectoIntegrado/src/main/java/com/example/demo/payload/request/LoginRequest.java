package com.example.demo.payload.request;

import javax.validation.constraints.NotBlank;

//Metodos para solicitud de inicio de sesion
public class LoginRequest {
@NotBlank
private String username;
@NotBlank
private String password;


//Getters and setters de usuario y constraseña
public String getUsername() {
return username;
}
public void setUsername(String username) {
this.username = username;
}
public String getPassword() {
return password;
}
public void setPassword(String password) {
this.password = password;
}
}