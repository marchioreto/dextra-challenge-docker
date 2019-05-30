package br.com.dextra.challenge.burgers;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import br.com.dextra.challenge.ingredient.Ingredient;
import br.com.dextra.challenge.sale.Sale;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(exclude = "ingredients")
@Entity
public class Burger {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	@ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "recipes",
        joinColumns = @JoinColumn(name = "burger_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "ingredient_id", referencedColumnName = "id"))
	private Set<Ingredient> ingredients;
	
	@ManyToMany(mappedBy = "burgers")
    private Set<Sale> sales = new HashSet<>();
	
	public Burger() {
		
	}
	
	public Burger(String name) {
		this.name = name;
	}
	
	public Burger(String name, Ingredient... ingredients) {
		this.name = name;
		this.ingredients = Stream.of(ingredients).collect(Collectors.toSet());
        this.ingredients.forEach(item -> item.getBurgers().add(this));
	}

}
