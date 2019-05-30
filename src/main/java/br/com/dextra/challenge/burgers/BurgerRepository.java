package br.com.dextra.challenge.burgers;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BurgerRepository extends JpaRepository<Burger, Long> {

}
