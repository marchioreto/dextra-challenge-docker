package br.com.dextra.challenge.database;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import br.com.dextra.challenge.burgers.Burger;
import br.com.dextra.challenge.burgers.BurgerRepository;
import br.com.dextra.challenge.ingredient.Ingredient;
import br.com.dextra.challenge.ingredient.IngredientRepository;
import br.com.dextra.challenge.sale.SaleRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final IngredientRepository ingredientRepository;
	private final BurgerRepository burgerRepository;
	private final SaleRepository saleRepository;
	
	@Autowired
	public DatabaseLoader(IngredientRepository ingredientRepository,
			BurgerRepository burgerRepository,
			SaleRepository saleRepository) {
		this.ingredientRepository = ingredientRepository;
		this.burgerRepository = burgerRepository;
		this.saleRepository = saleRepository;
	}
	
	@Transactional
	@Override
	public void run(String... strings) throws Exception {
		
		this.ingredientRepository.save(new Ingredient("Alface", 0.4));
		this.ingredientRepository.save(new Ingredient("Bacon", 2.0));
		this.ingredientRepository.save(new Ingredient("Hambúrguer de carne", 3.0));
		this.ingredientRepository.save(new Ingredient("Ovo", 0.8));
		this.ingredientRepository.save(new Ingredient("Queijo", 1.5));
		
		Optional<Ingredient> alface = this.ingredientRepository.findById(1L);
		Optional<Ingredient> bacon = this.ingredientRepository.findById(2L);
		Optional<Ingredient> hamburguer = this.ingredientRepository.findById(3L);
		Optional<Ingredient> ovo = this.ingredientRepository.findById(4L);
		Optional<Ingredient> queijo = this.ingredientRepository.findById(5L);
		
	
		this.burgerRepository.save(new Burger("X-Bacon", bacon.get(), hamburguer.get(), queijo.get()));
		this.burgerRepository.save(new Burger("X-Burguer", hamburguer.get(), queijo.get()));
		this.burgerRepository.save(new Burger("X-Egg", ovo.get(), hamburguer.get(), queijo.get()));
		this.burgerRepository.save(new Burger("X-Egg Bacon", ovo.get(), bacon.get(), hamburguer.get(), queijo.get()));
	
	}

}
