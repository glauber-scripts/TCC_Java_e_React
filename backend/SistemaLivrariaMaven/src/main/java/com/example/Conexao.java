package com.example;

import java.sql.Connection;
import java.sql.DriverManager;
public class Conexao {
    public static Connection conectar() {
        try {
            return DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/livraria_db",
                    "root",
                    "123456789"
            );
        } catch (Exception e) {
            System.out.println("Erro ao conectar: " + e.getMessage());
            return null;
        }
    }
}
