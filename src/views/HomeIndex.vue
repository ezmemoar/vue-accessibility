<template>
  <div>
    <nav class="flex justify-between items-center py-5">
      <div class="container">
        <img src="https://picsum.photos/30/30?random=1" alt="logo" class="rounded-full">
      </div>
      <ul class="flex gap-3">
        <li>
          <ULink to="/">Home</ULink>
        </li>
        <li>
          <ULink to="/local">Local</ULink>
        </li>
        <li>
          <ULink to="/store">Store</ULink>
        </li>
      </ul>
    </nav>
  </div>

  <main class="space-y-10 mt-5">
    <header class="text-center">
      <h1 class="font-bold text-3xl">Accessibility</h1>
      <h5 class="text-base">Penjelasan tentang accessibility</h5>
    </header>
    <section aria-label="tentang accessibility" class="space-y-2">
      <h2 class="font-bold text-2xl">Apa itu accessibility</h2>
      <p>Accessibility adalah tentang memberikan web akses kepada khalayak luas seperti orang dengan disabilitas, low
        connection internet, dll.</p>
      <p>Dengan kita menerapkan accessibility, maka kita juga memberikan moral yang baik dalam mempresentasikan web
        kita.</p>
    </section>
    <section aria-label="cara menambahkan accessibility" class="space-y-2">
      <h2 class="font-bold text-2xl">Cara menambahkan accessibility</h2>
      <p>Accessibility bisa ditambahkan dengan mengatur semantic HTML dan aria attribute.</p>
    </section>
    <aside>
      <h3 class="font-bold text-lg">More links</h3>
      <ul class="flex flex-col list-disc ml-5">
        <li>
          <a href="https://google.com">Google</a>
        </li>
        <li>
          <a href="https://facebook.com">Facebook</a>
        </li>
      </ul>
    </aside>
    <footer class="text-center text-sm">
      Copyright &copy; Raquis | on accessibility
    </footer>
  </main>
</template>
