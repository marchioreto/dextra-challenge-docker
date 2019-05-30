package br.com.dextra.challenge.ingredient;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import br.com.dextra.challenge.burgers.Burger;
import lombok.Data;

@Data
@Entity
public class Ingredient {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private Double price;
	
	@ManyToMany(mappedBy = "ingredients")
    private Set<Burger> burgers = new HashSet<>();
	
	public Ingredient() {
		
	}
	
	public Ingredient(String name, Double price) {
		this.name = name;
		this.price = price;
	}
	
	
	
}
