$(document).ready(function() {
    $('#modal1Image').on('click', function() {
      $(this).hide(); // Esconde a imagem
      $('#modal1Close').hide(); // Esconde o botão de fechar
      $('#modal1 .modal-body-text').show(); // Mostra o texto
    });

    $('#modal2Image').on('click', function() {
      $(this).hide(); // Esconde a imagem
      $('#modal2Close').hide(); // Esconde o botão de fechar
      $('#modal2 .modal-body-text').show(); // Mostra o texto
    });

    $('#modal3Image').on('click', function() {
      $(this).hide(); // Esconde a imagem
      $('#modal3Close').hide(); // Esconde o botão de fechar
      $('#modal3 .modal-body-text').show(); // Mostra o texto
    });
  });