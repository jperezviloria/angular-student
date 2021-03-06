import { Injectable } from "@angular/core";
import Swal, { SweetAlertResult } from 'sweetalert2'

// class Types {
//   success: SweetAlertType;
//   warning: SweetAlertType;
//   error: SweetAlertType;
//   info: SweetAlertType;
//   question: SweetAlertType;.
// }

export const types  = {
  success: "success",
  warning: "warning",
  error: "error",
  info: "info",
  question: "question"
};

@Injectable({
  providedIn: "root"
})
export class ModalService {
/*  openAlert(title: string, text: string, type = types.success): Promise<SweetAlertResult<any> {
    Swal.fire({
      type: type,
      title: title,
      text: text,
      animation: false,
      allowOutsideClick: false,
      customClass: {
        popup: 'animated tada',
        header:"alert-header",
        confirmButton: "btn btn-success"
      }
    });
  }
  openAlertError(title: string, text: string, type: SweetAlertType = types.error) {
    Swal.fire({
      type: type,
      title: title,
      text: text,
      animation: false,
      allowOutsideClick: false,
      customClass: {
        popup: 'animated tada',
        header:"alert-header",
        confirmButton: "btn btn-success"
      }
    });
  }
*/

  confirmAlert(){
      Swal.fire({
        title: 'Student was saved',
        text: 'Now, the student is in database', 
        icon: 'success',
        showCancelButton: true,
        showConfirmButton: false,
        allowOutsideClick: false,
        animation: false,
        customClass: {
            popup: 'animated tada',
            header:"alert-header"
          }
      })
  }

  openSesionAlert(type = types.info) {
    Swal.fire({
      title: 'Cierre de Balance!',
      text: 'Se está cerrando el balance. Este proceso puede demorar unos minutos.',
      showCancelButton: false,
      showConfirmButton: false,
      allowOutsideClick: false,
      animation: false,
      customClass: {
        popup: 'animated tada',
        header:"alert-header"
      }
   });
  }

 /* openConfirm(
    title: string,
    text: string,
    type= types.success,
    confirmCallback: Function,
    okBtnText: string = "Aceptar",
    cancleBtnText: string = "Cancelar",
    okBtnColor: string = "#3085d6",
    cancleBtnColor: string = "#aaa"
  ) {
    Swal.fire({
      title: title,
      text: text,
      type: type,
      showCancelButton: true,
      confirmButtonText: okBtnText,
      cancelButtonText: cancleBtnText,
      confirmButtonClass: "btn btn-success",
      cancelButtonClass: "btn btn-danger",
      confirmButtonColor: okBtnColor,
      cancelButtonColor: cancleBtnColor,
      buttonsStyling: false,
      reverseButtons: true,
      customClass: {
        popup: 'animated tada',
        header:"alert-header"
      }
    }).then(result => {
      if (result.value) {
        confirmCallback();
      }
    });
  }
  
  close() {
    Swal.close();
  }
  */
}
