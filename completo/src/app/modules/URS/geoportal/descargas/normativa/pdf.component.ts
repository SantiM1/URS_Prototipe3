import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, ActivatedRoute } from '@angular/router';
import { FuseCardComponent } from '@fuse/components/card';

@Component({
    selector: 'app-pdf-viewer',
    templateUrl: './pdf.component.html',
    imports: [
        FuseCardComponent,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
    ],
    standalone: true
})
export class PdfViewerComponent {

    constructor(
              private router: Router,
              private route: ActivatedRoute
          ) {}
          navDescargas(): void {
            this.router.navigate(['../descargas'], { relativeTo: this.route }).then(() => {
                // Scroll to top after navigation
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });; ;
          }
    // Path to the PDF file (this could be a URL or a local path)
    pdfSrc: string = 'files/geoportal.pdf';

    // Function to download the PDF
    downloadPDF() {
        const link = document.createElement('a');
        link.href = this.pdfSrc;
        link.download = 'Normativa.pdf'; // Specify the file name
        link.click();
    }
}
