package com.example;

import java.sql.Connection;
import java.sql.PreparedStatement;
public class InserirLivro {
    public static void inserir() {
        try {
            Connection conn = Conexao.conectar();
            String sql = "INSERT INTO livros (titulo, autor, preco, categoria, ano, descricao, imagem_url) VALUES (?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, "Spring Boot Avançado");
            stmt.setString(2, "Carlos Silva");
            stmt.setDouble(3, 89.90);
            stmt.setString(4, "Tecnologia");
            stmt.setInt(5, 2024);
            stmt.setString(6, "Um guia completo sobre o ecossistema Spring.");
            stmt.setString(7, "https://loremflickr.com/400/400/computer");
            stmt.execute();
            System.out.println("Livro cadastrado com sucesso!");
        } catch (Exception e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
