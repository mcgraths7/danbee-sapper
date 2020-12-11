<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style: none;
  }

  li {
    color: #a3a3a3;
  }

  [aria-current] {
    position: relative;
    color: #333333;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
  }
</style>

<nav>
  <ul>
    <li>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">home</a>
    </li>
    <li>
      <a
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">about</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        aria-current={segment === 'cv' ? 'page' : undefined}
        href="cv">research/cv</a>
    </li>
  </ul>
</nav>
