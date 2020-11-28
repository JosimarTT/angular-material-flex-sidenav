import Swal from 'sweetalert2';

const swalIcons = {
  1: 'success',
  2: 'error',
  3: 'warning',
  4: 'info',
  5: 'question',
};

export const SwalBasic = async (icon: number, title: string, text: string) => {
  const selectedIcon = (n: number) => swalIcons[n];
  await Swal.fire({
    icon: selectedIcon(icon),
    title,
    text,
    confirmButtonColor: '#324191',
  });
};

export const SwalValidation = async (
  validateForm: boolean,
  message: string,
  messageError: string,
) => {
  let success = false;
  if (validateForm) {
    await Swal.fire({
      title: '¿Está seguro?',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        success = true;
      }
    });
  } else {
    await Swal.fire({
      title: messageError,
      icon: 'error',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3085d6',
    });
  }
  return success;
};
