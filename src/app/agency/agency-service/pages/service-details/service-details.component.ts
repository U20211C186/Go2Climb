import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AgencyService,
  ServiceReview,
} from 'src/app/agency/agency-service/models/AgencyService';
import { AgencyServiceService } from 'src/app/agency/agency-service/service/agency-service.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css'],
})
export class ServiceDetailsComponent implements OnInit {
  userId = sessionStorage.getItem('userid') as string;
  currentService: AgencyService | undefined = undefined;
  reviews: ServiceReview[] = [];
  defaultImage: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private agencyServiceService: AgencyServiceService
  ) {
    this.defaultImage = '../../assets/default.png';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);

      this.agencyServiceService
        .getServiceById(params['id'])
        .subscribe((service) => {
          this.currentService = {
            id: service.id,
            name: service.name,
            description: service.description,
            agency_id: service.agency.id,
            img_url: service.photos,
            isOffer: Boolean(service.isOffer),
            location: service.location,
            price: service.price,
            priceOffer: service.newPrice,
            score: service.score,
            status: service.location,
            agency_name: service.agency.name,
            agency_img: service.agency.photo,
          };
        });

      this.agencyServiceService
        .getServicesReviewsById(params['id'])
        .subscribe((response) => (this.reviews = response.content));
    });
  }

  handleDeleteService(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);

      this.agencyServiceService
        .deleteService(params['id'], this.userId)
        .subscribe(() => {
          this.router.navigate(['home']);
        });
    });
  }

  handleGoToEdit(): void {
    this.router.navigate(['/add-service', this.currentService?.id]);
  }

  actualizarPuntaje(nuevoPuntaje: number): void {
    const serviceId = this.currentService?.id;
    if (serviceId) {
        // Envía una solicitud PATCH para actualizar el puntaje
        const requestBody = { score: nuevoPuntaje }; // Define el cuerpo de la solicitud

        this.agencyServiceService.actualizarPuntaje(serviceId, requestBody)
            .subscribe(() => {
                // Actualiza la interfaz de usuario o realiza cualquier otra acción si es necesario
            });
    }
}

}
