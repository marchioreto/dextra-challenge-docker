package br.com.dextra.challenge;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import br.com.dextra.challenge.burgers.Burger;
import br.com.dextra.challenge.ingredient.Ingredient;
import br.com.dextra.challenge.sale.Sale;

@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer {
	
	@Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Burger.class);
        config.exposeIdsFor(Ingredient.class);
        config.exposeIdsFor(Sale.class);
    }
}
