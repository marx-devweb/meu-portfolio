<?php
    $nome = addcslashes($_POST['nome']);
    $email = addcslashes($_POST['email']);
    $mensagem = addcslashes($_POST['mensagem']);

    $emailDestino = "marx.devweb@gmail.com";
    $assuntoEmail = "Contato pelo formulário do portfólio" 

    $corpoEmail = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Telefone: ".$telefone;

    $cabeca = "From: teste@devweb.com"."\n"."Reply-to: ".$email."\n"."X-Mailer:PHP/".phpversion();

    if(mail($emailDestino,$assuntoEmail,$corpoEmail,$cabeca)){
        echo("Email enviado com sucesso")
    } else {
        echo("Houve um error ao enviar o email")
    }
?>