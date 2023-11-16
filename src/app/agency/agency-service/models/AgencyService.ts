export interface AgencyService {
  name: string;
  description: string;
  price: number;
  location: string;
  img_url: string | null;
  id: number;
  isOffer: boolean;
  priceOffer: number;
  agency_id: number;
  status: string;
  score: number;
  agency_name: string;
  agency_img: string;
}

export interface AgencyServiceRequest {
  name: string;
  description: string;
  location: string;
  score: number;
  price: number;
  newPrice: number;
  photos: string;
  isOffer: number;
  isPopular: number;
}

export interface AgencyServiceResponse extends AgencyServiceRequest {
  id: number;
  agency: {
    id: number;
    photo: string;
    name: string;
  };
  new_price: number; // Agrega la propiedad newPrice

}

export interface ServiceReview {
  id: number;
  date: string;
  comment: string;
  score: number;
  tourist: { name: string; lastName: string; photo: string };
}

export interface ReviewsResponse {
  content: ServiceReview[];
}
