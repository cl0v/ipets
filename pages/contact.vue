<template>

    <Head>
        <Title> Me Ajuda</Title>
    </Head>
    <section class="contact-container">
        <form action="/client" method="post">

            <div class="contact-form">
                <h1>Seu pet está te esperando</h1>
                <div class="contact-input">
                    <p>Nome completo</p>
                    <input type="text" name="nome" required>
                </div>
                <div class="contact-input">
                    <p>Email de contato</p>
                    <input type="email" name="email" required>
                </div>
                <div class="contact-input">
                    <p>Telefone com DDD</p>
                    <input type="tel" name="tel" required>
                </div>


                <div class="contact-alert">
                    <p>
                        Os contatos são feitos via telefone ou
                        whatsapp, entre às 08:00 e 18:00.
                    </p>
                    <p>
                        Não pedimos dados bancários ou nenhum dado
                        via telefone, por questões de segurança.
                    </p>
                    <br>
                    <button class="btn" type="submit">Enviar dados</button>
                </div>
            </div>
        </form>

    </section>
</template>


<style>
@import url("~/assets/css/contact.css");
/* @import url("~/assets/css/base.css"); */
</style>