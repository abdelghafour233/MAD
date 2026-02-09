import React from 'react';

export interface Product {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  category: CategoryId;
  image: string;
  description: string;
  features: string[];
}

export type CategoryId = 'glasses' | 'watches' | 'car-accessories' | 'misc';

export interface Category {
  id: CategoryId;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
}

export interface OrderForm {
  name: string;
  city: string;
  phone: string;
}