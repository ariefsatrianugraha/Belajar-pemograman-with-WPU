var makanan = prompt('Silahkan masukan makanan dan miniman \n cth: nasi,bubur,ayam,daging,chiki,mie') ;

// switch(makanan){
//     case 'nasi':
//         alert('makanan sehat');
//         break;
//     case 'bubur':
//         alert('makanan sehat');
//         break;
//     case 'ayam':
//         alert('makanan sehat');
//         break;
//     case 'daging':
//         alert('makanan sehat');
//         break;
//     case 'chiki':
//         alert('makanan tidak sehat');
//         break;
//     case 'mie':
//         alert('makanan tidak sehat');
//         break;
//     default:
//         alert('yang anda masukan bukan makanan');
//         break;
// }

switch(makanan){
    case 'nasi':
    case 'bubur':
    case 'ayam':
    case 'daging':
        alert('makanan sehat');
        break;
    case 'chiki':
    case 'mie':
        alert('makanan tidak sehat');
        break;
    default:
        alert('yang anda masukan bukan makanan');
        break;
}