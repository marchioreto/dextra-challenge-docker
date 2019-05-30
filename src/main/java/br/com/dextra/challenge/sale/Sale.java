package br.com.dextra.challenge.sale;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import org.hibernate.annotations.CreationTimestamp;

import br.com.dextra.challenge.burgers.Burger;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(exclude = "burgers")
@Entity
public class Sale {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Double total;	

	@CreationTimestamp
	private Date saleDate;
	
	@ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "sale_itens",
        joinColumns = @JoinColumn(name = "sale_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "burger_id", referencedColumnName = "id"))
	private List<Burger> burgers;
	
	public Sale() {
		
	}
	
	public Sale(Double total, Burger... burges) {
		this.total = total;
		this.burgers = Stream.of(burges).collect(Collectors.toList());
		//this.burgers = Stream.of(burges).collect(Collectors.toSet());
        this.burgers.forEach(item -> item.getSales().add(this));
	}
}
