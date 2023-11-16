import { agency } from "./agency"

export interface Iservicehired {
  id: number,
  name: String,
  price: number,
  location: String,
  photos: String,
  description: String,
  isOffer: boolean,
  priceOffer: number,
  agency_id: number,
  status: string,
  score: number
  agency: agency
}
