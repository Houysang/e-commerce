import { defineStore } from "pinia";
import axios from "axios";

// export interface Group {
//   id: number
//   name: string
// }

export interface Category {
  id: number
  name: string
  url: string
  group: string
  productCount: number
  color: string
  image: string
}

export interface Promotion {
  id: number
  title: string
  color: string
  image: string
  buttonText: string
  buttonColor: string
}

export interface Product {
  id: number
  name: string
  rating: number
  size: string
  image: string
  price: string
  promotionAsPercentage: string
  categoryId: number
  instock: number
  countSold: number
  group: string
  isPopular?: boolean
  // bgpromotionColor: string
}

export const useProductStore = defineStore("product", {
  // state: (): {
  //   groups: Group[],
  //   promotions: Promotion[],
  //   categories: Category[],
  //   products: Product[]
  // } => ({
  //   groups: [],
  //   promotions: [],
  //   categories: [],
  //   products: []
  // }),

  state: () => ({
       groups: [] as string[],
       promotions: [] as Promotion[],
       categories: [] as Category[],
       products: [] as Product[]
  }),

  getters: {
    // 1. List all categories by group name
    getCategoriesByGroup: (state) => {
      return (groupName: string) =>
        state.categories.filter((category) => category.group === groupName);
    },

    // 2. List all products by group name
    getProductsByGroup: (state) => {
      return (groupName: string) =>{
        const categoryIds = state.categories
          .filter((category) => category.group === groupName)
          .map((category) => category.id!);
        return state.products.filter((product) => 
          categoryIds.includes(product.categoryId)
        );
      };
    },

    // 3. List all products by categoryId
    getProductsByCategory: (state) => {
      return (categoryId: number) =>
        state.products.filter((product) => product.categoryId === categoryId);
    },

    // 4. Popular products (countSold > 10)
    getPopularProducts: (state) => {
      return state.products.filter((product) => product.countSold > 10);
    },
  },

  actions: {
    async loadAllData() {
      try {
        // const base = "http://localhost:3000/api";

        const [groupRes, promoRes, catRes, prodRes] = await Promise.all([
          axios.get('http://localhost:3000/api/groups'),
          axios.get('http://localhost:3000/api/promotions'),
          axios.get('http://localhost:3000/api/categories'),
          axios.get('http://localhost:3000/api/products')
        ]);
        
        this.groups = groupRes.data;
        this.categories = catRes.data;
        this.promotions = promoRes.data;
        this.groups = groupRes.data;
        this.products = prodRes.data;
      } catch (err) {
        console.error("Failed loading API:", err);
      }
    }
  }
})

