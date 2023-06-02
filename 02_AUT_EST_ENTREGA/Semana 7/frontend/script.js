$(document).ready(function() { // manipulação do evento de envio do formulário 

    $('.Usuário form').submit(function(event) {
        event.preventDefault(); // impede o envio do formulário

        var id = $('input[type="number"]', this).val();
        var nome = $('input[type="text"]', this).val();
        var email = $('input[type="email"]', this).val();
        var idade = $('input[type="number"]', this).val();

        $.ajax({
            url: 'Curriculo/criarUsuarios.php',
            type: 'POST',
            data: {
                id: id,
                nome: nome,
                email: email,
                idade: idade
            },
            success: function(response) { 
                alert(response);
            },
            error: function(xhr, status, error) { 
                console.log(xhr.responseText);
            }
        });
    });

    $('.Experiência form').submit(function(event) {
        event.preventDefault();

        var id = $('input[type="number"]', this).val();
        var id_empresa = $('input[type="number"]', this).val();
        var empresa = $('input[type="text"]', this).val();
        var cargo = $('input[type="text"]', this).val();

        $.ajax({
            url: 'Curriculo/criarExperiencia.php',           
            type: 'POST',
            data: {
                id: id,
                id_empresa: id_empresa,
                empresa: empresa,
                cargo: cargo
            },
            success: function(response) {
                alert(response);
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    });

    $('.Habilidade form').submit(function(event) {
        event.preventDefault();

        var id = $('input[type="number"]', this).val();
        var habilidade = $('input[type="text"]', this).val();
        var nivel = $('input[type="number"]', this).val();

        $.ajax({
            url: 'Curriculo/criarHabilidade.php',
            type: 'POST',
            data: {
                id: id,
                habilidade: habilidade,
                nivel: nivel
            },
            success: function(response) {
                alert(response);
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    });

    $('.Certificado form').submit(function(event) {
        event.preventDefault();

        var id = $('input[type="number"]', this).val();
        var id_instituicao = $('input[type="number"]', this).val();
        var certificacao = $('input[type="text"]', this).val();

        $.ajax({
            url: 'Curriculo/criarCertificado.php',
            type: 'POST',
            data: {
                id: id,
                id_instituicao: id_instituicao,
                certificacao: certificacao
            },
            success: function(response) {
                alert(response);
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    });

    $('.Formação form').submit(function(event) {
        event.preventDefault();

        var id_instituicao = $('input[type="number"]', this).val();
        var instituicao = $('input[type="text"]', this).val();
        var cargo = $('input[type="text"]', this).val();

        $.ajax({
            url: 'Curriculo/criarFormacao.php',
            type: 'POST',
            data: {
                id_instituicao: id_instituicao,
                instituicao: instituicao,
                cargo: cargo
            },
            success: function(response) {
                alert(response);
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    });
});
