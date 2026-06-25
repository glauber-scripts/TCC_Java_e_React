package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*") // Permite conexão com o servidor do React
public class UsuarioController {

    @Autowired
    private UsuarioRepository repository;

    // READ (Listar todos)
    @GetMapping
    public List<Usuario> listarTodos() {
        return repository.findAll();
    }

    // CREATE (Inserir novo)
    @PostMapping
    public Usuario salvar(@RequestBody Usuario usuario){
        return repository.save(usuario);
    }

    // UPDATE (Editar existente)
    @PutMapping("/{id}")
    public Usuario editar(@PathVariable int id, @RequestBody Usuario usuarioAtualizado){
        return repository.findById(id).map(usuario -> {
            usuario.setTitulo(usuarioAtualizado.getTitulo());
            usuario.setAutor(usuarioAtualizado.getAutor());
            usuario.setPreco(usuarioAtualizado.getPreco());
            usuario.setCategoria(usuarioAtualizado.getCategoria());
            usuario.setAno(usuarioAtualizado.getAno());
            usuario.setDescricao(usuarioAtualizado.getDescricao());
            usuario.setImagem_url(usuarioAtualizado.getImagem_url());
            return repository.save(usuario);
        }).orElseThrow(() -> new RuntimeException("Usuario nao encontrado com o id: " + id));
    }

    // DELETE (Deletar)
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable int id){
        repository.deleteById(id);
    }
}
