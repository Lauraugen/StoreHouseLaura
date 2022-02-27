"use strict";

class View{
    constructor(){
        this.tiendasContainer = $("#tiendasContainer");
    }

    init() {
        this.tiendasContainer.empty();
        
        this.tiendasContainer.append(`<div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
        <div class="portfolio-wrap">
          <figure>
            <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
            <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="link-preview portfolio-lightbox" title="Preview"><i class="bx bx-plus"></i></a>
            <a href="portfolio-details.html" class="link-details" title="More Details"><i class="bx bx-link"></i></a>
          </figure>

          <div class="portfolio-info">
            <h4><a href="portfolio-details.html">App 1</a></h4>
            <p>App</p>
          </div>
        </div>
      </div>` );
    }
    
    bindInit(handler) {
        $(document).ready(function (event) {
            
            handler()
        });
    }
}

export default View;