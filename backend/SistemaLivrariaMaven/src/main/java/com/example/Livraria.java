/*
package com.example;

import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan
public class Livraria {
    public static void main(String[] args) {
        //InserirLivro.inserir();
        //ListarLivros.listar();
        SpringApplication.run(Livraria.class, args);
    }
}
*/

package com.example;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.util.List;

@SpringBootApplication
public class Livraria {

    public static void main(String[] args) {
        SpringApplication.run(Livraria.class, args);
    }

    @Bean
    CommandLineRunner initDatabase(LivroRepository repository) {
        return args -> {
            // Limpa o banco em memória antes de inserir para não duplicar
            repository.deleteAll();

            // Livro 1
            Livro l1 = new Livro();
            l1.setTitulo("O Senhor dos Anéis");
            l1.setAutor("J.R.R. Tolkien");
            l1.setCategoria("Fantasia");
            l1.setAno(1954);
            l1.setPreco(79.9);
            l1.setDescricao("A grande jornada pelo anel na Terra Média.");
            l1.setImagem_url("https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400");

            // Livro 2
            Livro l2 = new Livro();
            l2.setTitulo("Clean Code");
            l2.setAutor("Robert C. Martin");
            l2.setCategoria("Tecnologia");
            l2.setAno(2008);
            l2.setPreco(95.0);
            l2.setDescricao("O manual indispensável de boas práticas de programação.");
            l2.setImagem_url("https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400");

            // Livro 3
            Livro l3 = new Livro();
            l3.setTitulo("O Hobbit");
            l3.setAutor("J.R.R. Tolkien");
            l3.setCategoria("Fantasia");
            l3.setAno(1937);
            l3.setPreco(59.9);
            l3.setDescricao("A aventura de Bilbo Bolseiro.");
            l3.setImagem_url("https://upload.wikimedia.org/wikipedia/pt/7/72/The_Hobbit_Cover.JPG");

            // Livro 4
            Livro l4 = new Livro();
            l4.setTitulo("Dom Quixote");
            l4.setAutor("Miguel de Cervantes");
            l4.setCategoria("Romance");
            l4.setAno(1958);
            l4.setPreco(59.9);
            l4.setDescricao("De tanto ler antigos livros de cavalaria, o pacato Alonso Quijano perde o juízo e resolve levar a vida de um cavaleiro andante. Depois de equipar-se com a velha armadura herdada dos bisavós e de fazer-se ordenar por um estalajadeiro, transforma-se no mui afamado Dom Quixote de La Mancha");
            l4.setImagem_url("https://www.lpm.com.br/livros/imagens/dom_quixote_hq_9788525433633_hd.jpg");

            // Salva os livros idênticos aos que você tinha no Docker!
            repository.saveAll(List.of(l1, l2, l3, l4));
            System.out.println("Livros iniciais carregados no banco H2 com sucesso!");
        };
    }
}