import AsyncStorage from "@react-native-async-storage/async-storage";

/*
Abstraction for the the asynclocalStorage API
*/

class ShoppingCartStorage {
  constructor(namespace = "shoppingCart") {
    this.namespace = namespace; // prefix we throw in front of the keys
  }
  // static for now
  static async getProducts() { 
    const rawProducts = await AsyncStorage.getItem(
      `${this.namespace}:products`
    );

    return rawProducts ? JSON.parse(rawProducts) : [];
  }

  static async addProduct(product) { // should i pass ID or the actual product obj
      const currentProducts = await this.getProducts();
      const newProducts = [...currentProducts, product];

      await AsyncStorage.setItem(
          `${this.namespace}:products`,
          JSON.stringify(newProducts),
      );
  }

  static async clearProducts() {
      await AsyncStorage.removeItem(`${this.namespace}:products`);
  }

}

export default ShoppingCartStorage;