export interface PharmacyProduct {
  id: string;
  name: string;
  composition: string;
  dosageForm: string;
  physicalProperties?: string;
  pharmacologicalProperties: string;
  indications: string;
  contraindications: string;
  specialInstructions?: string;
  sideEffects?: string;
  dosageAndAdministration: string;
  storageConditions: string;
  packaging: string;
  manufacturer: string;
  price: number;
  inStock: boolean;
  imageUrl: string;
  externalLink?: string;
}

export interface PharmacyCategory {
  id: string;
  name: string;
  description: string;
  products: PharmacyProduct[];
}

export interface PharmacyData {
  categories: PharmacyCategory[];
}
