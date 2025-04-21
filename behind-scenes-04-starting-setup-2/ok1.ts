export class Vehicle {

    stockNumber?: string;
    drivetrain: Drivetrain;
    mileage: string;
    vin?: string;
    brand: string;
    marketingSeries: string;
    family: string[];
    year?: number;
    dealerCd: string;
    dealerCategory: string;
    distributorCd: string;
    model: {
      modelCd: string;
      marketingName: string;
      marketingTitle: string;
      modelDescription?: string;
      modelNumber?: string;
      modelYear?: string;
      modelName?: string;
    };
    mpg: {
      city: number;
      highway: number;
      combined: number;
    };
    mpge: {
      city: number;
      highway: number;
      combined: number;
    };
    engine: {
      engineCd: string;
      name: string;
      fuelType?: string;
      noOfCylinders?: string;
    };
    bed: {};
    cab: {};
    transmission: {
      transmissionType: string;
    };
    options: Option[];
    holdStatus: string;
    extColor?: {
      colorCd: string;
      marketingName: string;
      colorHexCd: string;
      nvsName: string;
      colorDesc?: string;
    } | any;
    intColor: {
      colorCd: string;
      colorSwatch: string;
      marketingName: string;
      nvsName: string;
      colorDesc?: string;
    };
    media: Media[];
    price?: {
      baseMsrp: number;
      totalMsrp: number;
      advertizedPrice: number;
      sellingPrice: number;
      sellingPriceDiscounted: boolean;
    } | any;
    isPooledInventory?: boolean; // For Task MSTM-14223
    disclaimer: Disclaimer[];
    weightRating: string;
    offers: Offers[];
    certificationStatus?: string;
    eta?: Eta;
    vehicleType?: 'new' | 'used' | 'cpo';
  
    constructor(vehicle?: Partial<Vehicle>) {
      if (vehicle) {
        this.vin = vehicle.vin;
        this.extColor = vehicle?.extColor;
        this.year = vehicle.year;
        this.price = vehicle?.price;
      }
    }
  }
  
  export interface Disclaimer {
    disclaimerName: string;
    disclaimerType: string;
  }
  export interface Offers {
    type: string;
    amount: any;
    disclaimer: any;
    id: string;
  
  }
  export interface Drivetrain {
    title: string;
  }
  
  export interface Media {
    imageTag: string;
    size: string;
    type: string;
    href: string;
    fileName?: string;
  }
  
  export interface Option {
    optionCd: string;
    marketingName: string;
    marketingLongName: string;
    optionType: string;
    packageInd: boolean;
  }
  
  export interface Eta {
    currFromDate: string;
    lastUpdatedAt: string;
    currToDate: string;
  
  }
  



    
  
