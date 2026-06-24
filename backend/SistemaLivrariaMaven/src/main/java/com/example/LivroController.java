package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/livros")
@CrossOrigin(origins = "*") // Permite conexão com o servidor do React
public class LivroController {

    @Autowired
    private LivroRepository repository;

    // READ (Listar todos)
    @GetMapping
    public List<Livro> listarTodos() {
        return repository.findAll();
    }

    // CREATE (Inserir novo)
    @PostMapping
    public Livro salvar(@RequestBody Livro livro){
        return repository.save(livro);
    }

    // UPDATE (Editar existente)
    @PutMapping("/{id}")
    public Livro editar(@PathVariable int id, @RequestBody Livro livroAtualizado){
        return repository.findById(id).map(livro -> {
            livro.setTitulo(livroAtualizado.getTitulo());
            livro.setAutor(livroAtualizado.getAutor());
            livro.setPreco(livroAtualizado.getPreco());
            livro.setCategoria(livroAtualizado.getCategoria());
            livro.setAno(livroAtualizado.getAno());
            livro.setDescricao(livroAtualizado.getDescricao());
            livro.setImagem_url(livroAtualizado.getImagem_url());
            return repository.save(livro);
        }).orElseThrow(() -> new RuntimeException("Livro nao encontrado com o id: " + id));
    }

    // DELETE (Deletar)
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable int id){
        repository.deleteById(id);
    }
}
