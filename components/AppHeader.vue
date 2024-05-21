<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <div class="logo-brand">
            <img src="/logo.png" alt="Logo" class="logo">
            <NuxtLink href="/gallery">
                <h1 style="margin: 0; padding: 0;">iPets</h1>
            </NuxtLink>
        </div>
    <div>
    <div class="d-flex justify-content-between">
    <form class="d-flex mx-2" role="search">
        <input class="form-control me-2" type="search" placeholder="Digite a Raça" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
    </form>
    <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <NuxtLink class="nav-link" to="/contact">Contato</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink class="nav-link" href="/about">Sobre</NuxtLink>
            </li>
        </ul>
    </div>
</div>
    </div>
</div>

</nav>
</template>

<style>
@import url("~/assets/css/app-header.css");
</style>