import { agency } from "./agency"
import { Iservice } from "./service"
import { Iservicehired } from "./service-hired"
import { Tourist } from "./tourist"

export interface hiredservice {
  status: string,
  amount: number,
  price: number
  scheduledDate: string,
  service: Iservicehired
  tourist: Tourist
}