export class Product {
    constructor(
      public id: number,
      public productDescriptionEnglish: string,
      public productDescriptionFrench: string,
      public brandNameEnglish: string,
      public brandNameFrench: string,
      public productType: string,
      public additionalProductIdentification: string,
      public targetMarket: string,
      public productImageUrl: string,
      public status: string
    ){
  
    }
  
  }