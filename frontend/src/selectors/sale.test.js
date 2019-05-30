import * as saleSelector from './sale';

let bacon;
let cheese;
let egg;
let hamburger;
let lettuce;
let xBacon;
let xBurger;

beforeAll(() => {
  bacon = {
    name: 'Bacon',
    price: 2.0,
  };

  cheese = {
    name: 'Queijo',
    price: 1.5,
  };

  egg = {
    name: 'Ovo',
    price: 0.8,
  };

  hamburger = {
    name: 'Hambúrguer de carne',
    price: 3.0,
  };

  lettuce = {
    name: 'Alface',
    price: 0.4,
  };

  xBurger = {
    ingredients: [hamburger, cheese],
    prica: 4.5,
  };

  xBacon = {
    ingredients: [hamburger, bacon, cheese],
    price: 6.5,
  };
});

afterEach(() => {
  xBacon = {
    ...xBacon,
    ingredients: [hamburger, bacon, cheese],
  };
  xBurger = {
    ...xBurger,
    ingredients: [hamburger, cheese],
  };
});

describe('Sale Selector', () => {
  describe('calculate promotional ingredients', () => {
    it('should be zero', () => {
      expect(saleSelector.calculatePromotionalIngredients(xBacon.ingredients, undefined)).toBe(0);
      expect(saleSelector.calculatePromotionalIngredients([], undefined)).toBe(0);
    });

    it('should be normal price, without customization', () => {
      expect(saleSelector.calculatePromotionalIngredients(xBacon.ingredients, 'Queijo')).toBe(1.5);
      expect(saleSelector.calculatePromotionalIngredients(xBacon.ingredients, 'Hambúrguer de carne')).toBe(3);
    });

    describe('burger with three hamburgers', () => {
      beforeEach(() => {
        xBacon = {
          ...xBacon,
          ingredients: [
            ...xBacon.ingredients,
            hamburger,
            hamburger,
          ],
        };
      });

      it('should be promotional price to hamburger', () => {
        expect(saleSelector.calculatePromotionalIngredients(xBacon.ingredients, 'Hambúrguer de carne')).toBe(6);
      });

      it('should be normal price to cheese', () => {
        expect(saleSelector.calculatePromotionalIngredients(xBacon.ingredients, 'Queijo')).toBe(1.5);
      });
    });

    describe('burger with four hamburgers', () => {
      beforeEach(() => {
        xBacon = {
          ...xBacon,
          ingredients: [
            ...xBacon.ingredients,
            hamburger,
            hamburger,
            hamburger,
          ],
        };
      });

      afterEach(() => {
        xBacon = {
          ...xBacon,
          ingredients: [hamburger, bacon, cheese],
        };
      });

      it('should be promotional price to hamburger', () => {
        expect(saleSelector.calculatePromotionalIngredients(xBacon.ingredients, 'Hambúrguer de carne')).toBe(9);
      });

      it('should be normal price to cheese', () => {
        expect(saleSelector.calculatePromotionalIngredients(xBacon.ingredients, 'Queijo')).toBe(1.5);
      });
    });

    describe('burger with six hamburgers', () => {
      beforeAll(() => {
        xBacon = {
          ...xBacon,
          ingredients: [
            ...xBacon.ingredients,
            hamburger,
            hamburger,
            hamburger,
            hamburger,
            hamburger,
          ],
        };
      });

      it('should be promotional price to hamburger, ', () => {
        expect(saleSelector.calculatePromotionalIngredients(xBacon.ingredients, 'Hambúrguer de carne')).toBe(12);
      });

      it('should be normal price to cheese', () => {
        expect(saleSelector.calculatePromotionalIngredients(xBacon.ingredients, 'Queijo')).toBe(1.5);
      });
    });
  });

  describe('Calculate Not Promotional Ingredients', () => {
    describe('Sum not promotional ingredients', () => {
      it('should sum bacon only', () => {
        expect(saleSelector.calculateNotPromotionalIngredients(xBacon.ingredients)).toBe(2);
        xBacon.ingredients = [
          ...xBacon.ingredients,
          hamburger,
        ];
        expect(saleSelector.calculateNotPromotionalIngredients(xBacon.ingredients)).toBe(2);
        xBacon.ingredients = [
          ...xBacon.ingredients,
          hamburger,
          bacon,
        ];
        expect(saleSelector.calculateNotPromotionalIngredients(xBacon.ingredients)).toBe(4);
      });
      it('should sum bacon and egg', () => {
        xBacon.ingredients = [
          ...xBacon.ingredients,
          hamburger,
          bacon,
          egg,
        ];
        expect(saleSelector.calculateNotPromotionalIngredients(xBacon.ingredients)).toBe(4.8);
        xBacon.ingredients = [
          ...xBacon.ingredients,
          egg,
        ];
        expect(saleSelector.calculateNotPromotionalIngredients(xBacon.ingredients)).toBe(5.6);
      });
      it('should sum bacon, egg and lettuce', () => {
        xBacon.ingredients = [
          ...xBacon.ingredients,
          hamburger,
          bacon,
          egg,
          lettuce,
        ];
        expect(saleSelector.calculateNotPromotionalIngredients(xBacon.ingredients)).toBe(5.2);
        xBacon.ingredients = [
          ...xBacon.ingredients,
          egg,
        ];
        expect(saleSelector.calculateNotPromotionalIngredients(xBacon.ingredients)).toBe(6);
      });
    });
  });

  describe('Find Lettuce', () => {
    it('should not find lettuce', () => {
      expect(saleSelector.findLettuce(xBacon.ingredients)).toBe(false);
    });
    it('should find lettuce', () => {
      xBacon.ingredients = [
        ...xBacon.ingredients,
        lettuce,
      ];
      expect(saleSelector.findLettuce(xBacon.ingredients)).toBe(true);
    });
  });

  describe('Find Bacon', () => {
    it('should not find bacon', () => {
      expect(saleSelector.findBacon(xBurger.ingredients)).toBe(false);
    });
    it('should find bacon', () => {
      expect(saleSelector.findBacon(xBacon.ingredients)).toBe(true);

      xBurger.ingredients = [
        ...xBurger.ingredients,
        bacon,
      ];
      expect(saleSelector.findBacon(xBurger.ingredients)).toBe(true);
    });
  });

  describe('Calculate item price', () => {
    it('should be default price from menu', () => {
      expect(saleSelector.calculateItemPrice(xBacon.ingredients)).toBe(6.5);
      expect(saleSelector.calculateItemPrice(xBurger.ingredients)).toBe(4.5);
    });

    it('should be promotional price with 10% off', () => {
      xBurger = {
        ...xBurger,
        ingredients: [
          ...xBurger.ingredients,
          lettuce,
        ],
      };
      expect(saleSelector.calculateItemPrice(xBurger.ingredients)).toBe(4.41);
      xBurger = {
        ...xBurger,
        ingredients: [
          ...xBurger.ingredients,
          hamburger,
        ],
      };
      expect(saleSelector.calculateItemPrice(xBurger.ingredients)).toBe(7.11);
    });

    it('should be promotional price with 10% off and three meat units', () => {
      xBurger = {
        ...xBurger,
        ingredients: [
          ...xBurger.ingredients,
          hamburger,
          hamburger,
          lettuce,
        ],
      };
      expect(saleSelector.calculateItemPrice(xBurger.ingredients)).toBe(7.11);
    });
  });

  describe('Calculate sale total', () => {
    describe('Sale with menu item with customatization', () => {
      it('should sum default price', () => {
        const state = {
          sale: {
            itens: [xBurger, xBacon],
          },
        };
        expect(saleSelector.calculateTotalSale(state)).toBe(11);        
      });

      it('should sum promotional price', () => {
        xBurger = {
          ...xBurger,
          ingredients: [
            ...xBurger.ingredients,
            lettuce,
          ],
        };
        const state = {
          sale: {
            itens: [xBurger, xBacon],
          },
        };
        expect(saleSelector.calculateTotalSale(state)).toBe(10.91);
      });
    });
  });
});
