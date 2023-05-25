$(document).ready(function() { // manipulação do evento de envio do formulário 

    $('.Usuário form').submit(function(event) {
        event.preventDefault(); // impede o envio do formulário
        
        var id = $('input[type="number"]', this).val();
        var nome = $('input[type="text"]', this).val();
        var email = $('input[type="email"]', this).val();
        var idade = $('input[type="number"]', this).val(); 
        
        alert("Usuário:\nId: " + id + "\nNome: " + nome + "\nEmail: " + email + "\nIdade: " + idade);// exibe uma mensagem com os valores preenchidos
    });

    $('.Experiência form').submit(function(event) {
        event.preventDefault(); 

        var id = $('input[type="number"]', this).val();
        var id_empresa = $('input[type="number"]', this).val();
        var empresa = $('input[type="text"]', this).val();
        var cargo = $('input[type="text"]', this).val();
        
        alert("Experiência:\nId: " + id + "\nId_Empresa: " + id_empresa + "\nEmpresa: " + empresa + "\nCargo: " + cargo);
    });
    
    $('.Habilidade form').submit(function(event) {
        event.preventDefault();

        var id = $('input[type="number"]', this).val();
        var habilidade = $('input[type="text"]', this).val();
        var nivel = $('input[type="number"]', this).val();
       
        alert("Habilidade:\nId: " + id + "\nHabilidade: " + habilidade + "\nNível: " + nivel);
    });
    
    $('.Certificado form').submit(function(event) {
        event.preventDefault();

        var id = $('input[type="number"]', this).val();
        var id_instituicao = $('input[type="number"]', this).val();
        var certificacao = $('input[type="text"]', this).val();
    
        alert("Certificado:\nId: " + id + "\nId_Instituição: " + id_instituicao + "\nCertificação: " + certificacao);
    });
    
    $('.Formação form').submit(function(event) {
        
        var id_instituicao = $('input[type="number"]', this).val();
        var instituicao = $('input[type="text"]', this).val();
        var cargo = $('input[type="text"]', this).val();
        
        alert("Formação:\nId_Instituição: " + id_instituicao + "\nInstituição: " + instituicao + "\nCargo: " + cargo);
    });
});
