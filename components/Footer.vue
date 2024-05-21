<template>
    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="/logo.png" class="h-8" alt="iPets Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap">iPets</span>
                </a>
                <ul
                    class="visited:text-gray-500 flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <ULink to="/about" class="hover:underline me-4 md:me-6">{{ $t('messages.footer.about') }}</ULink>
                    </li>
                    <li>
                        <ULink to="/policy" class="hover:underline me-4 md:me-6">{{ $t('messages.footer.policy') }}</ULink>
                    </li>
                    <li>
                        <ULink to="/terms" class="hover:underline me-4 md:me-6">{{ $t('messages.footer.terms') }}</ULink>
                    </li>
                    <li>
                        <ULink to="/contact" class="hover:underline">{{ $t('messages.footer.contact') }}</ULink>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021 <a
                    href="/" class="hover:underline">DreamPuppy</a>. Todos os direitos reservados.</span>
        </div>
    </footer>
</template>

<style>
a:visited {
  color: inherit; /* ou a cor desejada */
  text-decoration: none; /* remove o sublinhado, se necessário */
}
</style>