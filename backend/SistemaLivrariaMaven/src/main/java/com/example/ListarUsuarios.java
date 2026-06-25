package com.example;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
public class ListarUsuarios {
    public static void listar() {
        try {
            Connection conn = Conexao.conectar();
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM livros");
            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id"));
                System.out.println("Título: " + rs.getString("titulo"));
                System.out.println("Autor: " + rs.getString("autor"));
                System.out.println("Preço R$: " + rs.getDouble("preco"));
                System.out.println("Categoria: " + rs.getString("categoria"));
                System.out.println("Ano: " + rs.getInt("ano"));
                System.out.println("Descrição: " + rs.getString("descricao"));
                System.out.println("Imagem URL: " + rs.getString("imagem_url"));
                System.out.println("------------------------");
            }
        } catch (Exception e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
