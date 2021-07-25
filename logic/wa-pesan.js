$(document).ready(function () {
    var orders = {};
    var order = "";
    var x = 1;
    var maxFieldLimit = 3;
    var add_more_button = $('.tambah');
    var Fieldwrapper = $('.pesan');


    $(add_more_button).click(function () {
        if (x < maxFieldLimit) {
        order = "";
        x++;
        $(Fieldwrapper).append('<div><input class="order'+x+'" type="text" name="field_name[]" value="" id="ordercuk" placeholder="Pesanan'+x+'"/><a href="javascript:void(0);" style="padding:0 7px;" id="'+x+'" class="remove" title="Remove field">x</a></div>'); // Add field html
        }
    });

    $(Fieldwrapper).on('click', '.remove', function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
        order = "";
    });

//kirim

$('#kirim').click(function () {

  if ($('#nama').val() == '') {
      $('#nama').focus();
      return false;
    }else if ($('#nomor').val() == '') {
      $('#nomor').focus();
      return false;
    }else if($('.alamat').val() == '') {
      $('.alamat').focus();
      return false;
    }


    //Info
    var nama = $('#nama').val(),
    nomor = $('#nomor').val(),
    url_wa = 'https://api.whatsapp.com/send',
    noAdmin = '---', //isi nomor tujuan
    alamat = $('#alamat').val();

    for (i = 1; i <= x; i++) {
      orders[i] = $('.order'+i).val();
    }
    for (i = 1; i <= x; i++) {
      // order += i+'.)'+orders[i]+"%0A";
      order += '%E2%97%BC'+orders[i]+"%0A";
    }

    goUrl = url_wa + '?phone=62' + noAdmin + '&text=Hai%2C%20Saya%20' + '%2A' + nama + '%2A' +'%0A%0ABerikut%20saya%20sertakan%20printout%20format%20pembelian%20saya%2C%20Harap%20segera%20diproses%20ya%20%3A%20%0A%0A' + '%2ANama%3A%2A%20' + nama + '%0A%2ANo.HP%2FWa%3A%2A%20' + nomor + '%0A%2AAlamat%3A%2A%20%20' + alamat + '%0A---------------------------------------------------%0A' + '_%2APesanan%2A_%20%3A%0A' + order;
    window.location = goUrl;

    // alert(order);
      //wajib
    order = "";

  return false;
});
});