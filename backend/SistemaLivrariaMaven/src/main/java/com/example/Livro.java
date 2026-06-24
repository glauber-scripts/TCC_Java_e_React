package com.example;

import jakarta.persistence.*;

@Entity
@Table(name = "livros")
public class Livro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String titulo;
    private String autor;
    private double preco;
    private String categoria;
    private int ano;

    @Column(columnDefinition = "TEXT")
    private String descricao;
    private String imagem_url;

    // Getters & Setters
    public int getId() {return id;}
    public void setId(int id) {this.id = id;}

    public String getTitulo() {return titulo;}
    public void setTitulo(String titulo) {this.titulo = titulo;}

    public String getAutor() {return autor;}
    public void setAutor(String autor) {this.autor = autor;}

    public double getPreco() {return preco;}
    public void setPreco(double preco) {this.preco = preco;}

    public String getCategoria() {return categoria;}
    public void setCategoria(String categoria) {this.categoria = categoria;}

    public int getAno() {return ano;}
    public void setAno(int ano) {this.ano = ano;}

    public String getDescricao() {return descricao;}
    public void setDescricao(String descricao) {this.descricao = descricao;}

    public String getImagem_url() {return imagem_url;}
    public void setImagem_url(String imagem_url) {this.imagem_url = imagem_url;}
}
