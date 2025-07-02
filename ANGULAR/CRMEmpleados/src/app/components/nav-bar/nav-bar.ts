import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule, FileIcon, LogOut, Route } from 'lucide-angular';
import Swal from 'sweetalert2';
import { UsuariosService } from '../../services/usuarios.service';
@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  readonly FileIcon = FileIcon;
  route = inject(Router)
  usuarioservice = inject(UsuariosService)

  async onClick() {
    const salir = await Swal.fire({
      title: 'Salir',
      text: 'Desea salir?',
      showCancelButton: true
    })

    if (salir.isConfirmed) {
      const token = localStorage.removeItem('token_crm')
      Swal.fire('¡Hasta ', 'Ha salido', 'success')
      this.route.navigateByUrl('/login')
    }
  }
}
